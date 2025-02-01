<template>
    <div class="futsal-matchmaking">
      <!-- Left panel - Map -->
      <!-- <div class="map-container"> -->
        <!-- Placeholder for the map -->
        <!-- <div class="map-placeholder">
          Map Component Placeholder
        </div> -->
      <!-- </div> -->
  
      <!-- Right panel - Matchmaking UI -->
      <div class="matchmaking-panel">
        <h2>Find Futsal Matches</h2>
        
        <!-- Search input -->
        <div class="search-container">
          <Search class="search-icon" />
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search for matches"
            class="search-input"
          />
        </div>
  
        <!-- Distance slider -->
        <div class="distance-slider">
          <label>Max Distance: {{ maxDistance }} km</label>
          <input
            v-model="maxDistance"
            type="range"
            min="0"
            max="10"
            step="0.1"
          />
        </div>
  
        <!-- Match list -->
        <div class="match-list">
          <div
            v-for="match in filteredMatches"
            :key="match.id"
            class="match-card"
          >
            <div class="match-info">
              <h3>{{ match.name }}</h3>
              <p class="distance">
                <MapPin :size="14" /> {{ match.distance }} km away
              </p>
              <p class="players">
                <Users :size="14" /> {{ match.players }} players needed
              </p>
            </div>
            <button @click="joinMatch(match.id)" class="join-button">
              Join
            </button>
          </div>
        </div>
  
        <!-- Bottom action button -->
        <button @click="createNewMatch" class="create-match-button">
          Create New Match
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
//   import { MapPin, Users, Search } from 'lucide-vue-next'
  
  // Mock data for potential matches
  const potentialMatches = [
    { id: 1, name: "Prime Futsal", distance: 0.5, players: 3 },
    { id: 2, name: "Dhanyentari Futsal", distance: 1.2, players: 2 },
    { id: 3, name: "Madhyapur Futsal", distance: 2.3, players: 1 },
    { id: 4, name: "Dhuku Futsal", distance: 3.1, players: 4 },
    { id: 5, name: "", distance: 3.8, players: 2 },
  ]
  
  const maxDistance = ref(5)
  const searchQuery = ref('')
  
  const filteredMatches = computed(() => {
    return potentialMatches
      .filter(match => match.distance <= maxDistance.value)
      .filter(match => match.name.toLowerCase().includes(searchQuery.value.toLowerCase()))
  })
  
  const joinMatch = (matchId) => {
    console.log(`Joining match with ID: ${matchId}`)
    // Implement join match logic here
  }
  
  const createNewMatch = () => {
    console.log('Creating a new match')
    // Implement create new match logic here
  }
  </script>
  
  <style scoped>
  .futsal-matchmaking {
    display: flex;
    height: 100vh;
    background-color: #f9f9f9;
    color: white;
    
  }
  
  .map-container {
    width: 66.66%;
    position: relative;
  }
  
  .map-placeholder {
    position: absolute;
    inset: 0;
    background-color: #d1d5db;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #364958;
  }
  
  .matchmaking-panel {
    width: 33.33%;
    background-color: #368033;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    margin-top: 35px;
    border-radius: 15px;
    /* margin-left: 38em;
     */
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
  
  .search-icon {
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    color: #364958;
  }
  
  .search-input {
    width: 100%;
    padding: 0.5rem 1rem 0.5rem 2.5rem;
    border-radius: 9999px;
    background-color: #ADE25D;
    color: #364958;
  }
  
  .search-input::placeholder {
    color: rgba(54, 73, 88, 0.7);
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
  
  .match-list {
    flex-grow: 1;
    background-color: #364958;
    border-radius: 0.5rem;
    padding: 1rem;
    overflow-y: auto;
    /* border-color: #f9f9f9;
    border-width: 1px; */
    border: 1px solid #364958;

  }
  
  .match-card {
    background-color: #368033;
    border-radius: 0.5rem;
    padding: 1rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

  }
  
  .match-info h3 {
    font-weight: 600;
    margin-bottom: 0.25rem;
  }
  
  .distance, .players {
    font-size: 0.875rem;
    display: flex;
    align-items: center;
  }
  
  .distance {
    color: #ADE25D;
  }
  
  .distance svg, .players svg {
    margin-right: 0.25rem;
  }
  
  .join-button, .create-match-button {
    background-color: #ADE25D;
    color: #364958;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .join-button:hover, .create-match-button:hover {
    background-color: rgba(173, 226, 93, 0.8);
  }
  
  .create-match-button {
    margin-top: 1rem;
    width: 100%;
  }
  </style>