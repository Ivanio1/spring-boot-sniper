package ru.ivan.spring.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "point_table")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Point extends BasicPoint {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private double x;
    private double y;
    private double r;
    private boolean hit;
    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private User initiator;
    private String currtime;
    private int extime;


    public boolean isHit() {
        return hit;
    }

    private boolean isRectangleHit() {
        return x >= 0 && x <= r && y >= 0 && y <= r;
    }

    private boolean isCircleHit() {
        return x <= 0 && y >= 0 && x * x + y * y <= r/2 * r/2;
    }

    private boolean isTriangleHit() {
        return x >= 0 && y <= 0 && r>=x-y;
    }

    public void validate() {
        this.hit = isRectangleHit() || isCircleHit() || isTriangleHit();
    }
}
