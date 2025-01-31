<template>
  <div>
    <section class="search-section">
      <h2>Search For A Futsal</h2>
      <div class="search-inputs">
        <select name="location" id="location" onchange="somefunction(this.value)">
          <option value="" disabled selected>Location</option>
          <option value="Kathmandu">Kathmandu</option>
          <option value="Bhaktapur">Bhaktapur</option>
          <option value="Lalitpur">Lalitpur</option>
        </select>
        <input type="text" placeholder="Futsal Name">
        <button class="search-button">Search</button>
      </div>
    </section>

    <section class="register-section">
      <h2>Own A Futsal? We Have You Covered</h2>
      <h3>Regiter Your Business Today. Benefit from Online Booking</h3>
      <div style="display: grid; place-items: center; height: 5vh;">
        <button>
          <RouterLink to="/signup" style="text-decoration: none; color: #364958;">Register Your Futsal! <i
              class="bi bi-arrow-right" style="margin-inline-start: 10px;"></i> </RouterLink>

        </button>
      </div>
    </section>

    <div class="futsal-list">
      <FutsalCard v-for="futsal in futsals" :key="futsal.id" :name="futsal.futsal_name" :location="futsal.location"
        :id="futsal.id" :price="futsal.price_per_hour" :type="futsal.a_side" :contact="futsal.futsal_phone_number"
        :image="futsal.futsal_image_1" />
    </div>



    <!-- <div class="futsal-list">
      <FutsalCard v-for="secondfutsals in filteredFutsalssecond" :key="secondfutsals.name" :name="secondfutsals.name"
        :location="secondfutsals.location" :price="secondfutsals.price" :type="secondfutsals.type"
        :contact="secondfutsals.contact" />
    </div> -->
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
import FutsalCard from "../components/FutsalCard.vue";
import axios from "axios";

export default {
  components: {
    FutsalCard,
  },

  data() {
    return {
      searchQuery: "",
      selectedLocation: "",
      locations: ["Kathmandu", "Bhaktapur", "Lalitpur"],
      futsals: []
    };
  },

  mounted() {
    this.getFutsals();
  },
  methods: {
    searchFutsals() {
      // Filter logic is handled in computed property

    },

    async getFutsals() {
      const endpoint = import.meta.env.VITE_API_BASE + "futsal/list-futsals/"
      const response = await axios.get(endpoint)
      this.futsals = response.data
    }
  },
};
</script>

<style scoped>
.search-bar {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
}

.search-bar select,
.search-bar input {
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  flex: 1;
}

.search-button {
  /* display: flex; */
  justify-content: center;
  margin-inline: auto;
  background: #ADE25D;
  color: #364958;
  font-size: 18px;
  border: 0px;
  width: 93px;
  height: 47px;
  align-items: center;
  border-radius: 10px;
  font-weight: 700;
  font-family: Montserrat;
}

.search-button:hover {
  background: #ade25dbb;
  color: #364958b7;
  cursor: pointer;
}

.register-section h2 {
  font-size: 40px;
  color: #368033;
  text-align: center;
  margin-bottom: 5px;
}

.register-section h3 {
  color: #368033;
  text-align: center;
  margin-top: 5px;
}

.register-section button {
  display: flex;
  justify-content: center;
  margin-inline: auto;
  background: #ADE25D;
  color: #364958;
  font-size: 25px;
  border: 0px;
  width: 350px;
  height: 62px;
  align-items: center;
  border-radius: 10px;
  font-weight: 700;
  font-family: Montserrat;
}

.register-section button:hover {
  background: #ade25dbb;
  color: #364958b7;
  cursor: pointer;
}


.search-bar button {
  background: #4caf50;
  color: #fff;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
}

.search-bar button:hover {
  background: #45a049;
}

.futsal-list {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: space-around;
  margin-top: 45px;
}

.search-section {
  font-size: 25px;
  border: white;
  color: #368033;
  text-align: center;
  margin: 20px 0;
  margin-bottom: 5px;
}

.search-inputs input {
  background-color: white;
  width: 250px;
  border-radius: 8px;
  margin: 10px;
  padding: 10px;
  font-size: 20px;
}

.search-inputs select {
  border: white;
  width: 127px;
  background-color: #ade25d;
  color: #364958;
  border-radius: 8px;
  font-size: 18px;
  margin: 10px;
  padding: 10px;
  font-size: 20px;
  font-weight: 700;
  font-family: Montserrat;
}
</style>
