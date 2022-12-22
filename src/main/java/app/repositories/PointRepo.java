package app.repositories;

import app.entities.Point;
import app.entities.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PointRepo extends PagingAndSortingRepository<Point, Integer> {
    Page<Point> findAllByOwner(Pageable pageable,User owner);
  //  List<Point> findAllByOwner(User owner);
    void deletePointById(Integer id);

}