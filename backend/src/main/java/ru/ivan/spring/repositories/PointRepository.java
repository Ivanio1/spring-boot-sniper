package ru.ivan.spring.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.ivan.spring.models.Point;
import ru.ivan.spring.models.User;

import java.util.List;



public interface PointRepository extends JpaRepository <Point, Long> {

    interface NoUserInfo {
        double getX();
        double getY();
        double getR();
        boolean isHit();
        String getCurrtime();
        int getExtime();
    }


    List<NoUserInfo> findAllByInitiator(User initiator);

    void deleteAllByInitiator(User initiator);
}
