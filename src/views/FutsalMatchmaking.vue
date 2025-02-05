<template>
  <div class="player-matchmaking">
    <div class="matchmaking-panel">
      <h2>Find an Opponent</h2>
      <form @submit.prevent="findOpponent">
        <div class="search-container" style="display: none;">
          <label>Latitude:</label>
          <input type="text" v-model="latitude" required readonly class="search-input" />
        </div>
        <div class="search-container" style="display: none;">
          <label>Longitude:</label>
          <input type="text" v-model="longitude" required readonly class="search-input" />
        </div>
        <div class="distance-slider">
          <label>Search Radius: {{ radius }} km</label>
          <input type="range" v-model="radius" min="1" max="10" required />
        </div>
        <button type="submit" class="register-button">Find Match</button>
      </form>

      <p v-if="searching" class="status-message">Searching for an opponent...</p>
      <p v-if="opponent" class="status-message">Match Found! Room ID: {{ opponent.room_id }}</p>

      <h3>Active Rooms</h3>
      <div class="player-list">
        <div v-for="room in rooms" :key="room.id" class="player-card">
          <div class="player-info">
            <h3>Room {{ room.id }}</h3>
            <p>{{ room.player1_username }} vs {{ room.player2_username || 'Waiting...' }}</p>
          </div>
          <button @click="joinRoom(room.id)" class="connect-button">Join Matchmaking</button>
        </div>
      </div>
    </div>
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
            action: "find_match",
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
          this.fetchRooms(); // Refresh room list
          this.socket.close();
        } else if (data.type === "match_created") {
          alert(data.message);
          this.fetchRooms(); // Refresh the room list
          this.socket.close();
        }
      };
    },

    joinRoom(roomId) {
      if (!this.socket || this.socket.readyState !== WebSocket.OPEN) {
        this.socket = new WebSocket("ws://127.0.0.1:8080/ws/matchmaking/");
      }

      this.socket.onopen = () => {
        this.socket.send(
          JSON.stringify({
            action: "join_match",   // Updated action name to match backend
            player_id: this.user_id,
            room_id: roomId,
            latitude: this.latitude, // Add latitude and longitude for matchmaking
            longitude: this.longitude,
          })
        );
      };

      this.socket.onmessage = (event) => {
        const data = JSON.parse(event.data);
        if (data.type === "match_joined") {
          alert(`You have joined Room ${data.room_id}!`);
          this.fetchRooms(); // Refresh room list
          this.socket.close();
        } else if (data.type === "error") {
          alert(data.message);
        }
      };
    },
  },

};
</script>
<style scoped>
.player-matchmaking {
  display: flex;
  min-height: 100vh;
  background-color: #f9f9f9;
  color: white;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem;
}

.matchmaking-panel {
  width: 100%;
  max-width: 500px;
  background-color: #368033;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h2,
h3 {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #ADE25D;
}

.search-container {
  position: relative;
  margin-bottom: 1rem;
}

.search-container label {
  display: block;
  margin-bottom: 0.5rem;
  color: #ADE25D;
}

.search-input {
  width: 100%;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  background-color: #ADE25D;
  color: #364958;
  border: none;
}

.distance-slider {
  margin-bottom: 1rem;
}

.distance-slider label {
  display: block;
  margin-bottom: 0.5rem;
  color: #ADE25D;
}

.distance-slider input {
  width: 100%;
}

.player-list {
  flex-grow: 1;
  background-color: #364958;
  border-radius: 0.5rem;
  padding: 1rem;
  overflow-y: auto;
  border: 1px solid #364958;
  margin-top: 1rem;
}

.player-card {
  background-color: #368033;
  border-radius: 0.5rem;
  padding: 1rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.player-info h3 {
  font-weight: 600;
  margin-bottom: 0.25rem;
  color: #ADE25D;
}

.player-info p {
  color: #ffffff;
}

.connect-button,
.register-button {
  background-color: #ADE25D;
  color: #364958;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
  font-weight: bold;
}

.connect-button:hover,
.register-button:hover {
  background-color: rgba(173, 226, 93, 0.8);
}

.register-button {
  margin-top: 1rem;
  width: 100%;
}

.status-message {
  margin-top: 1rem;
  text-align: center;
  color: #ADE25D;
  font-weight: bold;
}
</style>