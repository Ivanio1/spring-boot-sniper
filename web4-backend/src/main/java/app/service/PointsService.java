package app.service;

import app.entities.Point;
import app.repositories.PointRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;

@Service
public class PointsService {

    @Autowired
    private PointRepo pointRepo;


    public List<Point> getAllPoints() {
        return pointRepo.findAll();
    }

    public void savePoint(Point point) {

        pointRepo.save(point);
    }

    public void deleteAll() {
        pointRepo.deleteAll();
    }
}