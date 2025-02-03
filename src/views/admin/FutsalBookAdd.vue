<template>
    <div class="main-div">
        <div class="heading">
            <h3>Add A Booking</h3>
        </div>
        <div class="form">
            <!-- <AdminbookingForm></AdminbookingForm> -->
            <div class="booking-form">
                <h2 class="mb-4">Futsal Booking Form</h2>
                <div class="form-section mt-4">
                    <div class="form-row phone">
                        <div class="d-flex">
                            <label>Confirm Booking:</label>
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
                                    Cancel
                                </button>
                            </div>
                            <div>
                                <button type="submit" class="btn btn-book" @click.prevent="updateBooking"
                                    style="font-size: large;">Add Booking</button>
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
import apiClient from "@/axios";
import { ref } from "vue";

export default {
    setup() {
        const router = useRouter()
        const route = useRoute()

        const futsal_id = route.params.id
        const user = ref()
        const booking_data = ref(
            {
                booking_date: '',
                booking_start_time: '',
                booking_end_time: '',
                booking_status: null,
                futsal: futsal_id,
                user: null,
            }
        )

        const token = localStorage.getItem('token')

        function cancelForm() {
            router.push('/admin/' + futsal_id)
        }

        async function getUser() {
            const response = await apiClient.get('auth/user/', {
                headers: {
                    Authorization: 'Token ' + token,
                }
            })
            booking_data.value.user = response.data.pk
        }

        async function updateBooking() {
            const create_endpoint = 'booking/create-booking/'
            await apiClient.post(create_endpoint,
                booking_data.value
            )
            router.push('/admin/' + futsal_id)
        }


        getUser()
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