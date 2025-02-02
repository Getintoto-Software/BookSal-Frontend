<template>
    <div v-if="futsal" class="description-div">
        <FutsalAvailability :id="futsal.id">

        </FutsalAvailability>

        <AvailabilityCalendar />

    </div>
</template>

<script>
import axios from 'axios';
import FutsalAvailability from '../components/FutsalAvailability.vue';
import AvailabilityCalendar from '@/components/AvailabilityCalendar.vue';
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
        AvailabilityCalendar,
    },
    mounted() {
        this.getFutsalDetails()
    },
    methods: {
        async getFutsalDetails() {
            const id = this.$route.params.id + "/"
            this.futsal.id = id
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