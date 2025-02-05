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
    <p v-if="opponent">Match Found! Room ID: {{ opponent.room_id }}</p>

    <h3>Active Rooms</h3>
    <ul>
      <li v-for="room in rooms" :key="room.id">
        Room {{ room.id }} - {{ room.player1_username }} vs {{ room.player2_username || 'Waiting...' }}
        <button @click="joinRoom(room.id)" class="join-button">Join Matchmaking</button>
      </li>
    </ul>
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
      rooms: [],
      socket: null,
      user_id: null,
    };
  },
  async mounted() {
    this.getCurrentLocation();
    this.fetchRooms();
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
            alert("Please enable location services.");
          }
        );
      } else {
        alert("Geolocation is not supported.");
      }
      const user = await apiClient.get('auth/user/', {
        headers: { Authorization: "Token " + localStorage.getItem('token') }
      }).then(response => {
        this.user_id = response.data.pk;
      });
    },
    async fetchRooms() {
      try {
        const response = await apiClient.get("matchmaking/");
        this.rooms = response.data;
      } catch (error) {
        console.error("Error fetching rooms:", error);
      }
    },
    findOpponent() {
      this.searching = true;
      this.socket = new WebSocket("ws://127.0.0.1:8080/ws/matchmaking/");

      this.socket.onopen = () => {
        this.socket.send(
          JSON.stringify({
            player_id: this.user_id,
            latitude: this.latitude,
            longitude: this.longitude,
            radius: this.radius,
          })
        );
      };

      this.socket.onmessage = (event) => {
        const data = JSON.parse(event.data);
        if (data.type === "match_found") {
          this.opponent = data;
          this.searching = false;
          this.fetchRooms(); // Refresh the room list
          this.socket.close();
        }
      };
    },
  },
  joinRoom(roomId) {
    if (!this.socket || this.socket.readyState !== WebSocket.OPEN) {
      this.socket = new WebSocket("ws://127.0.0.1:8080/ws/matchmaking/");
    }

    this.socket.onopen = () => {
      this.socket.send(
        JSON.stringify({
          action: "join_room",
          player_id: this.user_id,
          room_id: roomId,
        })
      );
    };

    this.socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type === "match_found") {
        alert(`You have joined Room ${data.room_id}!`);
        this.fetchRooms(); // Refresh room list
        this.socket.close();
      } else if (data.error) {
        alert(data.error);
      }
    };
  },
};
</script>
