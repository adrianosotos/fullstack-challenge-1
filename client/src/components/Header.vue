<template>
  <v-app-bar
      app
      color="deep-purple"
      dark
  >
      <div class="d-flex align-center">
        <router-link to="/">
          <v-img
              alt="Company Logo"
              class="shrink mr-2"
              contain
              src="../assets/pngegg.png"
              transition="scale-transition"
              width="50"
          />
        </router-link>
      </div>
  </v-app-bar>
</template>

<script>

export default {
  name: 'Header'
};
</script>
