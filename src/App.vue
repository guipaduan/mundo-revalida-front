<template>
  <StructureHeader />
    <router-view/>
  <StructureFooter />
</template>

<script>
import StructureHeader from '@/components/structure/Header.vue';
import StructureFooter from '@/components/structure/Footer.vue';

export default {
    name: 'Strike',
    components: {
        StructureHeader,
        StructureFooter,
    }
}
</script>

<style lang="scss">
  @import "assets/scss/base/variables";
  @import "assets/scss/base/mixins";
  @import "assets/scss/base/resets";

  @import "assets/scss/external/animate";
  @import "assets/scss/external/fontawesome";
  @import "assets/scss/external/swiper";
  
  @import "assets/scss/components/alerts";
  @import "assets/scss/components/breadcrumbs";
  @import "assets/scss/components/calltoaction";
  @import "assets/scss/components/forms";
  @import "assets/scss/components/grid";
  @import "assets/scss/components/pagination";
  @import "assets/scss/components/share";
  @import "assets/scss/components/structure";
  
  @import "assets/scss/sections/about";
  @import "assets/scss/sections/course_home";
  @import "assets/scss/sections/doubts";
  @import "assets/scss/sections/resource_home";
  @import "assets/scss/sections/testimonial";
</style>
