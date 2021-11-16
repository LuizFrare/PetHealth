<template>
    <div>
          <div class="textoInicial">
            <p class="texto"><span class="azulMaroto">{{ $t("examspage.textblue2") }}</span> {{ $t("examspage.text6") }}</p>
            <p class="texto">{{ $t("examspage.text7") }}</p>
             <p class="texto"> {{ $t("examspage.text8") }}</p>
          </div>
          <div class="imagem1">
            <img :src="require(`~/static/img/vacina.jpg`)" alt="Laboratório">
        </div>
        </div>
</template>

<style scoped>
img{
    width: 60rem;
    border-radius: 5px 40px 5px 20px;
}

.imagem1{
    display: flex;
    justify-content: center;
}

</style>