<template>
    <main>
      <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400&family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <bgGatos />
    <ul class="breadcrumbs">
		<li class="breadcrumbs__item">
			<NuxtLink to="/" class="breadcrumbs__link" tag="a">Início</NuxtLink>
		</li>

		<li class="breadcrumbs__item">
			<a class="breadcrumbs__link"> / </a>
		</li>

		<li class="breadcrumbs__item">
			<NuxtLink to="/gatos" class="breadcrumbs__link breadcrumbs__link--active">Gatos</NuxtLink>
		</li>
	      </ul>
    <div class="textoInicial1">
            <p class="texto"><span class="roxoMaroto">Conheça, </span>as raças as quais trabalhamos de dedicamos todo nosso amor.</p> <p class="texto"> É impossível não cair de amor por essas fofurinhas!</p>
    </div>
          <div class="textoInicial1">
            <p class="texto"><span class="roxoMaroto">Persa, </span>o encantador peludinho!</p>
          </div>
      <persa/>
      <div class="textoInicial">
            <p class="texto"><span class="roxoMaroto">Maine-coon, </span>o gigante carinhoso!</p>
          </div>
      <maine/>
      <div class="textoInicial">
            <p class="texto"><span class="roxoMaroto">Ragdoll, </span>os amáveis de colo!</p>
          </div>
          <ragdoll/>
          <redes/>
  </main>
</template>

<style scoped>
.textoInicial{
    margin-top: -2rem;
}

.breadcrumbs__link:hover{
	text-decoration: underline;
  color:#4c09e4;
}

.breadcrumbs__link--active{
	color:#4c09e4;
	font-weight: 500;
	line-height: 1.7;
	font-weight: bolder;
}


</style>