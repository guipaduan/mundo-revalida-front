<template>
  <div id="topo"></div>
	<header id="header">
    <div class="alignment">

      <router-link :to="{name: 'home'}">
        <a href="" class="logotipo">
          <img src="../../assets/images/logotipo.png" alt="" border="0" />
        </a>
      </router-link>

      <div class="wrapper">
        <nav class="navbar">
          <input type="checkbox" id="nav" />
          <label for="nav">
            <span></span>
          </label>

          <ul>
            <li>
              <a href="/#courses" v-if="isHomeUrl">Cursos</a>
              <a href="javascript:void(0)" v-if="!isHomeUrl">Cursos</a>
              <ul v-if="!isHomeUrl">
                <li>
                  <router-link :to="{name: 'strikeCourse', hash: '#topo'}">Strike</router-link>
                </li>
                <li>
                  <router-link :to="{name: 'discursiveMasterCourse', hash: '#topo'}">Discursiva Master</router-link>
                </li>
                <li>
                  <router-link :to="{name: 'practicusIntensiveCourse', hash: '#topo'}">Practicus Intensive</router-link>
                </li>
                <li>
                  <router-link :to="{name: 'practicusPresencialCourse', hash: '#topo'}">Practicus Presencial</router-link>
                </li>
                <li>
                  <router-link :to="{name: 'combos', hash: '#topo'}">Combos</router-link>
                </li>
              </ul>
            </li>

            <li v-if="isHomeUrl">
              <a href="/#resources" >Recursos</a>
            </li>

            <li v-if="!isHomeUrl">
              <router-link :to="{name: 'resources'}">Recursos</router-link>
            </li>

            <li>
              <router-link :to="{name: 'contact'}">Contato</router-link>
            </li>

            <li class="spacer">
              Área do aluno
            </li>

            <li class="is_mobile">
              <a href="https://mundo-revalida.herospark.co/" target="_blank">Cursos</a>
            </li>

            <li class="is_mobile">
              <a href="https://grupommed.com.br/login" target="_blank">Banco de questões</a>
            </li>

            <li class="social">
              <div class="social">
                <ul>
                  <li><a href="https://www.instagram.com/mundorevalida/" target="_blank"><i class="fab fa-instagram"></i></a></li>
                  <li><a href="https://www.youtube.com/channel/UCzAW9UlngEW0GSRSVqG8nzA" target="_blank"><i class="fab fa-youtube"></i></a></li>
                  <li><a href="https://wa.me/5511914297094" target="_blank"><i class="fab fa-whatsapp"></i></a></li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>

        <div class="social">
          <ul>
            <li><a href="https://www.instagram.com/mundorevalida/" target="_blank"><i class="fab fa-instagram"></i></a></li>
            <li><a href="https://www.youtube.com/channel/UCzAW9UlngEW0GSRSVqG8nzA" target="_blank"><i class="fab fa-youtube"></i></a></li>
            <li><a href="https://wa.me/5511914297094" target="_blank"><i class="fab fa-whatsapp"></i></a></li>
          </ul>
        </div>
        
        <div class="student_area">
          <a href="javascript:void(0)" class="global_cta">Área do aluno</a>

          <ul>
            <li><a href="https://mundo-revalida.herospark.co/" target="_blank">Cursos</a></li>
            <li><a href="https://grupommed.com.br/login" target="_blank">Banco de questões</a></li>
          </ul>
        </div>
      </div>

    </div>
	</header>
</template>

<script>
export default {
  name: 'StructureHeader',
  props: {
    
  },

  mounted() {
  },

  computed: {
    isHomeUrl() {
      return this.$route.path == '/';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  
</style>