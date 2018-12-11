package cafe.dto

import com.fasterxml.jackson.annotation.JsonCreator
import com.fasterxml.jackson.annotation.JsonProperty

data class OrderItem @JsonCreator constructor(
        @JsonProperty("dishId")
        val dishId: Int,
        @JsonProperty("count")
        val count: Int
)