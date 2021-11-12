<template> 
    <main>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400&family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <bgExames />
     <ul class="breadcrumbs">
		<li class="breadcrumbs__item">
			<NuxtLink to="/" class="breadcrumbs__link" tag="a">{{ $t("menu.home") }}</NuxtLink>
		</li>

		<li class="breadcrumbs__item">
			<a class="breadcrumbs__link"> / </a>
		</li>

		<li class="breadcrumbs__item">
			<NuxtLink to="/contato" class="breadcrumbs__link breadcrumbs__link--active">{{ $t("menu.exams") }}</NuxtLink>
		</li>
	      </ul>
    <div class="textoInicial">
            <p class="texto"><span class="azulMaroto">{{ $t("examspage.textblue") }} </span>{{ $t("examspage.text1") }}</p> <p class="texto"> {{ $t("examspage.text2") }}
            </p>
        </div>
        <Laboratorio/>
        <Vacinas/>
      <redes/>
  </main>
</template>

<style scoped>
img{
    width: 60rem;
}

.imagem1{
    display: flex;
    justify-content: center;
}

.breadcrumbs__link:hover{
	text-decoration: underline;
    color:#d10151;
}

.breadcrumbs__link--active{
	color:#d10151;
	font-weight: 500;
	line-height: 1.7;
	font-weight: bolder;
}
</style>