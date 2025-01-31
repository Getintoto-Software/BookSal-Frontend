<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router'
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import AdminHeader from './components/admin/AdminHeader.vue';


const route = useRoute();


</script>

<template>
  <div style="background-color: #f9f9f9;">
    <Header v-if="!route.path.includes('admin')">
    </Header>
    <AdminHeader v-else></AdminHeader>
    <div class="main-div">
      <RouterView />
    </div>
    <Footer></Footer>
  </div>
</template>

<style scoped>
.main-div {
  min-height: 80vh;
  background-color: #f9f9f9;
}
</style>
