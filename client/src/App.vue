<template>
  <v-app id="app">
    <Header />
    <v-main class="deep-purple lighten-5 main mt-10 pb-10">
      <router-view></router-view>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>
