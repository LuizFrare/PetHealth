<template>
    <main>
      <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400&family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <bgGatos />
    <ul class="breadcrumbs">
		<li class="breadcrumbs__item">
			<NuxtLink to="/" class="breadcrumbs__link" tag="a">{{ $t("menu.home") }}</NuxtLink>
		</li>

		<li class="breadcrumbs__item">
			<a class="breadcrumbs__link"> / </a>
		</li>

		<li class="breadcrumbs__item">
			<NuxtLink to="/gatos" class="breadcrumbs__link breadcrumbs__link--active">{{ $t("menu.cat") }}</NuxtLink>
		</li>
	      </ul>
    <div class="textoInicial1">
            <p class="texto"><span class="roxoMaroto">{{ $t("catspage.purpletext") }} </span>{{ $t("catspage.text1") }}</p> <p class="texto"> {{ $t("catspage.text2") }}</p>
    </div>
          <div class="textoInicial1">
            <p class="texto"><span class="roxoMaroto">{{ $t("catspage.purpletext2") }} </span>{{ $t("catspage.text3") }}</p>
          </div>
      <GatosPersa id="persa"/>
      <div class="textoInicial">
            <p class="texto"><span class="roxoMaroto">{{ $t("catspage.purpletext3") }} </span>{{ $t("catspage.text4") }}</p>
          </div>
      <GatosMaine/>
      <div class="textoInicial">
            <p class="texto"><span class="roxoMaroto">{{ $t("catspage.purpletext4") }} </span>{{ $t("catspage.text5") }}</p>
          </div>
      <GatosRagdoll/>
        <redes/>
        <top/>
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

@media (max-width: 575px)
{
.breadcrumbs{
	font-size: 1.3rem;
}

.breadcrumbs__item{
	font-size: 1.3rem;
}
.breadcrumbs__link--active{
	font-size: 1.3rem;
}
}
</style>