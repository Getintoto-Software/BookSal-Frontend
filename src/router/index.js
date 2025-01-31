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
      component: Signin
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
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
      meta: {
        requiresAuth: true
      }
    }
  ],
})

// Navigation Guard
router.beforeEach((to, from, next) => {
  const store = useStore(); // Access Vuex store

  if (to.meta.requiresAuth && !store.state.isAuthenticated) {
    // If the route requires authentication and user is NOT authenticated
    next('/signin'); // Redirect to SignIn page
  } else {
    next(); // Proceed to the requested route
  }
});


export default router
