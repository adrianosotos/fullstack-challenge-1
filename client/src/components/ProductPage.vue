<template>
  <div>
    <h1>{{ product.shortDescription }}</h1>
    <img :src="`http://localhost:5000/images/${product.image}`" />
    <p>{{ product.description }}</p>
    <p>{{ product.price }}</p>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
  name: 'ProductPage',
  data () {
    return {
      product: null
    }
  },
  methods: {
    async fetchProductApi () {
      const { data } = await Axios.get(`http://localhost:5000/product/${this.$route.params.id}`) || {}
      this.product = data
    }
  },
  created () {
    this.fetchProductApi()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  img {
    width: 300px;
  }
</style>
