<template>
  <div class="profile-page">
    <div class="main-container">
      <div class="profile-header">
        <div class="profile-avatar" v-if="user_profile.profile_picture === null">
          <i class="bi bi-person"></i>
        </div>
        <div class="profile-avatar" v-else>
          <img :src="user_profile?.profile_picture" class="profile-image" />

        </div>
        <div class="profile-info">
          <h2>
            {{ user_profile?.first_name }} {{ user_profile?.last_name }}
            <i v-if="user_profile.is_verified" class="bi bi-check-circle"> <small style="font-size: small;"> Verified
              </small></i>
            <i v-else class="bi bi-x-circle" style="color: red;"> <small
                style="font-size: small;">UnVerified</small></i>
          </h2>
          <p>{{ user?.email }}</p>
          <p>ID: {{ user?.username }}</p>
        </div>
      </div>

      <div class="grid-container">
        <div v-if="user_profile" class="account-info">
          <h3>User Details</h3>
          <p>Username: {{ user?.username }}</p>
          <p>Email : {{ user?.email }}</p>
          <p>Bio : {{ user_profile.bio }}</p>
          <p>Address: {{ user_profile.address }}, {{ user_profile.city }}, {{ user_profile.country }} </p>
        </div>

        <!-- <div v-if="user_profile.is_futsal_admin" class="statistics">
          <h3>Your Futsals</h3>
          <div>
            FUTSAL HERE
          </div>
        </div> -->
      </div>

      <div class="edit-profile">
        <button class="edit-profile-btn" @click="editProfile">
          <i class="bi bi-pencil"></i> Edit Profile
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import apiClient from '@/axios';

export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const user_token = localStorage.getItem('token');

    const user = ref(null);
    const user_profile = ref({
      "user": null,
      "first_name": null,
      "last_name": null,
      "email_address": null,
      "profile_picture": null,
      "bio": null,
      "address": null,
      "city": null,
      "country": null,
      "zip_code": null,
      "date_created": null,
      "date_updated": null,
      "is_verified": null,
      "is_futsal_admin": null
    });

    if (user_token) {
      async function getUserProfile() {
        console.log("user logged")
        const new_response = await apiClient.get('user/profile/retrieve-user-profile/' + user.value.pk);

        if (new_response.status === 404) {
          router.push('/edit-profile');
        } else {
          user_profile.value = new_response.data;
        }
      }

      async function getUserData() {
        const response = await apiClient.get('auth/user', {
          headers: {
            'Authorization': `Token ${user_token}`
          }
        });
        user.value = response.data;
        getUserProfile();
      }
      getUserData();
    } else {
      router.push('/signin');
    }

    const logout = () => {
      localStorage.removeItem('token');
      router.push('/signin');
    };

    const editProfile = () => {
      router.push('/edit-profile');
    };

    return {
      user,
      user_profile,
      logout,
      editProfile
    };
  }
};
</script>

<style scoped>
.profile-page {
  background-color: #f9f9f9;
  min-height: 90vh;
  font-style: Montserrat;
}

.header {
  background-color: #368033;
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header h1 {
  font-size: 1.5rem;
  font-weight: bold;
}

.logout-btn {
  background-color: #368033;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.main-container {
  max-width: 800px;
  margin: 2rem auto;
  padding: 1.5rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.profile-header {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
}

.profile-avatar {
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  background-color: #368033;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: white;
  font-weight: bold;
}

.profile-info {
  margin-left: 1.5rem;
}

.profile-info h2 {
  font-size: 1.5rem;
  font-weight: bold;
  color: #368033;
}

.profile-info p {
  color: #555;
}

.profile-image {
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
}

.grid-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

.account-info,
.statistics {
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.account-info {
  background-color: #368033;
  color: white;
}

.statistics {
  background-color: #368033;
  color: white;
}

.edit-profile {
  margin-top: 1.5rem;
  text-align: right;
}

.edit-profile-btn {
  background-color: #364958;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.edit-profile-btn i {
  margin-right: 0.5rem;
}
</style>