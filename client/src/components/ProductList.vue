<template>
  <div>
    <ProductCard 
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script>
import Axios from 'axios'
import ProductCard from './ProductCard.vue'
export default {
  name: 'ProductList',
  components: {
    ProductCard
  },
  data () {
    return {
      products: []
    }
  },
  methods: {
    async fetchProductsApi () {
      try {
        const { data } = await Axios.get('http://localhost:5000/products') || {}
        this.products = data
      } catch (error) {
        throw new Error('Failed to fetch products API')
      }
    }
  },
  created () {
    this.fetchProductsApi()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
