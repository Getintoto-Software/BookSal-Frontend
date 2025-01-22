<template>
    <div v-if="futsal" class="description-div">
        <FutsalAvailability :id="futsal.id">

        </FutsalAvailability>


    </div>
</template>

<script>
import axios from 'axios';
import FutsalAvailability from '../components/FutsalAvailability.vue';
export default {
    data() {
        return {
            futsal: {
                id: String
            }
        }
    },
    components: {
        FutsalAvailability,
    },
    mounted() {
        this.getFutsalDetails()
    },
    methods: {
        async getFutsalDetails() {
            const endpoint = import.meta.env.VITE_API_BASE + "futsal/retrieve-futsal/" + this.$route.params.id + "/"
            console.log(endpoint)
            const response = await axios.get(endpoint)
            this.futsal.id = response.data
            console.log(this.futsal)
        }
    }
}
</script>

<style scoped>
.description-div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 28px;
    height: 433px;
}
</style>