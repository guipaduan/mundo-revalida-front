<template>
  <main id="content" class="content_contact">
	  <div class="alignment">
    
      <h1>Fale conosco</h1>

      <div class="global_grid">
        <div class="col-12 col-xl-4 col-xxl-5">
          <div class="description richeditor">
            <h1>Telefone:</h1>
            <p><a href="https://wa.me/5511914297094" target="_blank">+55 11 91429.7094</a></p>
            <p>&nbsp;</p>

            <h1>E-mail:</h1>
            <p><a href="mailto:educacao@mundorevalida.com.br">educacao@mundorevalida.com.br</a></p>
          </div>

          <div class="social">
            <h1>Mídias sociais</h1>

            <ul>
              <li>
                <a href="https://www.instagram.com/mundorevalida/" target="_blank"><i class="fab fa-instagram"></i></a>
              </li>
              <li>
                <a href="https://www.youtube.com/channel/UCzAW9UlngEW0GSRSVqG8nzA" target="_blank"><i class="fab fa-youtube"></i></a>
              </li>
            </ul>
          </div>
        </div>
        
        <div class="col-12 col-xl-8 col-xxl-7">
          
        </div>
      </div>

    </div>
  </main>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'ContactView',
  components: {
    
  },

  mounted() {
    this.$nextTick(() => {
        const el = document.querySelector('#topo');
        el && el.scrollIntoView();
    });
  },
}
</script>

<style scoped lang="scss">
.content_contact {

  .alignment {
    & > h1 {
      margin: 0 0 25px;
    }
  }

  .description {
    h1 {
      font-size: 28px !important;
      font-weight: 600;
      text-transform: lowercase !important;
      display: block;
      margin: 0 0 15px !important;
    }

    p {
      font-size: 18px;
    }
  }

  .social {
    position: relative;
    display: block;
    margin: 30px 0 0;

    h1 {
      font-size: 28px !important;
      font-weight: 600;
      text-transform: lowercase !important;
      display: block;
      margin: 0 0 15px !important;
    }

    ul {
      display: flex;
      align-items: center;

      li {
        display: block;
        margin: 0 5px;

        &:first-child {
          margin-left: 0;
        }

        &:last-child {
          margin-right: 0;
        }

        a {
          font-size: 22px;
          display: block;
				  transition: .15s all linear;

          &:hover {
            transform: translateY(-1px);
          }
        }
      }
    }
  }
}
</style>
