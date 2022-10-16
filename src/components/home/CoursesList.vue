<template>
  <section class="component_course_home">
    <div id="courses"></div>
    <a name="courses" />
    
    <h1>Cursos</h1>

    <ul>
      <li>
        <div class="image">
          <img src="@/assets/images/logo_c_strike.png" alt="" border="0" />
        </div>

        <p class="description">
          Curso totalmente focado na <strong>Prova Objetiva</strong> do Revalida!
        </p>

        <a :href="strike2023_1" target="_blank" class="global_cta">Inscreva-se agora!</a>
        <router-link :to="{name: 'strikeCourse',}" class="local_cta">Saiba mais</router-link>
      </li>

      <li>
        <div class="image">
          <img src="@/assets/images/logo_c_discursive_master.png" alt="" border="0" />
        </div>

        <p class="description">
          O primeiro curso específico para <strong>Prova Discursiva</strong> do Revalida!
        </p>

        <a :href="discursiveMaster2023_1" target="_blank" class="global_cta">Inscreva-se agora!</a>
        <router-link :to="{name: 'discursiveMasterCourse',}" class="local_cta">Saiba mais</router-link>
      </li>

      <li>
        <div class="image">
          <img src="@/assets/images/logo_c_practicus_intensive.png" alt="" border="0" />
        </div>

        <p class="description">
          Curso e Mentoria exclusiva, focados na <strong>Prova Prática</strong> do Revalida!
        </p>

        <a :href="practicusIntensive2022_2" target="_blank" class="global_cta">Inscreva-se agora!</a>
        <router-link :to="{name: 'practicusIntensiveCourse',}" class="local_cta">Saiba mais</router-link>
      </li>

      <li data-width="half">
        <div class="image">
          <img src="@/assets/images/logo_c_practicus_presencial.png" alt="" border="0" />
        </div>

        <p class="description">
          Mesma didática do curso <strong>PRACTICUS INTENSIVE</strong>, agora no modo <strong>PRESENCIAL!</strong><br /><br />
          Serão <strong>três dias</strong> de treinamento intenso focado na <strong>Prova Prática</strong> do Revalida!
        </p>

        <a :href="practicusPresencial2022_2" target="_blank" class="global_cta">Inscreva-se agora!</a>
        <router-link :to="{name: 'practicusPresencialCourse',}" class="local_cta">Saiba mais</router-link>
      </li>

      <li data-width="half">
        <div class="image">
          <img src="@/assets/images/logo_c_combos.png" alt="" border="0" />
        </div>

        <div class="wrapper" data-alignment="center">
          <p class="description">
            Compre junto e receba um desconto especial!
          </p>

          <router-link :to="{name: 'combos',}" class="global_cta">Saiba mais</router-link>
        </div>
      </li>

      <!--
      <li data-width="full">
        <div class="image">
          <img src="@/assets/images/logo_c_practicus_presencial.png" alt="" border="0" />
        </div>

        <div class="wrapper">
          <p class="description">
            Mesma didática do curso <strong>PRACTICUS INTENSIVE</strong>, agora no modo <strong>PRESENCIAL!</strong><br />
            Serão <strong>três dias</strong> de treinamento intenso focado na <strong>Prova Prática</strong> do Revalida!
          </p>

          <a href="" class="global_cta">Inscreva-se agora!</a>
          <router-link :to="{name: 'practicusPresencialCourse'}" class="local_cta">Saiba mais</router-link>
        </div>
      </li>

      <li data-width="full">
        <div class="image">
          <ul>
            <li>
              <img src="@/assets/images/logo_c_strike.png" alt="" border="0" />
            </li>
            <li>
              <img src="@/assets/images/logo_c_discursive_master.png" alt="" border="0" />
            </li>
          </ul>
        </div>

        <div class="wrapper">
          <p class="description">
            O combo para aprovação na <strong>primeira fase</strong> do Revalida!
          </p>

          <a href="" class="global_cta">Inscreva-se agora!</a>
          <router-link :to="{name: 'combos'}" class="local_cta">Saiba mais</router-link>      
        </div>
      </li>
      -->
      
    </ul>
  </section>
</template>

<script>
export default {
  name: 'HomeCoursesList',
  props: {
    
  },

  computed: {
    strike2023_1() {
      return `https://pay.herospark.com/strike-2023-1-80176`;
    },

    discursiveMaster2023_1() {
      return `https://pay.herospark.com/discursiva-master-2023-1-80175`;
    },

    practicusIntensive2022_2() {
      return `https://pay.herospark.com/practicus-intensive-2022-2-80174`;
    },

    practicusPresencial2022_2() {
      return `https://pay.herospark.com/practicus-presencial-2022-2-83806`;
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>