import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import StrikeComponent from '../components/courses/Strike.vue';
import DiscursiveMasterComponent from '@/components/courses/DiscursiveMaster.vue';
import PracticusIntensiveComponent from '@/components/courses/PracticusIntensive.vue';
import PracticusPresencialComponent from '@/components/courses/PracticusPresencial.vue';
import CombosComponent from '@/components/courses/Combos.vue';
import DiscursiveTest from '@/components/resources/DiscursiveTest.vue';
import PracticleTest from '@/components/resources/PracticleTest.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/contato',
    name: 'contato',
    component: ContactView
  },

  //cursos
  {
    path: '/curso-strike',
    name: 'strikeCourse',
    component: StrikeComponent,
  },
  {
    path: '/curso-discursive-master',
    name: 'discursiveMasterCourse',
    component: DiscursiveMasterComponent,
  }
  ,
  {
    path: '/curso-practicus-intensive',
    name: 'practicusIntensiveCourse',
    component: PracticusIntensiveComponent
  },
  {
    path: '/curso-practicus-presencial',
    name: 'practicusPresencialCourse',
    component: PracticusPresencialComponent,
  },

  //combos
  {
    path: '/combos-cursos',
    name: 'combos',
    component: CombosComponent,
  },

  //recursos
  {
    path: '/recursos-prova-discursiva',
    name: 'resourceDiscursiveTest',
    component: DiscursiveTest,
  },
  {
    path: '/recursos-prova-pratica',
    name: 'resourcePracticleTest',
    component: PracticleTest,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
