<template>
    <div class="row">
        <div class="col-sm-6 texto-vantagens" >
     <br><h2 data-aos="fade-left" class="">Quais as principais características<br>dos Persas?</h2><br>
        <h5 data-aos="fade-right" class=" Meio">Peso</h5>
            <p data-aos="fade-left" class="">Um exemplar adulto pode chegar entre 3 e 7 quilogramas.</p><br>
        <h5 data-aos="fade-right" class=" Meio">Expectativa de vida:</h5>
            <p data-aos="fade-left" class="">Geralmente esses felinos vivem de 10 a 15 anos.</p><br>
        <h5 data-aos="fade-right" class=" Meio">Fácil de cuidar?</h5>
            <p data-aos="fade-left" class="">Essa raça é bem carinhosa e meiga, sendo uma ótima opção para qualquer lar.</p><br>
    </div>
     <div class="col-sm-6 banner-vantagens" >
     </div>
 </div>
</template>

<style scoped>
span{
    margin-bottom:2rem;
}
/*banner vantagens do plano*/
.banner-vantagens{
background-image: url("~/static/img/persa.jpg");
background-size: cover;
background-repeat: no-repeat;
display: flex;
margin-bottom: 5em;
justify-content: center;
}

.texto-vantagens{
background: linear-gradient(176deg, rgba(57,133,228,1) 0%, #00fff8 100%);
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