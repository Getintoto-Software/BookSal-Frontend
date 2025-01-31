import { createRouter, createWebHistory } from 'vue-router'
import { useStore } from 'vuex'

import HomeView from '../views/HomeView.vue'
import Signin from '@/views/Signin.vue'
import Signup from '@/views/Signup.vue'
import FutsalDetails from '@/views/FutsalDetails.vue'
import FutsalBooking from '@/views/FutsalBooking.vue'
import AdminHomeview from '@/views/admin/AdminHomeview.vue'
import FutsalBookAdd from '@/views/admin/FutsalBookAdd.vue'
import FutsalUpdateboking from '@/views/admin/FutsalUpdateboking.vue'
import UpdateProfile from '@/views/admin/UpdateProfile.vue'
import Profile from '@/views/profile/Profile.vue'
import DeleteAccount from '@/views/admin/DeleteAccount.vue'
import Contact from '@/views/admin/ContactAdmins.vue'
import ChangePassword from '@/views/admin/ChangePassword.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/futsals',
      name: 'futsals',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/signin',
      name: 'signin',
      component: Signin,
      meta: { requiresGuest: true } // Prevent logged-in users from accessing
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup,
      meta: { requiresGuest: true } // Prevent logged-in users from accessing
    },
    {
      path: '/futsal/:id',
      name: 'available',
      component: FutsalDetails
    },
    {
      path: '/futsal/:id/booking',
      name: 'booking',
      component: FutsalBooking
    },
    {
      path: '/admin',
      name: 'admin-home',
      component: AdminHomeview,
    },
    {
      path: '/admin-booking',
      name: 'admin-booking',
      component: FutsalBookAdd,
    },
    {
      path: '/admin-update',
      name: 'admin-update',
      component: FutsalUpdateboking,
    },
    {
      path: '/admin-update-profile',
      name: 'admin-update-profile',
      component: UpdateProfile,
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      meta: { requiresAuth: true } // Require authentication
    },
    {
      path: '/admin-delete-account',
      name: 'admin-delete-account',
      component: DeleteAccount
    },
    {
      path: '/admin-contact',
      name: 'admin-contact',
      component: Contact
    },
    {
      path: '/admin-change-password',
      name: 'admin-change-password',
      component: ChangePassword
    }
  ],
})

// Function to check authentication
function checkIfAuthenticated() {
  const store = useStore(); // Access Vuex store
  return store.state.isAuthenticated;
}

// Navigation Guard
router.beforeEach((to, from, next) => {
  const isAuthenticated = checkIfAuthenticated();

  // Redirect unauthenticated users trying to access protected routes
  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/signin');
  }
  // Prevent authenticated users from accessing Sign In or Sign Up
  else if (to.meta.requiresGuest && isAuthenticated) {
    next('/profile');
  }
  else {
    next();
  }
});

export default router;
