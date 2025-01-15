<template>
    <div class="futsal-list-page">
      <!-- Header Section -->
      <section class="search-section">
        <h1>Search For A Futsal</h1>
        <div class="search-bar">
          <select>
            <option>Location</option>
            <option value="Kathmandu">Kathmandu</option>
            <option value="Bhaktapur">Bhaktapur</option>
            <option value="Lalitpur">Lalitpur</option>
          </select>
          <input type="text" placeholder="Futsal Name" />
          <button>Search</button>
        </div>
      </section>
  
      <!-- Available Futsals Section -->
      <section class="available-futsals">
        <h2>Available Futsals</h2>
        <div class="futsal-card" v-for="futsal in futsal" :key="futsal.id">
          <div class="futsal-info">
            <div class="image-placeholder">Image Here</div>
            <div class="details">
              <h3>{{ futsal.name }}</h3>
              <p>{{ futsal.location }}</p>
              <p>NRs. {{ futsal.price }}/hour</p>
              <p>{{ futsal.type }}</p>
            </div>
          </div>
          <button>Contact Now</button>
        </div>
      </section>
  
      <!-- Footer Section -->
    </div>
</template>

<script>
export default {
  data() {
    return {
      search: {
        location: '',
        name: '',
      },
      futsals: [
        {
          id: 1,
          name: 'Prime Futsal',
          location: 'Gwarko, Kathmandu',
          price: 1200,
          type: '5-A-Side',
          contact: 'XXXXXXXX',
          image: 'https://via.placeholder.com/100',
        },
        {
          id: 2,
          name: 'Dhanyentari Futsal',
          location: 'Yellow Pati, Kathmandu',
          price: 1500,
          type: '5-A-Side',
          contact: 'XXXXXXXX',
          image: 'https://via.placeholder.com/100',
        },
        {
          id: 3,
          name: 'Imperial Futsal',
          location: 'Kausaltar, Bhaktapur',
          price: 1000,
          type: '5-A-Side',
          contact: 'XXXXXXXX',
          image: 'https://via.placeholder.com/100',
        },
        // Add more futsal entries here
      ],
      filteredFutsals: [],
    };
  },
  methods: {
    filterFutsals() {
      const { location, name } = this.search;
      this.filteredFutsals = this.futsals.filter((futsal) =>
        (location === '' || futsal.location.toLowerCase().includes(location.toLowerCase())) &&
        (name === '' || futsal.name.toLowerCase().includes(name.toLowerCase()))
      );
    },
    contactFutsal(contactNumber) {
      alert(`Contacting: ${contactNumber}`);
    },
  },
  mounted() {
    // Initialize filteredFutsals with all futsals initially
    this.filteredFutsals = this.futsals;
  },
};

</script>

<style>
/* General Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
  color: #333;
  margin: 0;
  padding: 0;
}

/* Search Section */
.search-section {
  background-color: #fff;
  padding: 2rem;
  margin: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.search-section h2 {
  margin-bottom: 1rem;
  color: #44b648;
}

.search-section input,
.search-section select {
  padding: 0.5rem;
  width: calc(50% - 1rem);
  margin-right: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.search-section button {
  padding: 0.5rem 1rem;
  background-color: #44b648;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.search-section button:hover {
  background-color: #36993a;
}

/* Futsal List */
.futsal-list {
  margin: 2rem 1rem;
}

.futsal-card {
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
}

.futsal-card img {
  width: 100px;
  height: 100px;
  background-color: #ddd;
  border-radius: 8px;
  margin-right: 1rem;
}

.futsal-card .details {
  flex: 1;
}

.futsal-card .details h3 {
  color: #44b648;
}

.futsal-card .details p {
  margin: 0.5rem 0;
}

.futsal-card .contact {
  text-align: right;
}

.futsal-card .contact button {
  padding: 0.5rem 1rem;
  background-color: #44b648;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.futsal-card .contact button:hover {
  background-color: #36993a;
}

</style>
  
  