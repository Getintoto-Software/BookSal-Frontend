<template>
  <div class="player-matchmaking">
    <div class="matchmaking-panel">
      <h2>Find Players</h2>

      <!-- Search input -->
      <div class="search-container">
        <input v-model="searchQuery" type="text" placeholder="Search for players" class="search-input" />
      </div>

      <!-- Distance slider -->
      <div class="distance-slider">
        <label>Max Distance: {{ maxDistance }} km</label>
        <input v-model="maxDistance" type="range" min="0" max="10" step="0.1" />
      </div>

      <!-- Player list -->
      <div class="player-list">
        <div v-for="player in filteredPlayers" :key="player.user_id" class="player-card">
          <div class="player-info">
            <h3>{{ player.name }}</h3>
            <p class="distance">{{ player.distance }} km away</p>
          </div>
          <button @click="connectWithPlayer(player.user_id)" class="connect-button">
            Connect
          </button>
        </div>
      </div>

      <button @click="registerAsAvailable" class="register-button">
        Register as Available
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import axios from 'axios'
import apiClient from '@/axios'

const players = ref([])  // Stores fetched players
const maxDistance = ref(5)
const searchQuery = ref('')
const userId = ref()  // Replace with actual user ID

// Fetch nearby players by calling the matchmaking API
const fetchPlayers = async () => {
  try {
    const response = await axios.post('http://127.0.0.1:8080/api/v1/find-match/', {
      user_id: userId.value,
      latitude: 27.7172,  // Replace with actual latitude
      longitude: 85.3240  // Replace with actual longitude
    })

    if (response.data.matched_with) {
      players.value = [{ user_id: response.data.matched_with, distance: response.data.distance_km }]
    } else {
      players.value = []
    }
  } catch (error) {
    console.error('Error fetching players:', error)
  }
}

async function getUser() {
  const endpoint = 'auth/user/'
  const token = localStorage.getItem('token')

  const request = await apiClient(endpoint, {
    headers: {
      Authorization: `Token ${token}`
    }
  }).then(response => {
    userId.value = response.data.pk
    console.log(userId.value)
  }).catch(error => console.log(error))

  fetchPlayers()
}

const filteredPlayers = computed(() => {
  return players.value
    .filter(player => player.distance <= maxDistance.value)
    .filter(player => player.user_id.toLowerCase().includes(searchQuery.value.toLowerCase()))
})

const connectWithPlayer = async (matchedUserId) => {
  try {
    await axios.post('http://127.0.0.1:8080/api/v1/join-match/', {
      user_id: userId.value,
      matched_user_id: matchedUserId
    })
    alert('Match confirmed!')
    fetchPlayers()  // Refresh player list
  } catch (error) {
    console.error('Error connecting with player:', error)
  }
}

const registerAsAvailable = async () => {
  try {
    await axios.post('http://127.0.0.1:8080/api/v1/leave-queue/', {
      user_id: userId.value
    })
    await fetchPlayers()  // Try to find a match immediately
    alert('You are now available for matchmaking!')
  } catch (error) {
    console.error('Error registering as available:', error)
  }
}

const leaveQueue = async () => {
  try {
    await axios.post('http://127.0.0.1:8080/api/v1/leave-queue/', { user_id: userId.value })
    alert('You have left the matchmaking queue.')
    players.value = []  // Clear the player list
  } catch (error) {
    console.error('Error leaving the queue:', error)
  }
}

onMounted(getUser)
</script>



<style scoped>
.player-matchmaking {
  display: flex;
  height: 100vh;
  background-color: #f9f9f9;
  color: white;
}

.matchmaking-panel {
  width: 33.33%;
  background-color: #368033;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  margin-top: 35px;
  border-radius: 15px;
  margin-inline: auto;
  margin-bottom: 5em;
}

h2 {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.search-container {
  position: relative;
  margin-bottom: 1rem;
}

.search-input {
  width: 100%;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  background-color: #ADE25D;
  color: #364958;
}

.distance-slider {
  margin-bottom: 1rem;
}

.distance-slider label {
  display: block;
  margin-bottom: 0.5rem;
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
}

.distance {
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  color: #ADE25D;
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
}

.connect-button:hover,
.register-button:hover {
  background-color: rgba(173, 226, 93, 0.8);
}

.register-button {
  margin-top: 1rem;
  width: 100%;
}
</style>
