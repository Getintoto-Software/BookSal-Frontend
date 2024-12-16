<template>
    <footer>
        <!-- Contains name and Logo -->
        <div class="logo-container">

        </div>

        <!-- Contains Footer Links -->
        <div class="footer-links-container">
            <!-- One part of the links -->
            <div>

            </div>

            <!-- Another part of the links -->

            <div>

            </div>
        </div>

        <!-- Contains the icons for socials -->
        <div class="social-links-container">
            <a href="#" class="social-link"> <i class="bi bi-instagram"></i></a>
            <a href="#" class="social-link"> <i class="bi bi-facebook"></i></a>
            <a href="#" class="social-link"> <i class="bi bi-at"></i></a>
            <a href="#" class="social-link"> <i class="bi bi-linkedin"></i></a>
            <a href="#" class="social-link"> <i class="bi bi-twitter"></i></a>
        </div>
    </footer>
</template>

<script>
export default {
    name: "Footer",
};
</script>

<style scoped>
/* Footer Base Styles */
.footer {
    background-color: #2f3b48;
    /* Dark background */
    color: #b3e64d;
    /* Green text */
    padding: 20px 40px;
    font-family: Arial, sans-serif;
}

.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    text-align: center;
}

/* Logo Section */
.logo {
    display: flex;
    align-items: center;
    font-size: 2rem;
    font-weight: bold;
    color: #b3e64d;
}

.logo-icon {
    margin-left: 8px;
    height: 40px;
}

.tagline {
    margin: 10px 0;
    font-size: 1rem;
}

/* Social Icons */
.social-icons {
    display: flex;
    gap: 15px;
    margin-top: 10px;
    justify-content: center;
}

.social-link {
    color: #b3e64d;
    font-size: 1.2rem;
    text-decoration: none;
    transition: color 0.3s ease;
}

.social-link:hover {
    color: #ffffff;
}

/* Divider Lines */
.divider {
    width: 1px;
    background-color: #b3e64d;
    height: 100px;
    margin: 0 20px;
}

/* Footer Links */
.footer-links {
    list-style: none;
    padding: 0;
}

.footer-link {
    text-decoration: none;
    color: #b3e64d;
    font-weight: bold;
    display: block;
    margin: 10px 0;
    margin-bottom: 20px;
    position: relative;
    padding-bottom: 5px;
    /* Spacing between text and line */
    transition: color 0.3s ease;
}

/* Horizontal Line under Links */
.footer-link::after {
    content: "";
    display: block;
    width: 60px;
    /* Length of the line */
    height: 2px;
    /* Thickness */
    background-color: #b3e64d;
    margin: 20px;
    /* Space between text and line */
    transition: background-color 0.3s ease;
}

/* Hover Effects */
.footer-link:hover {
    color: #ffffff;
}

.footer-link:hover::after {
    background-color: #ffffff;
    /* Line changes color on hover */
}

/* Responsive Footer */
@media (max-width: 768px) {
    .container {
        flex-direction: column;
        gap: 20px;
    }

    .divider {
        display: none;
        /* Hide dividers on smaller screens */
    }

    .footer-left,
    .footer-middle,
    .footer-right {
        text-align: center;
    }

    .social-icons {
        justify-content: center;
    }
}
</style>