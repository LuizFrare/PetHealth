<template> 
    <div>
        <div class="imagem1">
            <img :src="require(`~/assets/img/lab1.jpg`)" alt="Laboratório">
        </div>
        <div class="backdivBlueCima">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319"><path fill="#0097ff" fill-opacity="1" d="M0,224L48,229.3C96,235,192,245,288,224C384,203,480,149,576,138.7C672,128,768,160,864,181.3C960,203,1056,213,1152,208C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </div>
        <div class="backdivBlue">
            <p class="texto  white">Oferecemos diversos exames <span class="amareloMaroto">laboratoriais, incluindo</span> Biologia Molecular, Bioquímica, Citologias, Dermatologia, Fezes, Hematologia,</p>
            <p class="texto  white">Hormônios, Líquidos Cavitários, Microbiologia, Patologia, Sorologias e Urina</p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319"><path fill="#fff" fill-opacity="1" d="M0,224L48,218.7C96,213,192,203,288,213.3C384,224,480,256,576,250.7C672,245,768,203,864,186.7C960,171,1056,181,1152,186.7C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </div>
        <div class="imagem1">
            <img :src="require(`~/assets/img/lab2.jpg`)" alt="Laboratório" style="margin-top: -1rem;">
        </div>
    </div>
</template>

<style scoped>
img{
    width: 60rem;
    border-radius: 5px 40px 5px 20px;
}

.espaçamento{
    margin-top: 3rem;
}

.espaçamentoB{
     margin-bottom: 3rem;
}

.imagem1{
    display: flex;
    justify-content: center;
}

.backdivBlue{
    background: #0097ff;
    text-align: center;
}

.backdivBlue p {
    margin: 0 5rem 0 5rem;
}

.backdivBlue svg{
    display: block;
}

.white{
    color:#fff;
}

.backdivBlueCima{
    background: #fff;
    margin-top: -6rem;
}

.amareloMaroto{
    color:#ffaf00;
    font-weight: bolder;
}

@media (max-width: 768px)
{
 .backdivBlue{
    margin-bottom: 6rem;
} 

.backdivBlueCima{
    margin-top: 1rem;
}
}


</style>