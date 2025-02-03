<template>
    
</template>

<script>
import { useRoute, useRouter } from 'vue-router';

export default {
    setup() {
        const router = useRouter()
        const route = useRoute()
        const futsal_id = route.params.id
        const booking_id = router.params.booking_id

        console.log(futsal_id, booking_id)
    }
}
</script>

<style scoped>

</style>