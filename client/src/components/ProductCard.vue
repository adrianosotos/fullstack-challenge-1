<template>
  <v-card :to="`/product/${product.id}`" height="450px">
    <v-img 
      :src="`http://localhost:5000/images/${product.image}`"
      height="250"
    ></v-img>
    <v-card-title>{{ product.shortDescription }}</v-card-title>
    <v-card-text>
      <p>{{ priceFormmater(product.price) }}</p>
    </v-card-text>
  </v-card>
</template>

<script>
import { formatPrice } from '../utils'

export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object
    }
  },
  methods: {
    priceFormmater (price) {
      return formatPrice(price)
    }
  }
}
</script>
<style scoped>
.v-card__text, .v-card__title {
  word-break: normal;
}
</style>