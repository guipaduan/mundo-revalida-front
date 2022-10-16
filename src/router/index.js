import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StrikeComponent from '../components/courses/Strike.vue';
import DiscursivaMasterComponent from '@/components/courses/DiscursivaMaster.vue';
import PracticusIntensiveComponent from '@/components/courses/PracticusIntensive.vue';
import PracticusPresencialComponent from '@/components/courses/PracticusPresencial.vue';
import CombosComponent from '@/components/courses/Combos.vue';
import ContactComponent from '@/views/ContactView.vue';
import ResourcesView from '@/views/ResourcesView.vue';

let meta = {
  globalTitle: 'Mundo revalida',
  globalDescription: '',
  globalKeywords: ''
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: meta.globalTitle
    }
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
    meta: {
      title: 'Strike'
    }
  },
  {
    path: '/curso-discursiva-master',
    name: 'discursiveMasterCourse',
    component: DiscursivaMasterComponent,
    meta: {
      title: 'Discursiva Master | ' + meta.globalTitle
    }
  }
  ,
  {
    path: '/curso-practicus-intensive',
    name: 'practicusIntensiveCourse',
    component: PracticusIntensiveComponent,
    meta: {
      title: 'Practicus Intensive | ' + meta.globalTitle
    }
  },
  {
    path: '/curso-practicus-presencial',
    name: 'practicusPresencialCourse',
    component: PracticusPresencialComponent,
    meta: {
      title: 'Practicus Presencial | ' + meta.globalTitle
    }
  },

  //combos
  {
    path: '/combos-cursos',
    name: 'combos',
    component: CombosComponent,
    meta: {
      title: 'Combos Mundo Revalida | ' + meta.globalTitle
    }
  },

  //recursos
  {
    path: '/recursos',
    name: 'resources',
    component: ResourcesView,
    meta: {
      title: 'Recursos | ' + meta.globalTitle
    }
  },

  //contato
  {
    path: '/contato',
    name: 'contact',
    component: ContactComponent,
    meta: {
      title: 'Fale conosco | ' + meta.globalTitle
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
  },
});

router.beforeEach((to, from, next) => {
  document.title = 'Mundo Revalida';

  if (to.hasOwnProperty('meta')) {
    document.title = to.meta.title;
  }

  next();
});

export default router
