<template>
  <router-link :to="`/product/${product.id}`">
    <img :src="`http://localhost:5000/images/${product.image}`" />
    <p>{{ product.shortDescription }}</p>
    <p>{{ product.price }}</p>
  </router-link>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  img {
    width: 200px;
  }
</style>
