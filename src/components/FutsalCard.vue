<template>
    <div class="futsal-card">
      <div class="futsal-image">Image Here</div>
      <div class="futsal-details">
        <h3>{{ name }}</h3>
        <p>{{location}}</p>
        <p>{{ price }} | {{ type }}</p>
      </div>
      <div class="futsal-contact">
        <p>{{contact}}</p>
        <button style="width: 133px;">Contact Now -></button>
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
    display: flex;
    background: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 16px;
    gap: 12px;
    margin: 16px 0;
  }
  .futsal-list {
    font-size: 25px;
    text-align: center;
    color: #368033;
    padding: 20px;
  }
  .futsal-list h2{
    margin-top: 2px;
  }
  
  .futsal-image{
    background-color: #364958;
    padding:50px;
    border-radius: 8px;
    color:#368033;
    }

  .futsal-contact {
    font-size: 20px;
    color:black;
  }
  .futsal-details h3 {
    text-align: left;
    font-size: 40px;
    color:#368033;
    margin-bottom: 5px;
  }

  .futsal-details p{
    margin-top: 5px;
    text-align: left;
    color:#333;
    font-size: 20px;
  }
  .futsal-card {
    text-align: center;
    border: 1px solid #333;
    width: 600px;
    border-radius: 20px;
    margin-bottom: 15px;
    padding: 5px;
    display:flex;
    align-items: center;
    justify-content: center;
  }
  .futsal-card button{
    border-radius: 8px;
    border:white;
    background-color: #368033;
    color:aliceblue;
    padding: 10px;
    width: fit-content;
    place-content: bottom;
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
    color: black;
    border: white;
    font-size: 20px;
    font:bold;
    background-color: #ade25d;
    margin-top: 10px;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    padding: 15px;
  }
  .futsal-card {
    text-align: center;
    border: 1px solid #333;
    width: 600px;
    border-radius: 20px;
    margin-bottom: 15px;
    padding: 5px;
    display:flex;
    align-items: center;
    justify-content: center;
  }
  .futsal-card button{
    border-radius: 8px;
    border:white;
    background-color: #368033;
    color:aliceblue;
    padding: 10px;
    place-content: bottom;
  }
  
  .image-placeholder {
    width: 80px;
    height: 80px;
    background: #e0e0e0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    margin-right: 16px;
  }
  
  .details {
    flex: 1;
  }
  
  .details h3 {
    margin: 0;
    font-size: 18px;
    color: #333;
  }
  
  .details p {
    margin: 4px 0;
    color: #666;
  }
  
  .actions {
    display: flex;
    align-items: center;
  }
  
  .contact-btn {
    background: #4caf50;
    color: #fff;
    border: none;
    padding: 8px 12px;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .contact-btn:hover {
    background: #45a049;
  }
  </style>
  