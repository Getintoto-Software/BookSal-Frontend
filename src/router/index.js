import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Signin from '@/views/Signin.vue'
import Signup from '@/views/Signup.vue'
import FutsalDetails from '@/views/FutsalDetails.vue'
import FutsalAvailability from '@/components/FutsalAvailability.vue'
import FutsalBooking from '@/views/FutsalBooking.vue'

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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
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
      path: '/booking',
      name: 'booking',
      component: FutsalBooking
    },
  ],
})

export default router
