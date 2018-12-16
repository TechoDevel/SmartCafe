package cafe.controllers

import cafe.dto.OrderDto
import cafe.dto.OrderItem
import cafe.dto.OrderNumberDto
import org.springframework.web.bind.annotation.*

@RestController
class OrderController {

    @PostMapping("/waiter/order")
    fun createOrder(@RequestBody orderDto: OrderDto): OrderNumberDto {
        return OrderNumberDto(1)
    }

    @GetMapping("/cook/order")
    fun getInfoAboutOrder(): OrderDto {
        val orderItemList = ArrayList<OrderItem>()
        orderItemList.add(OrderItem(1, 2))
        return OrderDto(123, 1, 2, "comment", orderItemList)
    }
}