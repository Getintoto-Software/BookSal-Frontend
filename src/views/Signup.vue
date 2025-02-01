<template>
  <div class="container">
    <div class="right-container">
      <form class="right-top-topic">Register to Booksal<br>
        <div class="input-boxes-login">
          <input class="input-box" step="0.01" type="number" placeholder="Phone Number" id="phoneNumber"
            v-model="phoneNumber"
            onkeydown="javascript: return ['Backspace','Delete','ArrowLeft','ArrowRight'].includes(event.code) ? true : !isNaN(Number(event.key)) && event.code!=='Space'"
            required>
          <input class="input-box" type="password" placeholder="Password" id="password" v-model="password" hidden="true"
            required>
          <input class="input-box" type="password" placeholder="confirm Password" id="confirmPassword"
            v-model="confirmPassword" required>
        </div>
        <button @click.prevent="validateForm()" type="submit" class="login-section-button"
          style="width: 132px; font-size: 25px; height: 46px;">Register</button>
      </form>

    </div>
    <div class="left-container">
      <div class="left-top-topic">
        <h2 class="signup-content-slider">Already Registered?</h2>
        <button class="login-section-button">
          <RouterLink to="/signin" style="text-decoration: none; color: #364958;"> Login Here <i
              class="bi bi-arrow-right"></i> </RouterLink>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "Signup",
  data() {
    return {
      phoneNumber: "",
      password: "",
      confirmPassword: ""
    }
  },
  methods: {
    async validateForm() {
      if (this.phoneNumber && this.password && this.confirmPassword) {
        if (this.password === this.confirmPassword) {
          const endpoint = import.meta.env.VITE_API_BASE + "auth/registration/";

          try {
            // Step 1: Register User
            const registerResponse = await axios.post(endpoint, {
              username: this.phoneNumber,
              password1: this.password,
              password2: this.password
            }, {
              headers: {
                "Content-Type": "application/json",
              },
              withCredentials: true
            });

            if (registerResponse.status === 201) {
              alert("Registration Successful!");

              // Step 2: Store Token
              const token = registerResponse.data.key; // Ensure key exists
              if (!token) {
                alert("Error: Token missing from response.");
                return;
              }
              localStorage.setItem("authToken", token);

              // Step 3: Get User PK
              const userResponse = await axios.get(import.meta.env.VITE_API_BASE + "auth/user/", {
                headers: { Authorization: `Token ${token}` }
              });

              const userPk = userResponse.data.pk;
              if (!userPk) {
                alert("Error: Could not fetch user ID.");
                return;
              }

              // Step 4: Create User Profile
              await axios.post(import.meta.env.VITE_API_BASE + "user/profile/create-user-profile/", {
                user: userPk
              }, {
                headers: { Authorization: `Token ${token}` }
              });

              alert("Profile created successfully!");
              this.$router.push("/");
            } else {
              alert(`Registration failed: Unexpected response code ${registerResponse.status}`);
            }
          } catch (error) {
            console.error("Error:", error);
            alert("An error occurred. Please try again.");
          }
        } else {
          alert("Passwords do not match.");
        }
      } else {
        alert("Please fill in all fields.");
      }
    }
  }
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
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  text-align: center;

}

.right-container {
  background: #ffffff;
  /* border: solid 1px #000; */
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
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
  height: 560px;
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
  height: 250px;
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

.login-section-button:hover {
  background: #ade25dbb;
  color: #364958b7;
  cursor: pointer;
}

.signup-content-slider {
  color: #FFFFFF;
  font-size: 52px;
  margin-left: 20px;
  margin-top: 185px;
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