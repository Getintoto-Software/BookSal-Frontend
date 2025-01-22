import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Signin from '@/views/Signin.vue'
import Signup from '@/views/Signup.vue'
import FutsalDetails from '@/views/FutsalDetails.vue'
import FutsalBooking from '@/views/FutsalBooking.vue'
import AdminHomeview from '@/views/admin/AdminHomeview.vue'
import FutsalBookAdd from '@/views/admin/FutsalBookAdd.vue'

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
      path: '/booking',
      name: 'booking',
      component: FutsalBooking

    },
    {
      path: '/admin',
      name: 'adminhome',
      component: AdminHomeview,
    },
    {
      path:'/admin-booking',
      name:'admib-booking',
      component: FutsalBookAdd,
    }
  ],
})

export default router
