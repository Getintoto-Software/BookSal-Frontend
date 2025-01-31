<template>
  <div class="container">
    <div class="left-container">
      <div class="left-top-topic">
        <h2 class="signup-content-slider">Want to Register your Futsal with us?</h2>
        <button class="login-section-button">
          <RouterLink to="/signup" style="text-decoration: none; color: #364958;"> Sign Up Now <i
              class="bi bi-arrow-right"></i> </RouterLink>
        </button>
      </div>
    </div>
    <form class="right-container">
      <div class="right-top-topic">BookSal Login <br>
        <div class="input-boxes-login">
          <input class="input-box" step="0.01" type="number" v-model="phoneNumber" placeholder="Phone Number"
            onkeydown="javascript: return ['Backspace','Delete','ArrowLeft','ArrowRight', 'Tab'].includes(event.code) ? true : !isNaN(Number(event.key)) && event.code!=='Space'">
          <input class="input-box" type="password" placeholder="Password" v-model="password">
        </div>
        <p>Forgot Password?</p>
        <button class="login-section-button" style="width: 120px; font-size: 25px; height: 42px;"
          @click.prevent="handleLogin">Login</button>
      </div>
    </form>

  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from '../axios'; // Adjust this path based on your axios setup
import { useStore } from 'vuex';

export default {
  name: "SignIn",
  setup() {
    const phoneNumber = ref();  // Store the phone number input
    const password = ref("admin");     // Store the password input
    const router = useRouter();   // Get the router instance for navigation
    const store = useStore();  // Get Vuex store instance

    // Function to validate phone number
    const validatePhoneNumber = (number) => {
      const phoneRegex = /^[0-9]{10}$/; // Example: 10-digit phone number
      console.log(number)
      console.log(password.value)
      return phoneRegex.test(number);
    };

    // Function to handle login
    const handleLogin = () => {
      if (!validatePhoneNumber(phoneNumber.value)) {
        alert("Please enter a valid phone number!");
        return;
      }
      if (!password.value) {
        alert("Password cannot be empty!");
        return;
      }

      // Prepare the payload for the login request
      const payload = {
        "username": String(phoneNumber.value),  // The phone number used as the username
        "email": "", // Email is optional, so we set it to an empty string
        "password": password.value, // The password entered by the user
      };

      console.log(payload)

      // Send login request to the backend
      axios
        .post('/auth/login/', payload)
        .then((response) => {
          if (response.status === 200) {

            console.log(response.data.key) // working
            // Login successful
            const token = response.data.key; // Assuming the token is returned in the response, working

            // Commit token and user information to Vuex store
            store.commit("SET_TOKEN", token);
            store.commit("SET_AUTH", true);

            // Navigate to the dashboard or home page
            // router.push("/");

            console.log(store.state.token)
            console.log(store.state.isAuthenticated)
          }
        })
        .catch((error) => {
          // Handle error - login failed
          console.error("Login failed:", error.response ? error.response.data : error.message);
          alert("Invalid phone number or password.");
        });
    };

    return {
      phoneNumber,
      password,
      handleLogin,
    };
  },

};

</script>

<style scoped>
p {
  font-size: 15px;
  display: flex;
  padding-left: 216px;
  /* padding-bottom: 10px; */
  height: auto;
}

.input-box {
  width: 350px;
  height: 35px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  align-items: center;
  align-content: center;

}

::v-deep(input[type="number"]::-webkit-inner-spin-button),
::v-deep(input[type="number"]::-webkit-outer-spin-button) {
  -webkit-appearance: none;
  margin: 0;
}

::v-deep(input[type="number"]) {
  -moz-appearance: textfield;
  appearance: textfield;
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

.left-container {
  background: #368033;
  height: 600px;
  width: 610px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  text-align: center;

}

.right-container {
  background: #ffffff;
  /* border: solid 1px #000; */
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  height: 600px;
  width: 610px;
  display: flex;
}

::placeholder {
  opacity: 0.5;
  font-size: 20px;
  margin-left: 20px;
}

.right-top-topic {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 514px;
  width: 610px;
  font-size: 50px;
  color: #364958;
  font-weight: 700;
  margin-inline: auto;
  font-family: Montserrat;
  margin-bottom: 10px
}

.input-boxes-login {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin-inline: auto;
  height: 170px;
}

.input-box {
  display: flex;
  flex-direction: column;
  border-color: #368033;
  height: 40px;
  border-radius: 6px;
  border-width: 1px;
  font-size: 20px;

}

.signup-content-slider {
  color: #FFFFFF;
  font-size: 52px;
  margin-left: 20px;
  margin-top: 135px;
}

.login-section-button:hover {
  background: #ade25dbb;
  color: #364958b7;
  cursor: pointer;
}

.login-section-button {
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

input[type="password"] {
  font-size: 30px;
  /* Adjust size to make dots larger */
}
</style>