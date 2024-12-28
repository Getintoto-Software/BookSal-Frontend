<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Signin from "./components/Signin.vue"
</script>

<template>
  <div>
    <Header>
    </Header>
    <div class="main-div">
      <RouterView />
    </div>
    <Signin/>
    <Footer></Footer>
  </div>
</template>

<style scoped>
.main-div {
  min-height: 80vh;
}
</style>
