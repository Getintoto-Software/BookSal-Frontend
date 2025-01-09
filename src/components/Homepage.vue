<template>
    <div class="homepage-main-container" style="background: #f4f4f4;;">
        <section class="hero">
            <div class="hero-content">
                <h1>#1 Futsal Booking Platform In Nepal</h1>
                <p>Futsals at your fingertips.</p>
                <div class="buttons">
                <button class="btn book-btn">Book Futsal Now ➡️</button>
                <button class="btn register-btn">Register a Futsal ➡️</button>
                </div>
            </div>
            <img src="https://via.placeholder.com/300" alt="Futsal field" class="hero-image" />
        </section>

        <div class="stats">
            <div class="stat-item">
                <h2>100+</h2>
                <p>Futsals</p>
            </div>
            <div class="stat-item">
                <h2>1000+</h2>
                <p>Daily Users</p>
            </div>
            <div class="stat-item">
                <h2>10000+</h2>
                <p>Bookings</p>
            </div>
        </div>

        <section class="register-section">
            <h2>Own A Futsal? We have you covered</h2>
            <p>Register your Business Today. Benefit from online Booking.</p>
            <button class="btn register-btn">Register your Futsal!! ➡️</button>
        </section>

        <section class="booking-section">
            <h2>Book a Game without any Hassle</h2>
            <p>Select Futsal, Select Date and Time, Provide Details and play without any issue.</p>
            <button class="btn book-btn">Book a Game Now!!! ➡️</button>
        </section>

        <section class="blogs">
            <h2>Learn about the Beautiful Game,</h2>
            <h3>Check out our latest Blogs</h3>
        </section>
    </div>

</template>

<script>
    export default{

    }
</script>

<style>
    .hero {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 40px;
        position: relative;
        background-color: #f4f4f4;
    }

    .hero-content {
        text-align: left;
    }

    .hero-content h1 {
        font-size: 36px;
        color: #333333;
    }

    .hero-content p {
        font-size: 18px;
        color: #666666;
    }

    .hero-image {
        max-width: 300px;
        border-radius: 10px;
    }

    .buttons {
        margin-top: 20px;
    }

    .btn {
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        margin: 5px;
        cursor: pointer;
    }

    .book-btn {
        background-color: #7cbf4d;
        color: #ffffff;
    }

    .register-btn {
        background-color: #ffffff;
        color: #7cbf4d;
        border: 2px solid #7cbf4d;
    }

    /* Stats Section */
    .stats {
        display: flex;
        position:relative;
        top: 50px;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: flex-start;
        align-content: space-around;
        background-color: #eeeeee;
        /* padding: 20px 355px 26px 355px; */
        box-shadow: 5px 0 5px rgba(3, 3, 3, 0.275);

        border-radius: 15px;
        margin-inline: auto;
        width: 930px;
    }

    .stat-item h2 {
        font-size: 24px;
        color: #7cbf4d;
    }

    .stat-item p {
        font-size: 16px;
        color: #666666;
    }

    /* Register Section */
    .register-section,
    .booking-section {
        background-color: #f9f9f9;
        padding: 40px 20px;
    }

    .register-section h2,
    .booking-section h2 {
        font-size: 28px;
        color: #333333;
    }

    .register-section p,
    .booking-section p {
        font-size: 18px;
        color: #666666;
    }

    /* Blogs Section */
    .blogs {
        padding: 20px;
        background-color: #eaeaea;
    }

    .blogs h2 {
        font-size: 28px;
        color: #333333;
    }

    .blogs h3 {
        font-size: 20px;
        color: #666666;
    }
    
</style>