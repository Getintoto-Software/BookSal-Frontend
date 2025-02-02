<template>
    <div v-if="futsal" class="description-div">
            <FutsalAvailability :id="futsal.id">
    
            </FutsalAvailability>
        <div class="calendar">
            <AvailabilityCalendar />
        </div>
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
	flex-wrap: nowrap;
	justify-content: space-around;
	align-items: stretch;
	align-content: center;
    /* margin-top: px; */
    /* height: 400px; */
}
</style>