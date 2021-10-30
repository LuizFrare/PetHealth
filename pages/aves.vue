<template>
    <main>
      <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400&family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <cabecalho/>
    <bgAves />
    <ul class="breadcrumbs">
		<li class="breadcrumbs__item">
			<NuxtLink to="/" class="breadcrumbs__link" tag="a">Início</NuxtLink>
		</li>

		<li class="breadcrumbs__item">
			<a class="breadcrumbs__link"> / </a>
		</li>

		<li class="breadcrumbs__item">
			<NuxtLink to="/aves" class="breadcrumbs__link breadcrumbs__link--active">Aves</NuxtLink>
		</li>
	      </ul>
          <div class="textoInicial">
            <p class="texto"><span class="vermelhoMaroto">Cuidamos de aves, </span>de todos os tipos!</p>
            <p class="texto">Não podemos negar o fato de que cada vez mais pessoas escolhem amigos de penas para serem seus Pets de estimação,</p>
            <p class="texto">sobretudo, essa relação afetiva é muito intensa e verdadeira.</p>
          </div>
      <aves/>
      <redes/>
      <rodape/>
  </main>
</template>

<style scoped>
.breadcrumbs__link:hover{
	text-decoration: underline;
  color:#e31962;
}

.breadcrumbs__link--active{
	color:#e31962;
	font-weight: 500;
	line-height: 1.7;
	font-weight: bolder;
}

.vermelhoMaroto{
  color:#e31962;
  font-weight: bold;
}
</style>