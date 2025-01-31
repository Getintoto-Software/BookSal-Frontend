<template>

</template>

<script>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';


export default {
    setup() {
        const store = useStore();
        const router = useRouter();
        console.log(localStorage.getItem('token'))
        console.log(store.state.user)
        console.log(store.state.isAuthenticated)
        console.log(store.state.token)


    }
}
</script>

<style></style>