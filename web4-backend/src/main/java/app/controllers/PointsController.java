package app.controllers;

import app.data.ResponseMessage;
import app.entities.Point;
import app.entities.User;
import app.service.PointsService;
import app.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@EnableWebSecurity
public class PointsController {

    @Autowired
    PointsService pointsService;

    @Autowired
    UserService userService;

    public boolean checkPoint(Double x,Double y,Double r) {

        return (x >= 0 && x <= r && y >= 0 && y <= r) || (x <= 0 && y >= 0 && x * x + y * y <= r/2 * r/2) || (x >= 0 && y <= 0 && r>=x-y );
    }


    @CrossOrigin
    @GetMapping("/show")
    public List<Point> getPoints(){
        return this.pointsService.getAllPoints();
    }

    @CrossOrigin
    @RequestMapping("/delete")
    public ResponseMessage deletePoints(){
        try {
            pointsService.deleteAll();
            return new ResponseMessage(200, "Успешное удаление");
        }catch (Exception e){
            return new ResponseMessage(500, "Ошибка удаления");
        }

    }

    @CrossOrigin
    @PostMapping("/add")
    public ResponseMessage add(@RequestBody String point){
        try{
            long startTime = System.nanoTime();
            Double x= Double.valueOf(point.split(",")[0]);
            Double y= Double.valueOf(point.split(",")[1]);
            Double r= Double.valueOf(point.split(",")[2]);
            String currtime = point.split(",")[3]+point.split(",")[4];
            //System.out.println(currtime);
            String check= String.valueOf(checkPoint(x,y,r));
            String elatedTime = String.valueOf(System.nanoTime() - startTime).substring(0,3);
            Point addPoint=new Point();
            addPoint.setX(x);addPoint.setY(y);addPoint.setR(r);addPoint.setChecked(check);addPoint.setCurrtime(currtime);addPoint.setExtime(elatedTime);
            pointsService.savePoint(addPoint);
            return new ResponseMessage(200, "Успешно добавлен");
        }catch (Exception e){
            return new ResponseMessage(500, "Ошибка добавления");
        }

    }

}