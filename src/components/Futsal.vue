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

/* Header */
header {
  background-color: #44b648;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
}

header nav a {
  text-decoration: none;
  color: #fff;
  margin: 0 1rem;
  font-weight: bold;
}

header nav a:hover {
  text-decoration: underline;
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

/* Footer */
footer {
  background-color: #44b648;
  padding: 2rem;
  text-align: center;
  color: #fff;
}

footer a {
  text-decoration: none;
  color: #fff;
  margin: 0 1rem;
}

footer a:hover {
  text-decoration: underline;
}


</style>
  
  