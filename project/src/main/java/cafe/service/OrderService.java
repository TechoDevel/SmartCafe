package cafe.service;

import cafe.persistence.domain.Order;

import java.util.List;

public interface OrderService {
    List<Order> getOrders();
}
