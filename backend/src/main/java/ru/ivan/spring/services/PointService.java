package ru.ivan.spring.services;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.ivan.spring.models.User;
import ru.ivan.spring.repositories.PointRepository;
import ru.ivan.spring.models.Point;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Service
public class PointService {

    @PersistenceContext
    private EntityManager em;
    @Autowired
    PointRepository pointRepository;


    public List<PointRepository.NoUserInfo> getAllPointsByInitiator(User user) {
        List<PointRepository.NoUserInfo> points = pointRepository.findAllByInitiator(user);
        return points;
    }
    public boolean deleteAllByInitiator(User user){
        pointRepository.deleteAllByInitiator(user);
        return true;
    }

    public boolean savePoint(Point p) {
        pointRepository.save(p);
        return true;
    }



}
