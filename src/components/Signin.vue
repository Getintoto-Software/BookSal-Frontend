<template>
    <div class="container">
      <div class="form-container" :class="{ 'sign-up-mode': isSignUp }">
        <!-- Login Form -->
        <div class="form sign-in-form">
          <h2>Sign In</h2>
          <form @submit.prevent="onSignIn">
            <input type="email" placeholder="Email" v-model="email" required />
            <input type="password" placeholder="Password" v-model="password" required />
            <button type="submit">Sign In</button>
          </form>
          <p>
            Don't have an account?
            <button @click="toggleForm">Sign Up</button>
          </p>
        </div>
  
        <!-- Signup Form -->
        <div class="form sign-up-form">
          <h2>Sign Up</h2>
          <form @submit.prevent="onSignUp">
            <input type="text" placeholder="Name" v-model="name" required />
            <input type="email" placeholder="Email" v-model="email" required />
            <input type="password" placeholder="Password" v-model="password" required />
            <button type="submit">Sign Up</button>
          </form>
          <p>
            Already have an account?
            <button @click="toggleForm">Sign In</button>
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  
  export default {
    data() {
      return {
        isSignUp: false,
        name: "",
        email: "",
        password: "",
      };
    },
    methods: {
      toggleForm() {
        this.isSignUp = !this.isSignUp;
      },
      onSignIn() {
        alert("Signed in with " + this.email);
      },
      onSignUp() {
        alert("Signed up with " + this.email);
      },
    },
  };
  </script>
  
  <style scoped>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f2f2f2;
  }
  
  .form-container {
    position: relative;
    width: 400px;
    overflow: hidden;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    transition: transform 0.5s ease-in-out;
  }
  
  .form {
    padding: 20px;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transform: translateX(100%);
    opacity: 0;
    transition: transform 0.5s, opacity 0.5s;
  }
  
  .sign-in-form {
    transform: translateX(0);
    opacity: 1;
  }
  
  .sign-up-mode .sign-in-form {
    transform: translateX(-100%);
    opacity: 0;
  }
  
  .sign-up-mode .sign-up-form {
    transform: translateX(0);
    opacity: 1;
  }
  
  button {
    background: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 5px;
    transition: background 0.3s;
  }
  
  button:hover {
    background: #0056b3;
  }
  </style>
  