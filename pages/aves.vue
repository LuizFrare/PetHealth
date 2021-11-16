<template>
    <main>
      <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400&family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <bgAves />
    <ul class="breadcrumbs">
		<li class="breadcrumbs__item">
			<NuxtLink to="/" class="breadcrumbs__link" tag="a">{{ $t("menu.home") }}</NuxtLink>
		</li>

		<li class="breadcrumbs__item">
			<a class="breadcrumbs__link"> / </a>
		</li>

		<li class="breadcrumbs__item">
			<NuxtLink to="/aves" class="breadcrumbs__link breadcrumbs__link--active">{{ $t("footer.specialties.birds") }}</NuxtLink>
		</li>
	      </ul>
          <div class="textoInicial">
            <p class="texto"><span class="vermelhoMaroto">{{ $t("birdpage.pinktext") }} </span>{{ $t("birdpage.text1") }}</p>
            <p class="texto">{{ $t("birdpage.text2") }}</p>
            <p class="texto">{{ $t("birdpage.text3") }}</p>
          </div>
      <aves/>
      <redes/>
      <top/>
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