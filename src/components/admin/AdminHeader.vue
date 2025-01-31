<template>
    <nav class="header-section d-flex justify-content-between align-items-center">
        <div class="header-container">
            <div class="d-flex align-items-center">
                <i class="bi bi-list icon me-3" @click="toggleMenu"></i> <!-- Menu Icon -->  
            </div>
            <div class="logo">
                <div class="brand">
                    <span>BookSa</span>
                    <i class="bi bi-book-half"></i> <!-- Book Icon -->
                </div>
                <span class="fw-bold">Admin Panel</span>
            </div>
            <div>
                <i class="bi bi-person-circle icon"></i> <!-- User Icon -->
            </div>
        </div>
    </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
    .header-section {
        background-color: #b3e64d;
         /* Greenish background */
        color: #2c3e50;
        padding: 10px 20px;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    }
    .header-container {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
        align-content: space-between;
    }

    .header {
    background-color: #a3dd61; /* Light green background */
    color: #1f3d32; /* Dark green text */
    padding: 10px 20px;
    }
    .brand {
    font-size: 30px;
    font-weight: bold;
    display: flex;
    align-items: center;
    }
    .brand span {
    margin-left: 5px;
    }
    .icon {
    font-size: 30px;
    cursor: pointer;
    }
    .logo{
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
        align-content: space-between;
    }
</style>