<template>
    <form class="main">
        <div class="detail-box mt-4">
            <div class="heading">
                <h2>Contact Admins</h2>
            </div>
            <div class="topic">
                <label for="topic">Topic</label>
                <input type="text" id="topic" v-model="contact.title" />
            </div>
            <div class="message">
                <label for="message">Message</label>
                <textarea cols="30" rows="10" v-model="contact.message"> </textarea>
            </div>
            <div class="buttons">
                <div class="send">
                    <button @click.prevent="getUser" class="send">Send</button>
                </div>
                <div class="cancel">
                    <button class="cancel">Cancel</button>
                </div>
            </div>
        </div>
    </form>

</template>
<script>
import apiClient from '@/axios';
// import FutsalAvailability from '@/components/FutsalAvailability.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
export default {
    setup() {
        const router = useRouter()
        const user = ref("")
        const contact = ref({
            title: "",
            message: ""
        })

        async function sendPostRequest() {
            const endpoint = 'contact/create-contact/'
            const payload = {
                title: contact.value.title,
                message: contact.value.message,
                user: user.value.id
            }
            await apiClient.post(endpoint, payload).then((response) => {
                console.log(response)
            }
            ).catch((error) => {
                console.log(error)
            })

            alert("Message Sent Successfully")
            router.push("/profile")

        }

        async function getUser() {
            const key = localStorage.getItem('token')
            console.log(key)
            apiClient.get("auth/user/", {
                headers: {
                    Authorization: `Token ${key}`
                }
            }).then(response => {
                user.value = response.data
            }).then(() => {
                sendPostRequest()
            }).catch(error => {
                console.log(error)
            })
        }



        return {
            getUser,
            contact
        }
    }
}
</script>
<style scoped>
.main {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;
    align-content: space-evenly;
}

.buttons {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;
    align-content: center;
    gap: 85px;
}

button {
    height: 65px;
    font-style: Montserrat;
    font-size: 25px;
    font-weight: 500;
    border: none;
    border-radius: 10px;
}

button:hover {
    cursor: pointer;
}

.send {
    width: 100px;
    background: #ADE25D;
    color: #364958;
    border-radius: 15px
}

.send:hover {
    background: #ade25db7;
    color: #364958b7;
    cursor: pointer;
}

.cancel {
    width: 135px;
    background-color: #ff5454;
    color: #ffffff;
    border-radius: 15px;
}

.cancel:hover {
    background: #ff5454b7;
    color: #ffffffb7;
}

.topic {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: flex-start;
    align-content: flex-start;
}

.topic label {
    font-size: 25px;
    color: #368033;
    text-align: left;
    font-style: Montserrat;
}

.topic input {
    width: 300px;
    height: 40px;
    border-radius: 5px;
    border-color: #368033;
    border-width: 2px;
    border-style: solid;
    font-size: 20px;
    font-style: Montserrat;
}

.message {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: flex-start;
    align-content: flex-start;
}

.message label {
    font-size: 25px;
    color: #368033;
    text-align: left;
    font-style: Montserrat;

}

.message textarea {
    width: 300px;
    height: 200px;
    border-radius: 5px;
    border-color: #368033;
    border-width: 2px;
    border-style: solid;
    font-size: 20px;
    font-style: Montserrat;
}

.detail-box {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    align-items: center;
    align-content: space-around;
    background: #ffffff;
    border-radius: 15px;
    /* border-color: #368033; */
    box-shadow: 5px 0 5px rgba(3, 3, 3, 0.275);
    border-width: 2px;
    border-style: solid;
    width: 465px;
    height: 595px;
    margin-bottom: 90px;
}

h2 {
    font-size: 45px;
    color: #368033;
    font-style: Montserrat;
}
</style>