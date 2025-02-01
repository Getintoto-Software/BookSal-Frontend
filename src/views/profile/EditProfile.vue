<template>

    <form class="container mt-4 mb-4 font-weight-bold">
        <h1 class="text-center font-weight-bold">
            Edit Profile
        </h1>
        <div class="mb-3">
            <label for="first_name" class="form-label">First Name</label>
            <input type="text" class="form-control" id="first_name" v-model="userProfile.first_name">
        </div>
        <div class="mb-3">
            <label for="last_name" class="form-label">Last Name</label>
            <input type="text" class="form-control" id="last_name" v-model="userProfile.last_name">
        </div>
        <div class="mb-3">
            <label for="email_address" class="form-label">Email Address</label>
            <input type="text" class="form-control" id="email_address" v-model="userProfile.email_address">
        </div>
        <div class="mb-3">
            <label for="bio" class="form-label">Bio</label>
            <textarea class="form-control" id="bio" v-model="userProfile.bio"> </textarea>
        </div>
        <div class="mb-3">
            <label for="address" class="form-label">Town/Address</label>
            <input type="text" class="form-control" id="address" v-model="userProfile.address">
        </div>
        <div class="mb-3">
            <label for="city" class="form-label">City</label>
            <input type="text" class="form-control" id="city" v-model="userProfile.city">
        </div>
        <div class="mb-3">
            <label for="country" class="form-label">Country</label>
            <input type="text" class="form-control" id="country" v-model="userProfile.country">
        </div>
        <div class="mb-3">
            <label for="zip_code" class="form-label">Zip Code</label>
            <input type="text" class="form-control" id="zip_code" v-model="userProfile.zip_code">
        </div>
        <button @click.prevent="setUserProfile" class="btn btn-success">Submit</button>
    </form>

</template>

<script>
import apiClient from '@/axios';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export default {
    setup() {

        const router = useRouter()
        const user = ref({

        }
        )
        const userProfile = ref({
            user: null,
            first_name: "",
            last_name: "",
            email_address: "",
            profile_picture: null,
            bio: "",
            address: "",
            city: "",
            country: "",
            zip_code: "",
        })
        const key = localStorage.getItem('token')

        async function getUser() {
            const response = await apiClient.get('auth/user/', {
                headers: {
                    'Authorization': `Token ${key}`
                }
            }).then((response) => {
                user.value = response.data
            })
            console.log(userProfile.value)
        }

        async function setUserProfile(data) {
            const endpoint = 'user/profile/update-user-profile/' + user.value.pk + '/'
            const header = {
                'Authorization': `Token ${key}`
            }
            const payload = userProfile.value
            payload.user = user.value.pk

            const request = await apiClient.put(endpoint, payload, {
                headers: header
            })

            router.push('/profile');
        }


        getUser()
        return {
            user,
            userProfile,
            setUserProfile
        }
    }
}
</script>

<style></style>