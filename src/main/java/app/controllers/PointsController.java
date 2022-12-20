package app.controllers;

import app.data.ResponseMessage;
import app.entities.Point;
import app.entities.User;
import app.service.PointsService;
import app.service.UserService;
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
    public ResponseMessage addPoint(@RequestBody Point point) {
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
            List<Point> list = pointsService.getAllPointsByUsername(user);
            return new ResponseMessage(200, list);
        } else return new ResponseMessage(400, "No owner!");
    }

    @GetMapping()
    public ResponseMessage showAllPointByUsername() {
        User user = userService.getUser(SecurityContextHolder.getContext().getAuthentication().getName());
        try {
            if ((user.getUsername() == null) || (user.getUsername().isEmpty()))
                return new ResponseMessage(400, null);
        } catch (NullPointerException ex) {
            return new ResponseMessage(400, null);
        }
        List<Point> list = pointsService.getAllPointsByUsername(user);
        return new ResponseMessage(200, list);
    }

    @DeleteMapping()
    public ResponseMessage deletePoint(@RequestBody Point request) {
        User user = userService.getUser(SecurityContextHolder.getContext().getAuthentication().getName());
        List<Point> list = pointsService.getAllPointsByUsername(user);
        if (request.getId() != null) {
            request.setOwner(user);
            pointsService.deletePoint(request);
            list = pointsService.getAllPointsByUsername(user);

            return new ResponseMessage(200, list);
        } else return new ResponseMessage(400, list);
    }

    public PointsController(PointsService pointsService, UserService userService) {
        this.pointsService = pointsService;
        this.userService = userService;
    }
}