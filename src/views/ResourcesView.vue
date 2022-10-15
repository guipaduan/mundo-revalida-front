<template>
	<main id="content" class="content_resources">
    <div class="alignment">
      <section>
        <h1>Recursos</h1>
  
        <div class="description richeditor">
          <p>
            Nós somos pioneiros em elaboração de recursos,e contamos com a experiência de milhares de recursos já realizados!
            Somos especialistas em recursos gerais e individuais, tanto para <strong>PRIMEIRA FASE</strong>, quanto para <strong>SEGUNDA FASE!</strong>
          </p>
        </div>
      </section>

      <section>
        <h1>Recursos Gerais</h1>

        <div class="description richeditor">
          <p>
            Os recursos gerais são elaborados após a liberação do gabarito preliminar, esse recurso<br />
            visa a anulação dequestões da prova objetiva, e ampliação do gabarito para prova discursiva.
          </p>

          <p>
            Em relação à segunda fase, esses recursos visam a ampliação ou anulação de itens do checklist.
          </p>
        </div>
      </section>

      <section>
        <h1>Recursos Individuais</h1>

        <div class="description richeditor">
          <p>
            Os recursos individuais são elaborados especificamente para sua prova,<br />
            e nós podemos entrar com recursos tanto na prova discursiva, como na prova prática!
          </p>

          <p>
            Os recursos individuais são elaborados após a liberação da nota preliminar,<br />
            e eles visam aumentar sua nota a fim de alcançar a aprovação!
          </p>

          <p>
            Nos recursos da Prova Discursiva nós analisamos especificamente a sua prova, e buscamos com nossa<br />
            expertise e com dados da literatura, formas de aumentar sua nota, sempre baseado no gabarito oficial!
          </p>

          <p>
            Nos recursos da Prova Prática nós analisamos minuciosamente todos os seus vídeos, e buscamos trechos verbalizados,<br />
            e ações que constam no gabarito mas que muitas vezes não foram pontuados! E contamos com nossa expertise para<br />
            achar até mesmo trechos que não são óbvios, mas que muitas vezes cabem recurso!
          </p>
        </div>
      </section>

      <section>
        <h1>Vendas</h1>

        <div class="course_list">
          <ul>
            <li>
              <div class="image">
                <img src="@/assets/images/logo_p_discursiva.png" alt="" border="0" />
              </div>

              <div class="subtitle">Recursos individual</div>
      
              <div class="features">
                <ul>
                  <li>
                    Metodologia:<br />
                    <span>Mundo Revalida</span>
                  </li>
                  <li>
                    Banca de especialista:<br />
                    <span>
                      USP-SP, USP-RP,<br />
                      Santa Casa - SP, Unifesp,<br />
                      Unesp e Revalidados
                    </span>
                  </li>
                  <li>Dupla Revisão</li>
                </ul>
              </div>

              <div class="description">
                <h2>Objetivo</h2>
                
                Identificar inconsistências na correção da prova discursiva<br /><br />
                Aumentar a nota da prova discursiva
              </div>

              <a href="" target="_blank" class="global_cta">Compre aqui</a>
            </li>
            
            <li>
              <div class="image">
                <img src="@/assets/images/logo_p_pratica.png" alt="" border="0" />
              </div>

              <div class="subtitle">Recursos individual</div>
      
              <div class="features">
                <ul>
                  <li>
                    Metodologia:<br />
                    <span>Mundo Revalida</span>
                  </li>
                  <li>
                    Banca de especialista:<br />
                    <span>
                      USP-SP, USP-RP,<br />
                      Santa Casa - SP, Unifesp,<br />
                      Unesp e Revalidados
                    </span>
                  </li>
                  <li>Dupla Revisão</li>
                </ul>
              </div>

              <div class="description">
                <h2>Objetivo</h2>
                
                Identificar inconsistência na correção e aplicação da prova prática<br /><br />
                Aumentar a nota da prova prática em busca da aprovação
              </div>

              <a href="" target="_blank" class="global_cta">Compre aqui</a>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <section class="component_testimonial">
          <a name="testimonials" />
          <h1>Depoimentos</h1>
          <h2>Venha fazer parte dos milhares de aprovados com nossos recursos!</h2>
      
          <div class="swiper_carousel component_testimonial_carousel">
            <swiper
              :modules="modules"
              :loop='true'
              :slides-per-view='4'
              :pagination="{
                clickable: true,
                dynamicBullets: true,
                dynamicMainBullets: 3
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
              <!--<swiper-slide>
                <div>
                  <div class="wrapper">
                    <p class="description">
                      Passando para agradecer os 13,75 pontos que vocês me ajudaram a conseguir
                      Vou ser grata eternamente à Equipe
                      Vocês foram uns anjos em minha vida!<br /><br />

                      Lembro de pedir uma vaga para vocês antes da prova prática do revalida 2021. Tamanho era meu medo de não ter uma correção honesta. Quando saiu o resultado, foi o que eu esperava… Inep não me deu a pontuação que eu merecia. 
                      Deixei nas mãos do Mundo Revalida. Vocês pediram 21,95 pontos. O Inep aceitou 13,75. Mais que o suficiente para ser aprovada. 
                      Vou ser imensamente grata à equipe Mundo Revalida. 
                      Deus abençoe vocês por me permitirem ter o que era meu por direito.
                      Melhor investimento da vida!

                    </p>
      
                    <div class="name">Francine Ragagnin Pissolato</div>	
                  </div>
                </div>
              </swiper-slide>-->
      
              <swiper-slide>
                <div>
                  <div class="wrapper">
                    <p class="description">
                      Gente passei vocês são incríveis, conseguimos 12,10 pontos, precisava só 7 e vocês conseguiram o dobro.<br /><br />
                      Obrigada, gratidão a toda a equipe do mundo revalida vocês são excelentes.<br /><br />
                      Obrigada mesmo

                    </p>
      
                    <div class="name">Adiannis Serrano Matos</div>
                  </div>
                </div>
              </swiper-slide>
      
              <swiper-slide>
                <div>
                  <div class="wrapper">
                    <p class="description">
                      Obrigadooooooooooo. Foram 12 pontos, dozeeeeeeee<br /><br />
                      Aprovados graças a Deus e a vocês<br /><br />
                      Muita competênciaaa<br />
                      Muito obrigado mesmo de coração
                    </p>
      
                    <div class="name">Raul Felipe G. Silva</div>
                  </div>
                </div>
              </swiper-slide>
      
              <swiper-slide>
                <div>
                  <div class="wrapper">
                    <p class="description">
                      Aprovadaaaaa<br />
                      Muuuuuuito obrigadooo<br />
                      Vocês são D+<br />
                      11,85 pontos de recurso
                    </p>
      
                    <div class="name">Bruna Andressa da Rocha</div>
                  </div>
                </div>
              </swiper-slide>
      
              <swiper-slide>
                <div>
                  <div class="wrapper">
                    <p class="description">
                      Consegui aprovação<br /><br />
                      Muito obrigado Mundo revalida. Grande abraço<br />
                      Agradeço muito de coração pelo seu trabalho<br />
                      11,55 pontos de recurso
                    </p>
      
                    <div class="name">Walter Bruno Arroyo Bardales</div>
                  </div>
                </div>
              </swiper-slide>
      
              <swiper-slide>
                <div>
                  <div class="wrapper">
                    <p class="description">
                      Aprovei! Muito obrigada pela ajuda! Vocês são demais!
                      11,4 pontos de recurso
                    </p>
      
                    <div class="name">Dunya Valentine</div>
                  </div>
                </div>
              </swiper-slide>
      
              <swiper-slide>
                <div>
                  <div class="wrapper">
                    <p class="description">
                      Estou enviando meus agradecimentos para vocês<br /><br />
                      São nota mil<br />
                      Ganhe 11,30<br />
                      Sobrado por passar no revalida<br /><br />
                      Muito obrigado pelo trabalho de vocês!
                    </p>
      
                    <div class="name">Alexeis Israel R. Arias</div>
                  </div>
                </div>
              </swiper-slide>
      
              <swiper-slide>
                <div>
                  <div class="wrapper">
                    <p class="description">
                      Ganhamos mais 11 pontos<br /><br />
                      Obrigado pelo excelente trabalho
                      Conseguimos conquistar nossos pontos merecido
                    </p>
      
                    <div class="name">Alceu Rocha Junior</div>
                  </div>
                </div>
              </swiper-slide>
      
              <swiper-slide>
                <div>
                  <div class="wrapper">
                    <p class="description">
                      Eu aprovei! Muito obrigada!<br /><br />
                      Foram mais de 11 pontos 
                      Obrigada meus queridos! Gratidão mesmo
                    </p>
      
                    <div class="name">Izabela Souza Barbosa</div>
                  </div>
                </div>
              </swiper-slide>
      
              <swiper-slide>
                <div>
                  <div class="wrapper">
                    <p class="description">
                      Vocês são sensacionais
                      Nota subiu 11 pontos
                    </p>
      
                    <div class="name">Monica Azevedo Ramos</div>
                  </div>
                </div>
              </swiper-slide>
      
              <swiper-slide>
                <div>
                  <div class="wrapper">
                    <p class="description">
                      Passeeiiiiiii<br />
                      Grato<br />
                      10,9 pontos de recurso
                    </p>
      
                    <div class="name">Rodrigo Francisco da Silva</div>
                  </div>
                </div>
              </swiper-slide>
      
              <swiper-slide>
                <div>
                  <div class="wrapper">
                    <p class="description">
                      Ainda estou em êxtase, a ficha não caiu, quero agradecer a equipe Mundo Revalida pelo recurso, que Deus abençoe. Vencemos !!!<br /><br />
                      10,8 pontos conquistados!
                    </p>
      
                    <div class="name">Eloisia Dantas Queiroz</div>
                  </div>
                </div>
              </swiper-slide>
      
              <swiper-slide>
                <div>
                  <div class="wrapper">
                    <p class="description">
                      Conseguimos muito obrigado<br />
                      10,75 pontos de recurso
                    </p>
      
                    <div class="name">André Valiente André</div>
                  </div>
                </div>
              </swiper-slide>
      
              <swiper-slide>
                <div>
                  <div class="wrapper">
                    <p class="description">
                      Só queria agradecer vocês!!!<br />
                      10,7 pontos conquistados!
                    </p>
      
                    <div class="name">José Antony Arteaga Chavez</div>
                  </div>
                </div>
              </swiper-slide>
      
              <swiper-slide>
                <div>
                  <div class="wrapper">
                    <p class="description">
                      Gennmteeee, saiiuuu, aproveiii<br /><br />
                      Muito obrigada<br />
                      Deus e vocês foram maravilhosos<br />
                      10,5 pontos de recurso
                    </p>
      
                    <div class="name">Phamila Dias de F. Lima</div>
                  </div>
                </div>
              </swiper-slide>
      
              <swiper-slide>
                <div>
                  <div class="wrapper">
                    <p class="description">
                      Gennmteeee, saiiuuu, aproveiii<br /><br />
                      Muito obrigada<br />
                      Deus e vocês foram maravilhosos<br />
                      10,5 pontos de recurso
                    </p>
      
                    <div class="name">Ana Zumilda Gimenes</div>
                  </div>
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </section>
      </section>
    </div>
  </main>
</template>

<script>
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';

export default {
  name: 'ResourcesView',
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

<style scoped lang="scss">

</style>