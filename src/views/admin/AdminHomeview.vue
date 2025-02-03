<template>
    <div class="bookings">
        <div class="heading">
            <h3>Upcoming Bookings</h3>
        </div>
        <div class="card-section">
            <div v-for="booking in bookings" :key="booking.id" class="card">
                <div class="name">
                    <p style="margin-right: auto;">{{ booking.user.username }}</p>
                    <p>{{ booking.date }}</p>
                    <button class="btn btn-success me-4" @click="updateBooking(booking.id)">Update</button>
                    <button class="btn btn-danger me-4" @click="confirmDelete(booking.id)">Delete</button>
                </div>
                <div class="ground-and-info">
                    <p style="margin-right: auto;">Date: {{ booking.booking_date }}</p>
                    <p style="margin-left: auto;"> Start: {{ booking.booking_start_time }}</p>
                    <p style="margin-left: auto;">End: {{ booking.booking_end_time }}</p>
                </div>
            </div>
        </div>

        <!-- Delete Confirmation Popup -->
        <div v-if="showDeletePopup" class="popup-overlay">
            <div class="popup">
                <h4>Are you sure you want to delete this booking?</h4>
                <div class="popup-buttons">
                    <button class="btn btn-danger" @click="deleteBooking">Yes, Delete</button>
                    <button class="btn btn-secondary" @click="showDeletePopup = false">Cancel</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import apiClient from "@/axios";
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

export default {
    setup() {
        const bookings = ref([]);
        const showDeletePopup = ref(false);
        const bookingToDelete = ref(null);
        const route = useRoute();
        const router = useRouter();

        async function getFutsalBookings() {
            try {
                const endpoint = `booking/list-bookings/${route.params.id}`;
                const response = await apiClient.get(endpoint);
                bookings.value = response.data;
            } catch (error) {
                console.error("Error fetching bookings:", error);
            }
        }

        // Show delete confirmation popup
        function confirmDelete(id) {
            bookingToDelete.value = id;
            showDeletePopup.value = true;
        }

        // Delete Booking
        async function deleteBooking() {
            if (!bookingToDelete.value) return;

            try {
                const endpoint = `booking/delete-booking/${bookingToDelete.value}/`;
                await apiClient.delete(endpoint);

                // Remove deleted booking from the list
                bookings.value = bookings.value.filter(booking => booking.id !== bookingToDelete.value);

                showDeletePopup.value = false;
                bookingToDelete.value = null;
            } catch (error) {
                console.error("Error deleting booking:", error);
            }
        }

        function updateBooking(booking_id) {
            const futsal_id = route.params.id
            const booking = booking_id
            const path = '/admin/' + futsal_id + "/booking/update/" + booking
            router.push(path)
        }

        onMounted(getFutsalBookings);

        return {
            bookings,
            showDeletePopup,
            bookingToDelete,
            confirmDelete,
            deleteBooking,
            updateBooking,
        };
    }
};
</script>


<style scoped>
.heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-inline: auto;
    font-size: 35px;
    font-weight: 600;
    color: #368033;
    font-family: Montserrat;
}

.bookings {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: stretch;
    align-content: flex-start;
    gap: 15px;
    margin-top: 20px;
}

p {
    font-size: 20px;
    color: #364958;
    font-weight: bolder;
    font-family: Montserrat;
}

.card-section {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    align-content: space-around;
    gap: 20px;
    margin-top: 20px;
}

.card {
    border: 1px solid #ddd;
    border-radius: 15px;
    padding: 15px;
    width: 650px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    background-color: #f9f9f9;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: stretch;
    align-content: stretch;
    border-color: #368033;
}

.card:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    background: #53c44fd2;
    border-color: #ffffff;
    border: 2px;
    cursor: pointer;
}

.name {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    align-content: center;
}

.ground-and-info {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    align-content: center;
}

.card p {
    margin: 5px 0;
}

/* Popup Styling */
.popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.popup {
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    text-align: center;
}

.popup-buttons {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 15px;
}
</style>