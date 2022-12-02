package ru.ivan.spring.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class BasicPoint {

    protected double x;
    protected double y;
    protected double r;
    protected boolean hit;




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
        this.hit = isRectangleHit() || isCircleHit() || isTriangleHit();}

    public boolean isHit() {
        return hit;
    }

}
