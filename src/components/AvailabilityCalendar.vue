<template>
    <div class="booking-status">
      <div class="header">
        <button @click="prevDate" class="nav-arrow">&laquo;</button>
        <span>Booking Status For {{ selectedDate }}</span>
        <button @click="nextDate" class="nav-arrow">&raquo;</button>
        <button class="date-picker-btn" @click="openDatePicker">
          <i class="bi bi-calendar3"></i>
        </button>
      </div>
  
      <div class="ground-tabs">
        <button
          v-for="ground in grounds"
          :key="ground"
          :class="{ active: selectedGround === ground }"
          @click="selectGround(ground)"
        >
          {{ ground }}
        </button>
      </div>
  
      <div class="time-slots">
        <div
          v-for="slot in timeSlots"
          :key="slot.time"
          :class="['time-slot', slot.isAvailable ? 'available' : 'unavailable']"
        >
          {{ slot.time }}
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  
  export default {
    setup() {
      const selectedDate = ref(new Date().toISOString().split("T")[0]);
      const selectedGround = ref("Ground 1");
      const grounds = ["Ground 1", "Ground 2"];
      const timeSlots = ref([
        { time: "6-7", isAvailable: true },
        { time: "7-8", isAvailable: false },
        { time: "8-9", isAvailable: true },
        { time: "9-10", isAvailable: false },
        { time: "10-11", isAvailable: true },
        { time: "11-12", isAvailable: true },
        { time: "12-13", isAvailable: false },
        { time: "13-14", isAvailable: true },
        { time: "14-15", isAvailable: false },
        { time: "15-16", isAvailable: false },
        { time: "16-17", isAvailable: false },
        { time: "17-18", isAvailable: false },
        { time: "18-19", isAvailable: false },
        { time: "19-20", isAvailable: false },
        { time: "20-21", isAvailable: true },
      ]);
  
      function prevDate() {
        const date = new Date(selectedDate.value);
        date.setDate(date.getDate() - 1);
        selectedDate.value = date.toISOString().split("T")[0];
      }
  
      function nextDate() {
        const date = new Date(selectedDate.value);
        date.setDate(date.getDate() + 1);
        selectedDate.value = date.toISOString().split("T")[0];
      }
  
      function openDatePicker() {
        // This function would integrate a date picker library if needed
        const datePicker = document.querySelector('input[type="date"]');
        if (datePicker) {
            datePicker.click();
        }
      }
  
      function selectGround(ground) {
        selectedGround.value = ground;
      }
  
      return {
        selectedDate,
        selectedGround,
        grounds,
        timeSlots,
        prevDate,
        nextDate,
        openDatePicker,
        selectGround,
      };
    },
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
  
  .date-picker-btn {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.5rem;
  }
  
  .ground-tabs {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
  }
  
  .ground-tabs button {
    margin: 0 0.5rem;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    background: #f0f0f0;
  }
  
  .ground-tabs .active {
    background: #4caf50;
    color: white;
  }
  
  .time-slots {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 56px;
  }
  
  .time-slot {
    padding: 0.5rem;
    border-radius: 4px;
    text-align: center;
    font-weight: bold;
    height: 66px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    font-size: 29px;
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
  