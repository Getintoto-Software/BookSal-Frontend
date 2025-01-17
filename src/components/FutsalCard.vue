<template>
  <div class="futsal-card">
    <div class="futsal-image-container"> <img src="https://placehold.co/1920x1080" class="futsal-image">
    </div>
    <div class="futsal-details">
      <h1 class="futsal-name">{{ name }}</h1>
      <div class="futsal-data">
        <p>{{ location }}</p>
        <p>{{ contact }}</p>
      </div>
      <div class="futsal-contact">
        <p>{{ price }} | {{ type }}</p>
        <button>Contact Now <i class="bi bi-arrow-right"></i> </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
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
  max-width: 50em;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid #368033;
  border-radius: 20px;
  margin-block: 10px;
  padding: 0;
}

.futsal-image-container {
  max-width: 20em;
}

.futsal-image {
  max-width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
}

.futsal-details {
  display: flex;
  flex-direction: column;
  text-align: left;
  max-width: 30em;
  color: #364958;
  font-weight: bold;
}

.futsal-details h3 {
  color: #368033;
}
</style>