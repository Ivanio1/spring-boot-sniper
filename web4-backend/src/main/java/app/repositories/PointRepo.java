package app.repositories;

import app.entities.Point;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PointRepo extends JpaRepository<Point, Integer> {


    void deletePointById(Integer id);

}