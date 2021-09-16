<template>
    <div>
      <cabecalho/>
        <ul class="breadcrumbs">
		<li class="breadcrumbs__item">
			<NuxtLink to="/" class="breadcrumbs__link" tag="a">Início</NuxtLink>
		</li>

		<li class="breadcrumbs__item">
			<a class="breadcrumbs__link"> / </a>
		</li>

		<li class="breadcrumbs__item">
			<NuxtLink to="/" class="breadcrumbs__link breadcrumbs__link--active">Contato</NuxtLink>
		</li>
	      </ul>
      <formulario/>
        <div class="backgroundFaq">
          <p class="texto branco marginTexto">Com anos de mercado, tradição e confiança, tomamos todos os cuidados para manter sua felicidade e a do seu pet!</p>
        </div>
      <radio/>
      <redes/>
      <rodape/>  
    </div>
</template>

<style scoped>
/* Foto - Contato */
.backgroundFaq{
width: 100vw;
height: 35em;
background-image:linear-gradient(rgba(0, 0, 0, 0.479), 
#00151fa6), url("~/assets/img/contact.jpg");
background-size: cover;
background-repeat: no-repeat;
background-position-y: center;
display: flex;
margin-bottom: 5em;
justify-content: center;
}

.breadcrumbs__link:hover{
	text-decoration: underline;
  color:#01d151;
}

.breadcrumbs__link--active{
	color:#01d151;
	font-weight: 500;
	line-height: 1.7;
	font-weight: bolder;
}
</style>

<script>


</script>