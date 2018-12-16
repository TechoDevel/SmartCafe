package cafe.persistence.domain;

import javax.persistence.*;
import java.util.List;

@Entity
@javax.persistence.Table(name = "table_", schema = "public")
public class Table {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer id;

    @Column(name = "number")
    private Integer number;

    @OneToMany(mappedBy = "table")
    private List<Order> orders;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getNumber() {
        return number;
    }

    public void setNumber(Integer number) {
        this.number = number;
    }

    public List<Order> getOrders() {
        return orders;
    }

    public void setOrders(List<Order> orders) {
        this.orders = orders;
    }
}
