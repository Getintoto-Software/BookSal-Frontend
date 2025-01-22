<template>
    <div class="main-div">
        <div class="heading">
            <h3>Add a Booking To Your Futsal</h3>
        </div>
        <div class="form">
            <AdminbookingFrom/>
        </div>

    </div>
</template>
<script>
    import AdminbookingForm from "../../components/admin/AdminbookingForm.vue";

    export default {
        components: {
            AdminbookingForm
        }
    }
</script>
<style scoped>
    .main-div {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
        align-items: stretch;
        align-content: stretch;
    }
    .heading {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
    }
    h3{
        color: #ADE25D;
        font-size: 30px;
    }
</style>