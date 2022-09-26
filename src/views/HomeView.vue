<template>  
  <main id="content">
	  <div class="alignment">
      <HomeCoursesList />
      <HomeResourcesList />
      <Testimonial />
      <Doubts />
      <About />
    </div>
  </main>  
</template>

<script>
// @ is an alias to /src
import HomeCoursesList from '@/components/home/CoursesList.vue';
import HomeResourcesList from '@/components/home/ResourcesList.vue';
import Testimonial from '@/components/Testimonial.vue';
import Doubts from '@/components/Doubts.vue';
import About from '@/components/About.vue';

export default {
  name: 'HomeView',
  components: {
    HomeCoursesList,
    HomeResourcesList,
    Testimonial,
    Doubts,
    About,
  }
}
</script>
