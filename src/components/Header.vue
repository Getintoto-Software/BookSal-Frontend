<template>
    <nav class="navbar">
      <div class="container">
        <!-- Logo -->
        <div class="logo">
          <span>BookSa</span>
          <img src="./assets/logo.png" alt="Logo" class="logo-icon" />
        </div>
  
        <!-- Hamburger Icon -->
        <div class="hamburger" @click="toggleMenu">
          <span :class="{ open: isMenuOpen }"></span>
          <span :class="{ open: isMenuOpen }"></span>
          <span :class="{ open: isMenuOpen }"></span>
        </div>
  
        <!-- Menu Items -->
        <ul :class="['menu', { 'menu-open': isMenuOpen }]">
          <li><a href="#" class="menu-link">Home</a></li>
          <li><a href="#" class="menu-link">Futsals</a></li>
          <li><a href="#" class="menu-link">Login</a></li>
        </ul>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: "Navbar",
    data() {
      return {
        isMenuOpen: false,
      };
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Navbar Container */
  .navbar {
    background-color: #b3e64d; /* Greenish background */
    color: #2c3e50;
    padding: 10px 20px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  /* Logo */
  .logo {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    font-weight: bold;
    color: #2c3e50;
  }
  
  .logo-icon {
    margin-left: 5px;
    height: 30px;
  }
  
  /* Menu */
  .menu {
    display: flex;
    gap: 20px;
    list-style: none;
  }
  
  .menu-link {
    text-decoration: none;
    font-weight: bold;
    color: #2c3e50;
  }
  
  .menu-link:hover {
    color: #11235a;
  }
  
  /* Hamburger Icon */
  .hamburger {
    display: none;
    flex-direction: column;
    cursor: pointer;
  }
  
  .hamburger span {
    width: 25px;
    height: 3px;
    background-color: #2c3e50;
    margin: 3px 0;
    transition: all 0.3s ease-in-out;
  }
  
  .hamburger span.open {
    background-color: #11235a;
  }
  
  /* Responsive Styles */
  @media (max-width: 768px) {
    .hamburger {
      display: flex;
    }
  
    .menu {
      display: none;
      flex-direction: column;
      background-color: #b3e64d;
      position: absolute;
      top: 50px;
      right: 0;
      width: 100%;
      text-align: center;
      gap: 10px;
      padding: 10px 0;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }
  
    .menu.menu-open {
      display: flex;
    }
  }
  </style>
  