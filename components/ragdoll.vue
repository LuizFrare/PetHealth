<template>
    <div class="row">
        <div class="col-sm-6 texto-vantagens" >
     <br><h2 data-anime="left" class="animate">Quais as principais características<br>dos Ragdolls?</h2><br>
        <p data-anime="right" class="animate Meio">Peso</p>
            <p data-anime="left" class="animate">Um exemplar adulto pode chegar a 7 quilogramas.</p><br>
        <p data-anime="right" class="animate Meio">Expectativa de vida:
            <p data-anime="left" class="animate">Geralmente esses felinos vivem de 10 a 15 anos.</p><br>
        <p data-anime="right" class="animate Meio">Fácil de cuidar?</p>
            <p data-anime="left" class="animate">Essa raça possui um porte de tamanho bem pequeno, ideal para apartamentos e casas pequenas.</p><br>
    </div>
    <div class="col-sm-6 banner-vantagens" ></div>
 </div>
</template>

<style scoped>
/*banner vantagens do plano*/
.banner-vantagens{
background-image: url("~/assets/img/ragdoll.jpg");
background-size: cover;
background-repeat: no-repeat;
display: flex;
margin-bottom: 5em;
justify-content: center;
}

.texto-vantagens{
background: linear-gradient(357deg, rgba(100,224,255,1) 0%, rgba(173,107,254,1) 88%);
padding: 5rem;
color: white;
background-size: cover;
background-repeat: no-repeat;
margin-bottom: 5em;
justify-content: center;
}

.Meio{
    font-weight: bold;
}

@media (max-width: 575px)
{
  .banner-vantagens{
    display: none;
}


.Meio{
    text-align: center;
    font-size: 1.5em;
}

p {
    text-align: center;
}

b{
    text-align: center;
    align-items: center;
}
h2{
    text-align: center;
}
}
</style>