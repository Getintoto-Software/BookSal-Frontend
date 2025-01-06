<template>
    <div class="container">
      <div class="left-container">
        <div class="left-top-topic">
          <h2 class="signup-content-slider">Want to Register your Futsal with us?</h2>
          <button class="signup-slide-button">
            <RouterLink to="/signup" style="text-decoration: none; color: #364958;"> Sign Up Now -></RouterLink>
          </button>
        </div>
      </div>
      <div class="right-container"> 
        <div class="right-top-topic">BookSal Login <br>
          <div class="input-boxes-login">
            <input class="input-box" type="number">
            <input class="input-box" type="text" placeholder="Password">
          </div>
        </div>
      </div>

    </div>
  </template>
  
  <script>
  
    export default {
      
    }
  </script>
  
  <style scoped>
    .input-box{
      width: 350px;
      height: 35px;
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      justify-content: space-evenly;
      align-items: center;
      align-content: center;
      
    }

    .container {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 50px;
      background: #c4c4c4;
      height: 600px;
      width: 1220px;
      border-radius: 20px;
      margin-inline: auto;
      box-shadow: 10px 0 10px rgba(3, 3, 3, 0.569);

    }

    .left-container{
      background: #368033;
      height: 600px;
      width: 610px;
      border-top-left-radius: 20px;
      border-bottom-left-radius: 20px;
      text-align: center;

    }

    .right-container{
      background: #ffffff;
      /* border: solid 1px #000; */
      border-top-right-radius: 20px;
      border-bottom-right-radius: 20px;
      height: 600px;
      width: 610px;
      display: flex;
    }
    .right-top-topic{
      display: flex;
      flex-wrap: nowrap;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
	    align-content: center;
      width: 100%;
      height: 50px;
      font-size: 60px;
      color: #364958;
      font-weight: 600;
    }
    .input-boxes-login{
      display: flex;
      flex-wrap: nowrap;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
	    align-content: center;
      
    }
    .signup-content-slider{
      color: #FFFFFF;
      font-size: 52px;
      margin-left: 20px;
      margin-top: 135px;
    }
    .signup-slide-button{
      display: flex;
      justify-content: center;
      margin-inline: auto;
      background: #ADE25D;
      color: #364958;
      font-size: 35px;
      border: 0px;
      width: 350px;
      /* height: 10px; */
      align-items: center;
      border-radius: 10px;
      font-weight: 700;
      font-family: Montserrat;

    }

    
  
  </style>
  