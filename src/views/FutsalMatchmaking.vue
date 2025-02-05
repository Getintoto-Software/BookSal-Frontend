<template>
  <div>
    <h2>Find an Opponent</h2>
    <form @submit.prevent="findOpponent">
      <label>Latitude:</label>
      <input type="text" v-model="latitude" required readonly />

      <label>Longitude:</label>
      <input type="text" v-model="longitude" required readonly />

      <label>Search Radius (km):</label>
      <input type="number" v-model="radius" min="1" max="10" required />

      <button type="submit">Find Match</button>
    </form>

    <p v-if="searching">Searching for an opponent...</p>
    <p v-if="opponent">Match Found! Opponent ID: {{ opponent }}</p>
  </div>
</template>

<script>
import apiClient from '@/axios';

export default {
  data() {
    return {
      latitude: "",
      longitude: "",
      radius: 5,
      searching: false,
      opponent: null,
      socket: null,
      user_id: null,
    };
  },
  mounted() {
    this.getCurrentLocation();
  },
  methods: {
    async getCurrentLocation() {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            this.latitude = position.coords.latitude.toFixed(6);
            this.longitude = position.coords.longitude.toFixed(6);
          },
          (error) => {
            console.error("Error getting location:", error);
            alert("Please enable location services for better matchmaking.");
          }
        );
      } else {
        alert("Geolocation is not supported by your browser.");
      }
      const user = await apiClient.get('auth/user/', {
        headers: {
          Authorization: "Token " + localStorage.getItem('token')
        }
      }).then(response => {
        this.user_id = response.data.pk
      })
    },
    findOpponent() {
      this.searching = true;
      this.socket = new WebSocket("ws://127.0.0.1:8080/ws/matchmaking/");

      this.socket.onopen = () => {
        this.socket.send(
          JSON.stringify({
            player_id: this.user_id, // Replace with actual user ID
            latitude: this.latitude,
            longitude: this.longitude,
            radius: this.radius,
          })
        );
      };

      this.socket.onmessage = (event) => {
        const data = JSON.parse(event.data);
        if (data.type === "match_found") {
          this.opponent = data.player2;
          this.searching = false;
          this.socket.close();
        }
      };
    },
  },
};
</script>
