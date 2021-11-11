<template>
    <div>
          <div class="textoInicial">
            <p class="texto"><span class="azulMaroto">Aqui na PetHealth,</span> prezamos pela saúde do seu amigão ou amigona!</p>
            <p class="texto">Venha vacinar seu bichinho aqui! Os cães e gatos adultos raramente desenvolverão doenças virais se foram vacinados e imunizados</p>
             <p class="texto"> adequadamente quando filhotes e se mantiverem a vacinação anual.</p>
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