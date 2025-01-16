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

    <div class="futsal-list">
      <FutsalCard
        v-for="futsal in filteredFutsals"
        :key="futsal.name"
        :name="futsal.name"
        :location="futsal.location"
        :price="futsal.price"
        :type="futsal.type"
        :contact="futsal.contact"
      />
    </div>
    <section class="register-section">
      <h2>Own A Futsal? We Have You Covered</h2>
      <h3>Regiter Your Business Today. Benefit from Online Booking</h3>
      <div style="display: grid; place-items: center; height: 5vh;">
          <button>Register Your Futsal! -></button>
      </div>
    </section>
    <div class="futsal-list">
      <FutsalCard
        v-for="secondfutsals in filteredFutsalssecond"
        :key="secondfutsals.name"
        :name="secondfutsals.name"
        :location="secondfutsals.location"
        :price="secondfutsals.price"
        :type="secondfutsals.type"
        :contact="secondfutsals.contact"
      />
    </div>
  </div>
</template>

<script>
import FutsalCard from "./FutsalCard.vue";


export default {
  components: {
    FutsalCard,
  },
  
  data() {
    return {
      searchQuery: "",
      selectedLocation: "",
      locations: ["Kathmandu", "Bhaktapur", "Lalitpur"],
      futsals: [
        { name: "Prime Futsal", location: "Gyaneshwor, Kathmandu", price: "Nrs. 1200", type: "5-A-Side" ,contact: 9815116518},
        { name: "Dhanyentari Futsal", location: "Yellow Pul, Kathmandu", price: "Nrs. 1500", type: "5-A-Side",contact: 9815116518 },
      ],
      secondfutsals:[
        { name: "Imperial Futsal", location: "Kaushaltar, Bhaktapur", price: "Nrs. 1200", type: "5-A-Side" ,contact: 9815116518},
        { name: "Dhuku Sports Hub", location: "Dhuku, Kathmandu", price: "Nrs. 1200", type: "5-A-Side",contact: 9815116518 },
        { name: "Madhyapur Sports Hub", location: "Lokanthali, Bhaktapur", price: "Nrs. 2000", type: "5-A-Side",contact: 9815116518 },
        { name: "Royal Futsal", location: "Anamnagar, Kathmandu", price: "Nrs. 1500", type: "5-A-Side",contact: 9815116518 },
        { name: "Sankhamul Futsal", location: "Sankhamul, Kathmandu", price: "Nrs. 1500", type: "5-A-Side",contact: 9815116518 },
      ]
    };
  },
  computed: {
    filteredFutsals() {
      return this.futsals.filter((futsal) => {
        const matchesLocation = this.selectedLocation ? futsal.location.includes(this.selectedLocation) : true;
        const matchesQuery = this.searchQuery ? futsal.name.toLowerCase().includes(this.searchQuery.toLowerCase()) : true;
        return matchesLocation && matchesQuery;
      });
    },
    filteredFutsalssecond() {
      return this.secondfutsals.filter((secondfutsals) => {
        const matchesLocation = this.selectedLocation ? secondfutsals.location.includes(this.selectedLocation) : true;
        const matchesQuery = this.searchQuery ? secondfutsals.name.toLowerCase().includes(this.searchQuery.toLowerCase()) : true;
        return matchesLocation && matchesQuery;
      });
    },
  },
  methods: {
    searchFutsals() {
      // Filter logic is handled in computed property
      
    },
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
.search-button{
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
.register-section h2{
    font-size: 40px;
    color: #368033;
    text-align: center;
    margin-bottom: 5px;
  }
  .register-section h3{
    color: #368033;
    text-align: center;
    margin-top: 5px;
  }
  .register-section button{
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
}
.search-section {
    font-size: 25px;
    border: white;
    color: #368033;
    text-align: center;
    margin: 20px 0;
    margin-bottom: 5px;
  }
  
  .search-inputs input{
    background-color: white;
    width: 250px;
    border-radius: 8px;
    margin: 10px;
    padding: 10px;
    font-size: 20px;
  }
  .search-inputs select{
    border:white;
    width: 127px;
    background-color:#ade25d;
    color: #364958;
    border-radius: 8px;
    font-size: 18px;
    margin: 10px;
    padding:10px;
    font-size: 20px;
    font-weight: 700;
    font-family: Montserrat;
  }
</style>
