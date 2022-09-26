<template>
<footer id="footer">
	<div class="alignment">

		<a href="" class="logotipo">
			<img src="../../assets/images/logotipo.png" alt="" border="0" />
		</a>
		
		<div class="navbar">
			<ul>
				<li><a href="/#courses">Cursos</a></li>
				<li><a href="/#resources">Recursos</a></li>
				<li><a href="/#testimonials">Depoimentos</a></li>
				<li><router-link to="/contato">Contato</router-link></li>
			</ul>
		</div>

		<div class="social">
			<ul>
				<li>
					<a href="https://www.instagram.com/mundorevalida/" target="_blank"><i class="fab fa-instagram"></i> /mundorevalida</a>
				</li>
				<li>
					<a href="https://www.youtube.com/channel/UCzAW9UlngEW0GSRSVqG8nzA" target="_blank"><i class="fab fa-youtube"></i> /mundorevalida</a>
				</li>
				<li>
					<a href="https://wa.me/5511914297094" target="_blank"><i class="fab fa-whatsapp"></i> +55 11 91429.7094</a>
				</li>
				<li>
					<a href="mailto:educacao@mundorevalida.com.br"><i class="fas fa-envelope"></i> educacao@mundorevalida.com.br</a>
				</li>
			</ul>
		</div>

		<div class="copyright">
			&copy; 2022, Mundo Revalida
		</div>

	</div>
</footer>
</template>

<script>
export default {
  name: 'StructureFooter',
  props: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>