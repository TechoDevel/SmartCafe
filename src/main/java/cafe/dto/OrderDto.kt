package cafe.dto

import com.fasterxml.jackson.annotation.JsonCreator
import com.fasterxml.jackson.annotation.JsonProperty

data class OrderDto @JsonCreator constructor(
        @JsonProperty("orderNumber")
        val orderNumber: Int?,
        @JsonProperty("table")
        val table: Int,
        @JsonProperty("guestsCount")
        val guestsCount: Int,
        @JsonProperty("comment")
        val comment: String,
        @JsonProperty("orderItems")
        val orderItems: List<OrderItem>
)