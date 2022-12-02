package ru.ivan.spring.controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.ivan.spring.repositories.PointRepository;
import ru.ivan.spring.util.jwt.JwtUtils;
import ru.ivan.spring.models.BasicPoint;
import ru.ivan.spring.models.Point;
import ru.ivan.spring.models.User;
import ru.ivan.spring.services.PointService;
import ru.ivan.spring.services.UserService;

import javax.servlet.http.HttpServletRequest;
import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/model")
public class ModelController {

    @Autowired
    private PointService pointService;
    @Autowired
    private JwtUtils jwtUtils;
    @Autowired
    private UserService userService;

    @GetMapping(value = "/points", produces = "application/json")
    @CrossOrigin
    public ResponseEntity<?> getPoints(HttpServletRequest request) {
        String jwtToken = jwtUtils.extractJwtToken(request);
        if (jwtToken == null) return ResponseEntity.badRequest().body("Bad token");
        List<PointRepository.NoUserInfo> pointList = pointService.getAllPointsByInitiator(getUserByJwtToken(jwtToken));
        return ResponseEntity.ok(pointList);
    }

    @GetMapping(value = "/points/graph", params = {"r"}, produces = "application/json")
    @CrossOrigin
    public ResponseEntity<?> recalculatedRadiusPoints(HttpServletRequest request, @RequestParam(value = "r") double r) {
        String jwtToken = jwtUtils.extractJwtToken(request);
        if (jwtToken == null) return ResponseEntity.badRequest().body("Bad token");
        List<PointRepository.NoUserInfo> pointList = pointService.getAllPointsByInitiator(getUserByJwtToken(jwtToken));
        List<BasicPoint> basicPoints = new ArrayList<>();
        for (PointRepository.NoUserInfo p : pointList) {
            BasicPoint basicPoint = new BasicPoint();
            basicPoint.setX(p.getX());
            basicPoint.setY(p.getY());
            basicPoint.setR(r);
            basicPoint.validate();
            basicPoints.add(basicPoint);
        }
        return ResponseEntity.ok(basicPoints);
    }

    @PostMapping(value = "/points")
    @CrossOrigin
    public ResponseEntity<Point> addPoint(HttpServletRequest req, @RequestBody Point point) {
        long startTime = System.nanoTime();
        User initiator = getUserByJwtToken(jwtUtils.extractJwtToken(req));
        point.setInitiator(initiator);
        int elatedTime = Integer.parseInt(String.valueOf(System.nanoTime() - startTime).substring(0, 3));
        point.setExtime(elatedTime);
        point.validate();
        if (!pointService.savePoint(point)) return ResponseEntity.badRequest().body(point);
        return ResponseEntity.ok(point);
    }

    @RequestMapping(value = "/delete")
    @CrossOrigin

    public ResponseEntity<String> deletePoint(HttpServletRequest req) {
        User initiator = getUserByJwtToken(jwtUtils.extractJwtToken(req));
        if (!pointService.deleteAllByInitiator(initiator)) return ResponseEntity.badRequest().body("Delete error");
        return ResponseEntity.ok("Delete successfully");
    }

    private User getUserByJwtToken(String jwtToken) {
        return (User) userService.loadUserByUsername(jwtUtils.getUsernameFromJwtToken(jwtToken));
    }
}
