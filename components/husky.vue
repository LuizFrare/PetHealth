<template>
    <div class="row">
        <div class="col-sm-6 texto-vantagens" >
     <br><h2 data-aos="fade-left">Quais as principais características<br>dos Huskys Siberianos?</h2><br>
        <h5 data-aos="fade-right" class="Meio">Peso </h5>
            <p data-aos="fade-left">Um exemplar adulto pode chegar a cerca de 28 quilogramas.</p><br>
        <h5 data-aos="fade-right" class="Meio">Expectativa de vida:</h5>
            <p data-aos="fade-left">Geralmente esses doguinhos vivem 15 anos.</p><br>
        <h5 data-aos="fade-right" class="Meio">Fácil de cuidar?</h5>
            <p data-aos="fade-left">Essa raça possui um porte de tamanho enorme, ideal para sítios e casas com quintais extensos.</p><br>
    </div>
    <div class="col-sm-6 banner-vantagens" ></div>
 </div>
</template>

<style scoped>
/*banner vantagens do plano*/
.banner-vantagens{
background-image: url("~/assets/img/husky.jpg");
background-size: cover;
background-repeat: no-repeat;
display: flex;
margin-bottom: 5em;
justify-content: center;
}

.texto-vantagens{
background: linear-gradient(135deg, rgba(254,83,149,1) 0%, rgba(128,1,220,1) 100%);
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