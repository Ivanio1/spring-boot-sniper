package app.repositories;

import app.entities.Point;
import app.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PointRepo extends JpaRepository<Point, Integer> {

    List<Point> findAllByOwner(User owner);
    void deletePointById(Integer id);

}