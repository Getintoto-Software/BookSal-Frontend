<template>
    <div class="main-div">
        <div class="heading">
            <h3>Update Booking</h3>
        </div>
        <div class="form">
            <AdminbookingForm></AdminbookingForm>
        </div>
    </div>
</template>
<script>
import { useRoute, useRouter } from "vue-router";
import AdminbookingForm from "../../components/admin/AdminbookingForm.vue";
import apiClient from "@/axios";

export default {
    components: {
        AdminbookingForm
    },
    setup() {
        const router = useRouter()
        const route = useRoute()

        const futsal_id = route.params.id
        const booking_id = route.params.booking_id

        const token = localStorage.getItem('token')

        async function getBookingData(){
            const endpoint = "booking/update-booking/" + booking_id
            const response = await apiClient(endpoint, {
                headers : {
                    Authorization : 'Token ' + token
                }
            } )
        }


    }
}
</script>
<style scoped>
.main-div {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: stretch;
    align-content: stretch;
}

.heading {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
}

h3 {
    color: #ADE25D;
    font-size: 64px;
}

.form {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;
    align-content: center;
}
</style>