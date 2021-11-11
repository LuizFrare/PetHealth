<template>
    <main>
      <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400&family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <bgCachorros />
    <ul class="breadcrumbs">
		<li class="breadcrumbs__item">
			<NuxtLink to="/" class="breadcrumbs__link" tag="a">Início</NuxtLink>
		</li>

		<li class="breadcrumbs__item">
			<a class="breadcrumbs__link"> / </a>
		</li>

		<li class="breadcrumbs__item">
			<NuxtLink to="/caes" class="breadcrumbs__link breadcrumbs__link--active">Cães</NuxtLink>
		</li>
	      </ul>
    <div class="textoInicial1">
            <p class="texto"><span class="amareloMaroto">Conheça, </span>as raças as quais trabalhamos de dedicamos todo nosso amor.</p> <p class="texto"> É impossível não cair de amor por essas fofurinhas!</p>
          </div>
          <div class="textoInicial1">
            <p class="texto"><span class="amareloMaroto">Husky Siberiano, </span>o cachorro da neve!</p>
          </div>
      <husky/>
      <div class="textoInicial">
            <p class="texto"><span class="amareloMaroto">Buldogue francês, </span>o tranquilo companheiro!</p>
          </div>
      <bfrances/>
      <div class="textoInicial">
            <p class="texto"><span class="amareloMaroto">Splitz-alemão, </span>o pequeno abundante!</p>
          </div>
          <splitz/>
      <redes/>
  </main>
</template>

<style scoped>
.textoInicial{
    margin-top: -2rem;
}

.breadcrumbs__link:hover{
	text-decoration: underline;
  color:#ffaf00;
}

.breadcrumbs__link--active{
	color:#ffaf00;
	font-weight: 500;
	line-height: 1.7;
	font-weight: bolder;
}


</style>