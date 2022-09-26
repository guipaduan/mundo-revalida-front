<template>
  <section class="component_testimonial">
    <a name="testimonials" />
    <h1>Depoimentos</h1>
    <h2>Veja um pouco da opinião dos nossos alunos</h2>

    <div class="swiper_carousel component_testimonial_carousel">
      <swiper
        :modules="modules"
        :loop='true'
        :slides-per-view='4'
        :pagination="{
          clickable: true
        }"
        :breakpoints="{
          0: {
            slidesPerView: 1
          },
          1200: {
            slidesPerView: 4
          }
        }"
      >
        <swiper-slide>
          <div>
            <div class="wrapper">
              <p class="description">
                Venho agradecer ao Mundo Revalida, VOCÊS SÃO UMAS FERAAAAAS… Consegui 9,95 pontos. Aprovaaaaaadoooo! Gratidão, vocês são muito feraaaa.
              </p>

              <div class="name">Antonio Marcus S</div>	
            </div>
          </div>
        </swiper-slide>

        <swiper-slide>
          <div>
            <div class="wrapper">
              <p class="description">
                Venho aqui com muita gratidão, felicidade agradecer a vocês que tiveram um papel muito importante nesse processo. Eu aproveiiiiiiii! Graças aos recursos de vocês! Eu precisava somente de 0,75 pontos e consegui 4,05. Muito obrigado mesmoooooo
              </p>

              <div class="name">Manuel Casas Pompa</div>
            </div>
          </div>
        </swiper-slide>

        <swiper-slide>
          <div>
            <div class="wrapper">
              <p class="description">
                Agradeço a Deus, a minha família e a vocês. Obrigado Drs, muito obrigado mesom. VocÊs fazem parte da minha vitória. Eternamente agradecido.
              </p>

              <div class="name">Estevão Endro Lima Diniz</div>
            </div>
          </div>
        </swiper-slide>

        <swiper-slide>
          <div>
            <div class="wrapper">
              <p class="description">
                Passeeeeeeeiii. 8,4 pontos de recurso. Muito obrigado por terem me ajudado nessa fase!!! Vocês são 10!
              </p>

              <div class="name">Kayque Wellek</div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>

    <a href="/#courses" class="global_cta">Quero fazer parte também!</a>
  </section>
</template>

<script>
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';

export default {
  name: 'Testimonial',
  props: {
    
  },

  components: {
    Swiper,
    SwiperSlide
  },

  setup() {
    return {
      modules: [Navigation, Pagination, Scrollbar, A11y],
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>