<template> 
    <div>
        <div class="imagem1">
            <img :src="require(`~/assets/img/lab1.jpg`)" alt="Laboratório">
        </div>
        <div>
            <p class="texto espaçamento">Oferecemos diversos exames <span class="azulMaroto">laboratoriais, incluindo</span> Biologia Molecular, Bioquímica, Citologias, Dermatologia, Fezes, Hematologia,</p>
            <p class="texto">Hormônios, Líquidos Cavitários, Microbiologia, Patologia, Sorologias e Urina</p>
        </div>
    </div>
</template>

<style scoped>
img{
    width: 60rem;
}

.espaçamento{
    margin-top: 3rem;
}

.imagem1{
    display: flex;
    justify-content: center;
}

</style>