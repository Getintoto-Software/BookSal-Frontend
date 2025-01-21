<template>
    <div class="description-div">
        <FutsalAvailability>

        </FutsalAvailability>
    </div>
</template>

<script>

    import FutsalAvailability from '../components/FutsalAvailability.vue';
    export default {
        components: {
            FutsalAvailability,
        }
    }
</script>

<style scoped>
    .description-div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 28px;
        height: 433px;
    }

</style>