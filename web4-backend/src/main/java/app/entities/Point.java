package app.entities;

import lombok.*;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "points")
public class Point {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column(name = "x")
    private Double x;

    @Column(name = "y")
    private Double y;

    @Column(name = "r")
    private Double r;

    @Column(name = "checked")
    private String checked;

    @Column(name = "currtime")
    private String currtime;

    @Column(name = "extime")
    private String extime;


    public Point(Double x, Double y, Double r, String checked,String currtime,String extime) {

    }
}