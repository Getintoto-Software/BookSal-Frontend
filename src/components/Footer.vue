<template>
    <div class="footer-container">
        <div class="footer-left">
            <div class="left-top">
                <h1>BookSal</h1>
                <h2>Book a Futsal</h2>
            </div>

            <div class="left-bottom">
                <i class="bi bi-envelope"></i> |
                <i class="bi bi-instagram"></i> |
                <i class="bi bi-facebook"></i> |
                <i class="bi bi-linkedin"></i> |
                <i class="bi bi-twitter"></i>
            </div>
        </div>
        <div class="footer-right">
            <table class="right-table">
                <tbody>
                    <tr>
                        <td>
                            <RouterLink to="/">Home</RouterLink>
                        </td>
                        <td>
                            <RouterLink to="/">Privacy</RouterLink>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <RouterLink to="/">Futsals</RouterLink>
                        </td>
                        <td>
                            <RouterLink to="/">Terms of Service</RouterLink>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <RouterLink to="/">Login</RouterLink>
                        </td>
                        <td>
                            <RouterLink to="/">Blogs</RouterLink>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.footer-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 40px;
    background-color: #364958;
    /* Dark blue background */
    color: #ADE25D;
    /* Light green color for text and icons */
    font-family: Arial, sans-serif;
}

.footer-left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.footer-container a {
    text-decoration: none;
    color: #ADE25D;
}

.left-top h1 {
    font-size: 2rem;
    font-weight: bold;
    color: #ADE25D;
    /* Matching green for logo text */
}

.left-top h2 {
    font-size: 1.2rem;
    margin-top: 5px;
    color: #ADE25D;
}

.left-bottom {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 10px;
    font-size: 1.2rem;
}

.left-bottom i {
    color: #ADE25D;
    cursor: pointer;
    transition: color 0.3s ease;
}

.left-bottom i:hover {
    color: #FFFFFF;
    /* White on hover */
}

.footer-right {
    display: flex;
}

.right-table {
    border-collapse: collapse;
    /* Removes table border spacing */
    color: #A1E074;
}

.right-table td {
    text-align: center;
    padding: 10px 20px;
    border: none;
}

.right-table tr td {
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: color 0.3s ease;
}

.right-table tr td:hover {
    color: #FFFFFF;
    /* White text on hover */
}
</style>