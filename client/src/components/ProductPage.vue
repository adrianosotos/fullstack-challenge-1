<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card
          width="380px"
          elevation="24"
        >
          <v-img 
            :src="`http://localhost:5000/images/${product.image}`"
            width="100%"
          ></v-img>
        </v-card>
      </v-col>
      <v-col>
        <div
          color="deep-purple lighten-5"
        >
          <v-card-title>{{ product.shortDescription }}</v-card-title>
          <v-card-text class="body-1">{{ product.description }}</v-card-text>
          <v-card-title class="justify-end">{{ priceFormatter(product.price) }}</v-card-title>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Axios from 'axios'
import { formatPrice } from '../utils'

export default {
  name: 'ProductPage',
  data () {
    return {
      product: null
    }
  },
  methods: {
    async fetchProductApi () {
      try {
        const { data } = await Axios.get(`http://localhost:5000/product/${this.$route.params.id}`) || {}
        this.product = data
      } catch (error) {
        throw new Error('Failed to fetch product api')
      }
    },
    priceFormatter (price) {
      return formatPrice(price)
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
