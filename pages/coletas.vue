<template> 
    <main>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400&family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <bgExames />
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

</style>