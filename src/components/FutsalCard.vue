<template>
  <div class="futsal-card">
    <img src="https://placehold.co/1920x1080" class="futsal-image">
    <div class="futsal-details">
      <h1 class="futsal-name">{{ name }}</h1>
      <div class="futsal-data">
        <h3>{{ location }}</h3>
        <h3>{{ contact }}</h3>
      </div>
      <div class="futsal-contact">
        <p>{{ price }}</p>
        <p> | </p>
        <p>{{ type }}</p>

        <button>Contact Now <i class="bi bi-arrow-right"></i> </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: String,
    name: String,
    location: String,
    price: String,
    type: String,
    contact: Number
  },
};
</script>

<style scoped>
.futsal-card {
  min-width: 40em;
  max-width: 60em;
  height: 215px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid #368033;
  border-radius: 20px;
  margin-block: 10px;
  box-shadow: 5px 0 5px rgba(3, 3, 3, 0.275);
  padding-inline: 2px;
}



.futsal-image {
  width: 23em;
  border-radius: 20px 0 0 20px;
}

.futsal-details {
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 23em;
  color: #364958;
  font-weight: bold;
  margin-inline: 10px;
  margin-block: 10px;
}

.futsal-details h1 {
  color: #368033;
}

.futsal-data {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.futsal-contact {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.futsal-contact button {
  background-color: #368033;
  color: white;
  height: 30px;
  border-radius: 10px;
}
</style>