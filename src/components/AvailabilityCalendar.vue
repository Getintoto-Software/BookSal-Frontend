<template>
  <h1 class="text-center" style="font-weight: bold; color: #368033; margin-top: 40px;"> Book Now!</h1>
  <div class="booking-status">
    <div class="header">
      <VueDatePicker v-model="selectedDate" :enable-time-picker="false" :min-date="new Date()" :clearable="false"
        :auto-apply="true" :arrow-navigation="true" />
    </div>

    <div class="time-slots">
      <div v-for="slot in timeSlots" :key="slot.time"
        :class="['time-slot', slot.isAvailable ? 'available' : 'unavailable']" @click="handleSlotClick(slot)" :style="{
          cursor: slot.isAvailable ? 'pointer' : 'not-allowed',
        }">
        <div style="width: 100%; height: 100%;">
          {{ slot.time }}
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { ref } from "vue";
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import { useRoute, useRouter } from "vue-router";
import apiClient from "@/axios";

export default {
  components: { VueDatePicker },
  setup() {
    const selectedDate = ref(new Date().toISOString().split("T")[0]);

    const booking_data = ref([]);
    const filtered_booking = ref([]);
    const timeSlots = ref([
      { time: "6-7", isAvailable: true },
      { time: "7-8", isAvailable: true },
      { time: "8-9", isAvailable: true },
      { time: "9-10", isAvailable: true },
      { time: "10-11", isAvailable: true },
      { time: "11-12", isAvailable: true },
      { time: "12-13", isAvailable: true },
      { time: "13-14", isAvailable: true },
      { time: "14-15", isAvailable: true },
      { time: "15-16", isAvailable: true },
      { time: "16-17", isAvailable: true },
      { time: "17-18", isAvailable: true },
      { time: "18-19", isAvailable: true },
      { time: "19-20", isAvailable: true },
      { time: "20-21", isAvailable: true },
    ]);

    const route = useRoute();
    const router = useRouter();

    // Function to get the booking details
    async function getBookingDetails() {
      const endpoint = "booking/list-bookings/" + route.params.id;
      const request = await apiClient.get(endpoint);
      booking_data.value = request.data;

      // Filter the bookings for the selected date
      filtered_booking.value = booking_data.value.filter(
        booking => booking.booking_date === selectedDate.value
      );

      // console.log(filtered_booking.value);

      // Update timeSlots based on filtered bookings
      filtered_booking.value.forEach(booking => {
        const startHour = parseInt(booking.booking_start_time.split(":")[0]);
        const endHour = parseInt(booking.booking_end_time.split(":")[0]);

        // Update the timeSlots to mark them as unavailable based on the booking's start and end times
        timeSlots.value.forEach(slot => {
          const slotStart = parseInt(slot.time.split("-")[0]); // Get the start hour of the slot

          // If the slot's start time falls within the booking's start and end time, mark it as unavailable
          if (slotStart >= startHour && slotStart < endHour) {
            slot.isAvailable = false; // Mark as unavailable
          }
        });
      });
    }

    async function sendPostRequest(startTime, endTime, user, bookingStatus, futsal) {
      const endpoint = "booking/create-booking/"

      const payload = {
        "booking_date": selectedDate.value,
        "booking_start_time": startTime,
        "booking_end_time": endTime,
        "booking_status": bookingStatus,
        "futsal": futsal,
        "user": user
      }

      try {
        // Sending the POST request
        const response = await apiClient.post(endpoint, payload);

        // Handle the success case
        alert('Booking created successfully: ');
        // Optionally return the response to use elsewhere in your application
        router.push("/futsals")
      } catch (error) {
        console.error("Error creating booking:", error);

        let errorMessage = "An unknown error occurred.";
        if (error.response && error.response.data) {
          errorMessage = typeof error.response.data === "string"
            ? error.response.data
            : error.response.data.message || JSON.stringify(error.response.data, null, 2);
        } else {
          errorMessage = error.message;
        }

        alert("Error creating booking: " + errorMessage);
        return null; // Or you can throw the error if you want to handle it further up
      }
    }


    async function handleSlotClick(slot) {
      const slotTime = slot.time
      if (!slot.isAvailable) {
        alert(`${slotTime} is not available.`);
        return; // Exit the function if the slot is unavailable
      } else {
        const startTime = slotTime.split("-")[0] + ":00:00"; // "6:00:00"
        const endTime = slotTime.split("-")[1] + ":00:00"; // "7:00:00"
        const token = localStorage.getItem('token')
        const request = await apiClient('auth/user/', {
          headers: {
            Authorization: "Token " + token
          }
        })
        const user = request.data.pk
        console.log(user)
        const bookingStatus = false
        const futsal = route.params.id
        sendPostRequest(startTime, endTime, user, bookingStatus, futsal)
      }
    }

    // Call getBookingDetails initially to populate data
    getBookingDetails();

    return {
      selectedDate,
      timeSlots,
      handleSlotClick
    };
  }

};
</script>

<style scoped>
.booking-status {
  font-family: Arial, sans-serif;
  text-align: center;
  max-width: 800px;
  margin: 2rem auto;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #fff;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.nav-arrow {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}

.time-slots {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 10px;
}

.time-slot {
  padding: 0.5rem;
  border-radius: 4px;
  text-align: center;
  font-weight: bold;
  height: 66px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
}

.time-slot.available {
  background: #4caf50;
  color: white;
}

.time-slot.unavailable {
  background: #f44336;
  color: white;
}
</style>
