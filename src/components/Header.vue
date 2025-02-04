<template>
  <nav class="navbar" ref="navbar">
    <div class="container">
      <!-- Logo -->
      <div class="logo">
        <span>BookSal</span>
        <img src="@/assets/logo.svg" alt="Logo" class="logo-icon" />
      </div>

      <!-- Hamburger Icon -->
      <div class="hamburger" @click="toggleMenu">
        <span :class="{ open: isMenuOpen }"></span>
        <span :class="{ open: isMenuOpen }"></span>
        <span :class="{ open: isMenuOpen }"></span>
      </div>

      <!-- Menu Items -->
      <ul :class="['menu', { 'menu-open': isMenuOpen }]" ref="menu">
        <li>
          <RouterLink to="/" class="menu-link" @click="closeMenu">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/futsals" class="menu-link" @click="closeMenu">Futsals</RouterLink>
        </li>
        <li v-if="!isAuthenticated">
          <RouterLink to="/signin" class="menu-link" @click="closeMenu">Sign In</RouterLink>
        </li>
        <li v-if="isAuthenticated">
          <RouterLink to="/matchmaking" class="menu-link" @click="closeMenu">
            <button class="btn btn-success"> Find A Match </button>
          </RouterLink>
        </li>
        <li v-if="isAuthenticated">
          <RouterLink to="/profile" class="menu-link" @click="closeMenu">
            <i class="bi bi-person-circle"></i>
          </RouterLink>
        </li>
        <li v-if="isAuthenticated">
          <i @click="logout" class="bi bi-box-arrow-right menu-link"></i>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { useStore } from "vuex";
import { computed, ref, onMounted, onUnmounted } from "vue";
import { useRouter, RouterLink } from "vue-router";

export default {
  components: {
    RouterLink,
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const isMenuOpen = ref(false);
    const navbar = ref(null);
    const menu = ref(null);

    const isAuthenticated = computed(() => store.state.isAuthenticated);

    const logout = () => {
      store.commit("SET_TOKEN", null);
      store.commit("SET_AUTH", false);
      localStorage.removeItem("token");
      localStorage.removeItem("expiryTime");
      router.push("/signin");
      closeMenu(); // Close menu on logout
    };

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };

    const closeMenu = () => {
      isMenuOpen.value = false;
    };

    const handleClickOutside = (event) => {
      if (menu.value && !menu.value.contains(event.target) && !navbar.value.contains(event.target)) {
        closeMenu();
      }
    };

    onMounted(() => {
      document.addEventListener("click", handleClickOutside);
    });

    onUnmounted(() => {
      document.removeEventListener("click", handleClickOutside);
    });

    return {
      isAuthenticated,
      logout,
      isMenuOpen,
      toggleMenu,
      closeMenu,
      navbar,
      menu,
    };
  },
};
</script>

<style scoped>
/* Navbar Container */
.navbar {
  background-color: #b3e64d;
  color: #2c3e50;
  padding: 10px 20px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding-block: auto;
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
  align-items: center;
  gap: 20px;
  list-style: none;
  transition: all 0.3s ease-in-out;
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
  z-index: 1000;
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
    position: fixed;
    top: 50px;
    right: 0;
    width: 100%;
    text-align: center;
    gap: 10px;
    padding: 10px 0;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    z-index: 999;
  }

  .menu.menu-open {
    display: flex !important;
  }
}
</style>
