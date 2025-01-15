<template>
  <div class="homepage-main-container" style="background: #f4f4f4;;">
      <section class="hero">
          <div class="hero-content">
              <h1 style="color: #368033;">#1 Futsal Booking Platform In Nepal</h1>
              <p style="color: #368033;">Futsals at your fingertips.</p>
              <div class="buttons">
                <button class="btn book-btn">Book Futsal Now -></button>
                <button class="btn register-btn">Register a Futsal -></button>
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
          <h2 style="color: #368033;">Own A Futsal? We have you covered</h2>
          <p style="color: #368033;">Register your Business Today. Benefit from online Booking.</p>
          <button class="btn register-btn">Register your Futsal!! -></button>
      </section>

      <section class="booking-section">
          <h2 style="color: #368033;">Book a Game without any Hassle</h2>
          <p style="color: #368033;">Select Futsal, Select Date and Time, Provide Details and play without any issue.</p>
          <button class="btn book-btn">Book a Game Now!!! -></button>
      </section>

      <div class="blog-section">
        <h2 style="color: #368033;">Learn about the Beautiful Game, <br />Check out our latest Blogs</h2>
        <Splide :options="splideOptions" class="splide-container">
        <SplideSlide v-for="(blog, index) in blogs" :key="index">
            <div class="card">
                <div class="card-image"></div>
                <div class="card-content">
                    <h3>{{ blog.title }}</h3>
                    <div class="card-footer">
                        <span class="author">{{ blog.author }}</span>
                        <span class="date">{{ blog.date }}</span>
                    </div>
                </div>
            </div>
        </SplideSlide>
        </Splide>
    </div>
  </div>

</template>

<script>
  import { Splide, SplideSlide } from '@splidejs/vue-splide';
    import '@splidejs/splide/dist/css/splide.min.css';

    export default {
        components: {
            Splide,
            SplideSlide,
        },
        data() {
            return {
            splideOptions: {
                type: 'loop',
                perPage: 4,
                gap: '5rem',
                breakpoints: {
                768: { perPage: 1 },
                },
            },
            blogs: [
                {
                    title: 'Why are Futsals so popular in Kathmandu?',
                    author: 'Adarsh Neupane',
                    date: '12/12/2023',
                },
                {
                    title: 'Tips for Improving Your Game',
                    author: 'Adarsh Neupane',
                    date: '10/10/2023',
                },
                {
                    title: 'Best Futsal Courts in Nepal',
                    author: 'Adarsh Neupane',
                    date: '11/11/2023',
                },
                {
                    title: 'Best Futsal Courts in Nepal',
                    author: 'Adarsh Neupane',
                    date: '11/11/2023',
                },
            ],
            };
        },
    };
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
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: stretch;
    align-content: center;
    width: 38%;
      
  }

  .btn {
      padding: 10px 20px;
      border: none;
      border-radius: 12px;
      margin: 5px;
      cursor: pointer;
      font-weight: bolder;
      font-size: 21px;
      font: 50px;
      background-color: #ADE25D;
      color: #364958;
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
        text-align: center;
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
  .blog-section {
    text-align: center;
    padding: 2rem;
    }

    .splide-container {
    margin: 2rem auto;
    }

    .card {
    border: 1px solid #ccc;
    border-radius: 8px;
    overflow: hidden;
    background: #fff;
    text-align: left;
    gap: 10px;
    padding: 1rem;
    }

    .card-image {
    height: 150px;
    background: #ddd;
    margin-bottom: 1rem;
    }

    .card-content {
    display: flex;
    flex-direction: column;
    }

    .card-footer {
    display: flex;
    justify-content: space-between;
    font-size: 0.9rem;
    color: #555;
    }

    h3 {
    margin: 0.5rem 0;
    }
  
</style>
