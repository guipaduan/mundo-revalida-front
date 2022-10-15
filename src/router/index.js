import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StrikeComponent from '../components/courses/Strike.vue';
import DiscursivaMasterComponent from '@/components/courses/DiscursivaMaster.vue';
import PracticusIntensiveComponent from '@/components/courses/PracticusIntensive.vue';
import PracticusPresencialComponent from '@/components/courses/PracticusPresencial.vue';
import CombosComponent from '@/components/courses/Combos.vue';
import ResourcesView from '@/views/ResourcesView.vue';
import DiscursiveTest from '@/components/resources/DiscursiveTest.vue';
import PracticleTest from '@/components/resources/PracticleTest.vue';
import ContactComponent from '@/views/ContactView.vue';

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

  //cursos
  {
    path: '/curso-strike',
    name: 'strikeCourse',
    component: StrikeComponent,
  },
  {
    path: '/curso-discursiva-master',
    name: 'discursiveMasterCourse',
    component: DiscursivaMasterComponent,
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
    path: '/recursos',
    name: 'ResourcesView',
    component: ResourcesView,
  },
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

  //contato
  {
    path: '/contato',
    name: 'contact',
    component: ContactComponent,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
