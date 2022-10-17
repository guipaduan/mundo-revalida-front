<template>
  <section class="component_doubts">
    <h1>Perguntas frequentes</h1>
    <h2>Preparamos uma lista de principais dúvidas<br /> para te ajudar a entender</h2>

    <ul>
      <li>
        <div class="title" @click="accordion($event)">O que é o Revalida?</div>
        <div class="description">
          <p>O Revalida subsidia o processo de revalidação dos diplomas de médicos que se formaram no exterior e querem atuar no Brasil. O exame é direcionado tanto aos estrangeiros formados em medicina fora do Brasil quanto aos brasileiros que se graduaram em outro país e querem exercer a profissão no país.</p>
          <p>O processo avaliativo é dividido em duas etapas eliminatórias aplicadas em momentos distintos, sendo elas:</p>
          <p>- Primeira fase: Prova Objetiva e Prova Discursiva</p>
          <p>- Segunda fase: Prova Prática, de habilidades clínicas</p>
          <p>A aprovação nas duas etapas é um demonstrativo da competência técnica (teórica e prática) do médico graduado para o exercício profissional no Brasil.</p>
        </div>
      </li>
      <li>
        <div class="title" @click="accordion($event)">Quantas vezes por ano tem o Revalida?</div>
        <div class="description">
          <p>O Revalida pelo INEP tem duas vezes por ano, sendo que o primeiro costuma se iniciar em março e finalizar em setembro, e o segundo se inicia em agosto e finaliza em março.</p>
        </div>
      </li>
      <li>
        <div class="title" @click="accordion($event)">Como é a Primeira Fase do Revalida?</div>
        <div class="description">
          <p>A Primeira Fase geralmente ocorre no domingo, e são duas provas no mesmo dia.</p>
          <p>No período da manhã, usualmente das 8 às 13 horas, ocorre a Prova Objetiva composta por 100 testes, sendo que cada questão vale um ponto.</p>
          <p>No período da tarde, usualmente das 15:30 às 19:30, ocorre a Prova Discursiva, composta por 5 questões, sendo que cada questão vale 10 pontos.</p>
          <p>A somatória das duas provas totaliza 150 pontos, e a nota é variável e depende do edital vigente.</p>
        </div>
      </li>
      <li>
        <div class="title" @click="accordion($event)">Como é a Segunda Fase do Revalida?</div>
        <div class="description">
          <p>A Segunda Fase é a prova de habilidades clínicas, com aplicação prática, composta por 10 estações simuladas, com duração de 10 minutos cada.</p>
          <p>A prova é dividida em cinco estações no sábado e cinco estações no domingo, sendo duas estações de cada grande área.</p>
          <p>Todas estações práticas são simulações em consultório médico, ou atendimento de emergência.</p>
        </div>
      </li>
    </ul>

    <div class="wrapper">
      <div class="description">
        <strong>Sua dúvida não foi respondida aqui?</strong>

        <strong>Clique no botão ao lado</strong> e mande sua dúvida pra gente!
        Teremos o maior prazer em respondê-lo.
      </div>

      <router-link :to="{name: 'contact'}" class="global_cta">
        Tenho uma dúvida
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Doubts',
  props: {
    
  },

  methods: {
    accordion(element) {
      $(element.target).closest('.component_doubts ul li .title').toggleClass('active')
      $(element.target).next('.component_doubts ul li .description').toggle(250)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>