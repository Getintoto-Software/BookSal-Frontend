<template>
    <div class="main-div" v-if="futsal">
        <div class="futsal-container">
            <div class="images-section">
                <img :src="futsal.futsal_image_1" alt="Futsal field" class="hero-image" />
            </div>
            <div class="details-section">
                <div class="heading-section">
                    <h2>{{ futsal.futsal_name }}</h2>
                    <p><i class="bi bi-geo-alt"></i> {{ futsal.location }}</p>
                    <h3>NRs. {{ futsal.price_per_hour }}/hour</h3>
                </div>
                <div class="line">

                </div>
                <div class="description">
                    <p style="font-size: medium; font-style:Montserrat;" v-html="futsal.futsal_description">

                    </p>
                </div>
                <div class="line">

                </div>
                <div class="content">
                    <div>
                        <p><i class="bi bi-telephone"></i> {{ futsal.futsal_phone_number }} </p>
                    </div>
                    <div>
                        <a :href="futsal.google_maps_link" style="text-decoration: none; color: #364958;">
                            <p><i class="bi bi-geo-alt"></i> Google Maps</p>
                        </a>
                    </div>
                </div>
                <div class="book-button-for-futsal">
                    <RouterLink v-if="endpoint === 'available'" :to="id + 'booking'"
                        style="text-decoration: none; color: #ffffff;">
                        <button class="btn-primary">Book this Futsal Now</button>
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            endpoint: null,
            futsal: null
        }
    },
    props: {
        id: String
    },
    mounted() {
        this.getFutsalData()
    },
    methods: {
        async getFutsalData() {
            const endpoint = await import.meta.env.VITE_API_BASE + "futsal/retrieve-futsal/" + this.id
            this.endpoint = this.$route.name
            console.log(this.endpoint)
            const response = await axios.get(endpoint)
            this.futsal = response.data
        }
    }
}
</script>

<style scoped>
.main-div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}

.btn-primary {
    display: flex;
    justify-content: center;
    margin-inline: auto;
    background: #ADE25D;
    color: #364958;
    font-size: 22px;
    border: 0px;
    width: 310px;
    height: 40px;
    cursor: pointer;
    align-items: center;
    border-radius: 10px;
    font-weight: 700;
    font-family: Montserrat;
}

.futsal-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 1197px;
    height: 351px;
    margin-top: -54px;
    gap: 20px;
    /* padding-left: 420px; */
    /* background: #c4c4c4; */
}

.content {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 90%;
    /* padding: 10px; */
}

.images-section {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    width: 500px;
    height: 200px;
}


.hero-image {
    width: 527px;
    border-radius: 10px;
    height: 338px;
}


.details-section {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: stretch;
    align-content: center;
    /* background: #00000068; */
}

.heading-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: baseline;

}

h2 {
    font-size: 49px;
    color: #368033;
    margin-top: -20px;
    font-style: Montserrat;
}

h3 {
    font-size: 24px;
    color: #364958;
    font-style: Montserrat;
}

.heading-section p {
    font-size: 20px;
    margin-top: -28px;
    color: #364958;
    font-weight: bolder;
    font-style: Montserrat;
}

p {
    font-size: medium;
    font-style: Montserrat;
}

.bi {
    color: #364958;
    font-weight: bolder;
}

.line {
    width: 100%;
    height: 1px;
    background-color: #364958;
}

/* .images-section{
        width: 100%;
    }

    .hero-image{
        width: 100%;
    }

    

    

    .description{
        padding: 20px;
    }

    

    .content{
        padding: 20px;
    }

    .book-button-for-futsal{
        padding: 20px;
    }

    .btn-primary{
        background-color: #368033;
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
    } */
</style>