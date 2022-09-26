<template>
  <section class="component_doubts">
    <h1>Perguntas frequentes</h1>
    <h2>Preparamos uma lista de principais dúvidas<br /> para te ajudar a entender</h2>

    <ul>
      <li>
        <div class="title">#1 - Este pode ser o título da primeira pergunta desta seção?</div>
        <div class="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt viverra felis pellentesque aliquet. Etiam id rutrum purus. Integer scelerisque facilisis ipsum id facilisis. Donec efficitur pretium nulla, quis imperdiet justo auctor vitae. Pellentesque faucibus mauris quis nunc efficitur efficitur. Sed turpis lacus, tempus scelerisque.
        </div>
      </li>
      <li>
        <div class="title">#2 - Aqui vai mais um título para uma Segunda pergunta?</div>
        <div class="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt viverra felis pellentesque aliquet. Etiam id rutrum purus. Integer scelerisque facilisis ipsum id facilisis. Donec efficitur pretium nulla, quis imperdiet justo auctor vitae. Pellentesque faucibus mauris quis nunc efficitur efficitur. Sed turpis lacus, tempus scelerisque.
        </div>
      </li>
      <li>
        <div class="title">#3 - Temos um box exemplo para uma pergunta aberta?</div>
        <div class="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt viverra felis pellentesque aliquet. Etiam id rutrum purus. Integer scelerisque facilisis ipsum id facilisis. Donec efficitur pretium nulla, quis imperdiet justo auctor vitae. Pellentesque faucibus mauris quis nunc efficitur efficitur. Sed turpis lacus, tempus scelerisque.
        </div>
      </li>
      <li>
        <div class="title">#4 - Aqui pode ser mais um box de pergunta?</div>
        <div class="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt viverra felis pellentesque aliquet. Etiam id rutrum purus. Integer scelerisque facilisis ipsum id facilisis. Donec efficitur pretium nulla, quis imperdiet justo auctor vitae. Pellentesque faucibus mauris quis nunc efficitur efficitur. Sed turpis lacus, tempus scelerisque.
        </div>
      </li>
      <li>
        <div class="title">#5 - Essa seção é responsável por tirar principais dúvidas?</div>
        <div class="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt viverra felis pellentesque aliquet. Etiam id rutrum purus. Integer scelerisque facilisis ipsum id facilisis. Donec efficitur pretium nulla, quis imperdiet justo auctor vitae. Pellentesque faucibus mauris quis nunc efficitur efficitur. Sed turpis lacus, tempus scelerisque.
        </div>
      </li>
    </ul>

    <div class="wrapper">
      <div class="description">
        <strong>Sua dúvida não foi respondida aqui?</strong>

        <strong>Clique no botão ao lado</strong> e mande sua dúvida pra gente!
        Teremos o maior prazer em respondê-lo.
      </div>

      <a href="" class="global_cta">Tenha uma dúvida</a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Doubts',
  props: {
    
  },
  mounted () {
    if ( $('.component_doubts ul li').length ) {
      $(document).on('click', '.component_doubts ul li .title', function() {
      
        $(this).closest('.component_doubts ul li .title').toggleClass('active')
        $(this).next('.component_doubts ul li .description').toggle(250)

      }); 
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>