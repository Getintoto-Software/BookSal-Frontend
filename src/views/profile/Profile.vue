<template>


    <div v-if="user">
        {{ user }}
    </div>

    <div v-if="user_profile">
        {{ user_profile }}
    </div>

</template>

<script>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import apiClient from '@/axios';

export default {
    setup() {
        const store = useStore();
        const router = useRouter();
        const user_token = localStorage.getItem('token')

        const user = ref(null)
        const user_profile = ref(null)


        if (user_token) {
            async function getUserData() {
                const response = await apiClient.get('auth/user', {
                    headers: {
                        'Authorization': `Token ${user_token}`
                    }
                })
                user.value = response.data

                const new_response = await apiClient.get('user/profile/retrieve-user-profile/' + user.value.pk)
                user_profile.value = new_response.data

            }
            getUserData()
        } else {
            router.push('/signin')
        }

        return {
            user,
            user_profile
        }

    }
}
</script>

<style></style>