package app.service;

import app.entities.Point;
import app.entities.User;
import app.repositories.PointRepo;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PointsService {

    private final PointRepo pointRepo;

    public PointsService(PointRepo pointRepo) {
        this.pointRepo = pointRepo;
    }

    public void addPoint(Point point) {
        point.setChecked(checkPoint(point));
        pointRepo.save(point);
    }



    public void updatePoint(Point point) {
        pointRepo.deletePointById(point.getId());
        addPoint(point);
    }
    public Page<Point> findAll(Pageable pageable, User owner){
        return pointRepo.findAllByOwner(pageable,owner);
    }

    public void deletePoint(Point point) {
        pointRepo.delete(point);
    }

    public boolean checkPoint(Point p) {
        double x = p.getX();
        double y = p.getY();
        double r = p.getR();
        return (x >= 0 && x <= r && y >= 0 && y <= r) || (x <= 0 && y >= 0 && x * x + y * y <= r / 2 * r / 2) || (x >= 0 && y <= 0 && r >= x - y);
    }
}