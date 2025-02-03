<template>
    <div class="main-div">
        <div class="heading">
            <h3>Update Booking</h3>
        </div>
        <div class="form">
            <!-- <AdminbookingForm></AdminbookingForm> -->
            <div class="booking-form" v-if="booking_data != null">
                <h2>Futsal Booking Form</h2>
                <div class="form-section">
                    <div class="form-row phone">
                        <div class="form-group">
                            <label for="phone">Booking By:</label>
                            <br>
                            <input type="tel" id="phone" v-model="user" placeholder="Phone Number" readonly required />
                        </div>

                        <div class="d-flex">
                            <label for="phone">Confirm Booking:</label>
                            <br>
                            <input type="checkbox" required v-model="booking_data.booking_status" />
                        </div>
                    </div>

                    <div class="form-row date-time">
                        <div class="form-group">
                            <label for="date">Date</label> <br>
                            <input type="date" id="date" required class="date" v-model="booking_data.booking_date" />
                        </div>
                        <div class="form-group">
                            <label for="time">Start Time</label> <br>
                            <input type="time" id="time" required class="time"
                                v-model="booking_data.booking_start_time" />
                        </div>
                        <div class="form-group">
                            <label for="time">End Time</label> <br>
                            <input type="time" id="end_time" required class="time"
                                v-model="booking_data.booking_end_time" />
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-group button">
                            <div>
                                <button type="button" class="btn btn-danger" @click="cancelForm"
                                    style="font-size: large;">
                                    Cancel Edit
                                </button>
                            </div>
                            <div>
                                <button type="submit" class="btn btn-book" @click.prevent="updateBooking"
                                    style="font-size: large;">Update</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { useRoute, useRouter } from "vue-router";
import AdminbookingForm from "../../components/admin/AdminbookingForm.vue";
import apiClient from "@/axios";
import { ref } from "vue";

export default {
    components: {
        AdminbookingForm
    },
    setup() {
        const router = useRouter()
        const route = useRoute()

        const futsal_id = route.params.id
        const booking_id = route.params.booking_id
        const user = ref()
        const booking_data = ref(
            {
                booking_date: '',
                booking_start_time: '',
                booking_end_time: '',
                booking_status: null,
                futsal: '',
                id: '',
                user: null,
            }
        )

        const token = localStorage.getItem('token')

        async function getBookingData() {
            const endpoint = "booking/retrieve-booking/" + booking_id + '/'
            const response = await apiClient.get(endpoint, {
                headers: {
                    Authorization: 'Token ' + token
                }
            })
            booking_data.value = response.data

            const user_endpoint = 'auth/user/' + booking_data.value.user
            const user_response = await apiClient.get(user_endpoint)
            user.value = user_response.data.username

        }

        function cancelForm() {
            router.push('/admin/' + futsal_id)
        }

        async function updateBooking() {
            const update_endpoint = 'booking/update-booking/' + booking_data.value.id + '/'
            await apiClient.put(update_endpoint,
                booking_data.value
            )
            router.push('/admin/' + futsal_id)
        }

        console.log(booking_data.value)

        getBookingData()
        return {
            cancelForm,
            booking_data,
            user,
            updateBooking
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

.booking-form {
    display: flex;
    flex-direction: column;
    box-shadow: 5px 0 5px rgba(3, 3, 3, 0.275);
    flex-wrap: nowrap;
    justify-content: center;
    align-items: stretch;
    align-content: center;
    background: #ffffff;
    border-radius: 15px;
    border-color: #368033;
    border-width: 2px;
    border-style: solid;
    width: 765px;
    height: 585px;
    margin-bottom: 90px;
}

.form-section {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: stretch;
    align-content: center;
    gap: 55px;
}

.button {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;
    align-content: flex-start;
    width: 100%;
    gap: 395px;
    margin-bottom: 25px;
    margin-left: -10px;
}

.btn {
    flex: 1;
    /* padding: 10px 15px; */
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-size: 35px;
    font-weight: 450;
    text-align: center;
    width: 168px;
    height: 65px;
}

.btn-book {
    background-color: #ADE25D;
    ;
    color: #364958;
    /* width: 50px; */
}

.btn-book:hover {
    background: #ade25dbb;
    color: #364958b7;
    cursor: pointer;
}

.btn-cancel {
    background-color: #e74c3c;
    color: white;
}

.btn-cancel:hover {
    background-color: #f37061;
    color: rgb(217, 217, 217);
}

.form-row {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: stretch;
    align-content: center;
    gap: 100px;
    /* margin-right: auto; */
    padding-left: 10px;
}

.date-time {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: flex-start;
    align-content: flex-start;
}

.phone {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: flex-start;
    align-content: flex-start;

}

h2 {
    margin-inline: auto;
    ;
    font-weight: 700;
    font-size: 40px;
    color: #3e923be9;
}

label {
    font-size: 20px;
    font-weight: 800;
    font: Montserrat;
    color: #3e923be9;
}

input {
    padding: 10px;
    border-radius: 5px;
    border-color: #368033;
    border-width: 1px;
    width: 300px;
    font: Montserrat;
    font-weight: 600;
    font-size: 20px;
    margin-inline: auto;

}

.date {
    width: 200px;
    color: #3e923be9;
}

.time {
    width: 114px;
    color: #3e923be9;
}

select {
    padding: 10px;
    border-radius: 5px;
    border-color: #368033;
    color: #3e923be9;
    background: #ffffff;
    border-width: 1px;
    width: 174px;
    font: Montserrat;
    font-weight: 600;
    font-size: 20px;
    margin-right: 10px;
}
</style>