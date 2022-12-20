package app.entities;

import lombok.*;
import org.hibernate.Hibernate;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "pointz")
public class Point {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private Double x;
    private Double y;
    private Double r;
    @ManyToOne(cascade = CascadeType.ALL)
    private User owner;
    private Boolean checked;
    private String currtime;
    private Double extime;

    public Point(Double x, Double y, Double r) {
        this.x = x;
        this.y = y;
        this.r = r;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        Point point = (Point) o;
        return id != null && Objects.equals(id, point.id);
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }
}