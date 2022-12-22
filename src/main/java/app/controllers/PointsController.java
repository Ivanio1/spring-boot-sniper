package app.controllers;

import app.data.ResponseMessage;
import app.entities.Point;
import app.entities.User;
import app.service.PointsService;
import app.service.UserService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@EnableWebSecurity
@RequestMapping("/points")
public class PointsController {

    private final PointsService pointsService;

    private final UserService userService;


    @PostMapping()
    public ResponseMessage addPoint(@RequestBody Point point,Pageable pageable) {
        long startTime = System.nanoTime();
        if ((point.getR() == null) || (point.getX() == null) || (point.getY() == null) ||
                (point.getY().isNaN()) || (point.getX().isNaN()) || (point.getR().isNaN()))
            return new ResponseMessage(400, "x/y/r is null");

       User user = userService.getUser(SecurityContextHolder.getContext().getAuthentication().getName());
       String username=user.getUsername();
        if ((username != null) && (!username.isEmpty())) {
            double elatedTime = Double.parseDouble(String.valueOf(System.nanoTime() - startTime).substring(0, 3));
            point.setExtime(elatedTime);
            point.setOwner(user);
            pointsService.addPoint(point);
            Page<Point> list = pointsService.findAll(pageable,user);
            return new ResponseMessage(200, list);
        } else return new ResponseMessage(400, "No owner!");
    }



    @GetMapping()
    public ResponseMessage showPaginatedPoints(Pageable pageable) {
        User user = userService.getUser(SecurityContextHolder.getContext().getAuthentication().getName());
        try {
            if ((user.getUsername() == null) || (user.getUsername().isEmpty()))
                return new ResponseMessage(400, null);
        } catch (NullPointerException ex) {
            return new ResponseMessage(400, null);
        }
        Page<Point> list = pointsService.findAll(pageable,user);
        return new ResponseMessage(200, list);
    }



    @DeleteMapping()
    public ResponseMessage deletePoint(@RequestBody Point request,Pageable pageable) {
        User user = userService.getUser(SecurityContextHolder.getContext().getAuthentication().getName());

        if (request.getId() != null) {
            request.setOwner(user);
            pointsService.deletePoint(request);
            Page<Point> list = pointsService.findAll(pageable,user);
            return new ResponseMessage(200, list);
        } else return new ResponseMessage(400, "list");
    }

    public PointsController(PointsService pointsService, UserService userService) {
        this.pointsService = pointsService;
        this.userService = userService;
    }
}