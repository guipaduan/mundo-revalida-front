<template>
  <section class="component_resource_home">
    <a name="resources" />

    <h1>Recursos Individuais</h1>
    <h2>Pioneiros em elaboração de recursos</h2>
    
    <ul>
      <li>
        <div class="image">
          <img src="@/assets/images/logo_p_discursiva.png" alt="" border="0" />
        </div>

        <p class="description">
          Elaboração de recurso exclusivo<br />
          da <strong>Prova Discursiva</strong>
        </p>

        <router-link :to="{name: 'resourceDiscursiveTest'}">
          <a href="" class="global_cta global_cta_red">Saiba mais</a>
        </router-link>
        
      </li>

      <li>
        <div class="image">
          <img src="@/assets/images/logo_p_pratica.png" alt="" border="0" />
        </div>

        <p class="description">
          Elaboração de recurso exclusivo<br />
          da <strong>Prova Discursiva</strong>
        </p>

        <router-link :to="{name: 'resourcePracticleTest'}">
          <a href="" class="global_cta global_cta_red">Saiba mais</a>
        </router-link>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'HomeResourcesList',
  props: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>