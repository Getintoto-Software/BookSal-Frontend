<template>
    <div class="container">
      <div class="right-container">
      </div>
      <div class="left-container">
      </div>
    </div>
  </template>
  
  <script>
  
    export default {
      
    }
  </script>
  
  <style scoped>
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
      border-top-right-radius: 20px;
      border-bottom-right-radius: 20px;
      text-align: center;

    }

    .right-container{
      background: #ffffff;
      /* border: solid 1px #000; */
      border-top-left-radius: 20px;
      border-bottom-left-radius: 20px;
      height: 600px;
      width: 610px;
      display: flex;
      justify-content: right;
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
      height: 60px;
      align-items: center;
      border-radius: 10px;
      font-weight: 700;
      font-family: Montserrat;

    }
  
  </style>
  