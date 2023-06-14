// import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: HomeView
//     },
//     {
//       path: '/about',
//       name: 'about',
//       // route level code-splitting
//       // this generates a separate chunk (About.[hash].js) for this route
//       // which is lazy-loaded when the route is visited.
//       component: () => import('../views/AboutView.vue')
//     }
//   ]
// })

// export default router

import { createRouter, createWebHistory } from 'vue-router';
import Signin from '../views/Signin/Signin.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/signin',
      name: 'signin',
      component: Signin,
    },
    {
      path: '/signin/:userId',
      name: 'signinWithUserId',
      component: Signin,
    },
    // {
    //   path: '/dashboard',
    //   name: 'dashboard',
    //   component: Dashboard, // Replace 'Dashboard' with the appropriate component for your dashboard view
    //   meta: { requiresAuth: true },
    // },
    {
      path: '/*',
      redirect: '/dashboard',
      meta: { requiresAuth: true },
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});

// Add your navigation guard here
router.beforeEach((to, from, next) => {
  // Check if the route requires authentication
  // Replace 'isLoggedIn' with your actual authentication logic
  const isLoggedIn = true; // Example: Assume the user is always authenticated
  if (to.meta.requiresAuth && !isLoggedIn) {
    next('/signin');
  } else {
    next();
  }
});

export default router;

