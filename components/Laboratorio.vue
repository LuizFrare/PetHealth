<template> 
    <div>
        <div class="imagem1">
            <img :src="require(`~/assets/img/azulbb.jpg`)" alt="Laboratório">
        </div>
        <div>
            <p class="texto">Oferecemos diversos exames <span class="azulMaroto">laboratoriais, incluindo</span> Biologia Molecular, Bioquímica, Citologias, Dermatologia, Fezes, Hematologia,</p>
            <p class="texto">Hormônios, Líquidos Cavitários, Microbiologia, Patologia, Sorologias e Urina</p>
        </div>
    </div>
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