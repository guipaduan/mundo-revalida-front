<template>
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
              <a href="/#courses">Cursos</a>

              <!--<ul>
                <li><a href="">Strike</a></li>
                <li><a href="">Discursive Master</a></li>
                <li><a href="">Practicus Intensive 2022.2</a></li>
              </ul>-->
            </li>

            <li><a href="/#resources">Recursos</a></li>
            <li><router-link to="/contato">Contato</router-link></li>

            <li class="cta">
              <div class="cta">
                <a href="" class="global_cta">Login</a>
              </div>
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
        
        <a href="" class="global_cta">Login</a>
      </div>

    </div>
	</header>
</template>

<script>
export default {
  name: 'StructureHeader',
  props: {
    
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