<template>
    <nav class="header-section d-flex justify-content-between align-items-center">
        <div class="header-container">
            <!-- Left: Menu Icon (☰) -->
            <div class="icon-container">
                <i class="bi bi-list icon me-3" @click="toggleMenuPopup"></i>
                <!-- Menu Popup -->
                <div v-if="isMenuOpen" class="popup-menu left-popup">
                    <ul>
                        <!-- <li style="margin-top: 15px;"><RouterLink to="/admin" class="menu-link" @click="toggleMenuOpen">List Bookings</RouterLink></li> -->
                        <li>
                            <RouterLink :to="'/admin/' + $route.params.id + '/add-booking'" class="menu-link"
                                @click="toggleMenuOpen">Add a Booking</RouterLink>
                        </li>
                        <!-- <li><RouterLink to="/admin-update" class="menu-link" @click="toggleMenuOpen">Update Booking</RouterLink></li> -->
                        <li>
                            <RouterLink :to="'/admin-contact/' + $route.params.id" class="menu-link"
                                @click="toggleMenuOpen">Contact Admins
                            </RouterLink>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Center: Logo -->
            <div class="logo">
                <div class="brand">
                    <span>BookSal</span>
                </div>
                <span class="fw-bold">Admin Panel</span>
            </div>

            <!-- Right: Profile Icon  -->
            <div class="icon-container">
                <i class="bi bi-person-circle icon" @click="toggleProfilePopup"></i>
                <!-- Profile Popup -->
                <div v-if="isProfileOpen" class="popup-menu right-popup">
                    <h3 style="color: #ADE25D;"></h3>
                    <ul>
                        <li style="margin-top: 15px;">
                            <RouterLink to="/edit-profile" class="menu-link" @click="toggleProfileOpen">Update Profile
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/admin-change-password" class="menu-link" @click="toggleProfileOpen">Change
                                Password</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/admin-delete-account" class="menu-link" @click="toggleProfileOpen">Delete
                                Account</RouterLink>
                        </li>
                        <li class="logout">
                            <RouterLink to="/" class="menu-link" @click="toggleProfileOpen">Log Out<i
                                    class="bi bi-box-arrow-right"></i></RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            isMenuOpen: false,
            isProfileOpen: false
        };
    },
    methods: {
        toggleMenuPopup() {
            this.isMenuOpen = !this.isMenuOpen;
            this.isProfileOpen = false; // Close the other popup if open
        },
        toggleProfilePopup() {
            this.isProfileOpen = !this.isProfileOpen;
            this.isMenuOpen = false; // Close the other popup if open
        },
        toggleMenuOpen() {
            this.isMenuOpen = !this.isMenuOpen;
        },
        toggleProfileOpen() {
            this.isProfileOpen = !this.isProfileOpen;
        }
    }
};
</script>

<style scoped>
/* Header Styles */
.header-section {
    background-color: #b3e64d;
    color: #2c3e50;
    padding: 10px 20px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}

.header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.logo {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.brand {
    font-size: 30px;
    font-weight: bold;
}

.icon {
    font-size: 30px;
    cursor: pointer;
}

.menu-link {
    text-decoration: none;
    font-weight: bold;
    color: #2c3e50;
}

.popup-menu .logout {
    background: #ef2c2c;

}

/* Popup Menu Styles */
.popup-menu {
    position: absolute;
    background: #364958;
    border-radius: 8px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    padding: 10px;
    z-index: 1000;
    width: 200px;
    text-align: left;
}

/* Positioning for left and right popups */
.left-popup {
    top: 50px;
    left: 0;
}

.right-popup {
    top: 50px;
    right: 0;
}

/* Popup List Styles */
.popup-menu ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.popup-menu ul li {
    padding: 8px 12px;
}

.popup-menu ul li {
    text-decoration: none;
    background: #ADE25D;
    color: #364958;
    font-weight: bold;
    display: block;
    text-align: center;
    border-radius: 5px;
    margin-bottom: 15px;
}

.popup-menu ul li:hover {
    background: #ade25dbb;
    color: #364958b7;
    cursor: pointer;
}

.popup-menu .logout:hover {
    background: #ef2c2ca0;
    color: #364958b7;
    cursor: pointer;
}

/* Close on click outside */
.icon-container {
    position: relative;
}
</style>
