<template>
    <div class="row">
     <div class="col-sm-6 banner-vantagens" >
     </div>
      <div class="col-sm-6 texto-vantagens" >
     <br><h2 data-aos="fade-left">A Clínica PetHealth existe,  <br>porque acreditamos na<br> MedicinaVeterinária de Aves!</h2><br>
        <p data-aos="fade-right" class="Meio">Medicina Preventiva</p>
            <p data-aos="fade-left">A melhor maneira de manter sua Ave Pet sempre saudável é através de uma CONSULTA VETERINÁRIA PREVENTIVA.</p><br>
        <p data-aos="fade-right" class="Meio">Coleta de Sangue e Contenção Física Especiais
            <p data-aos="fade-left">Nossa equipe desenvolveu uma técnicas de coleta de sangue e contenção física minimamente estressante para aves muito rápida. Desta forma poupamos o enorme estresse provocado por uma contenção física demorada e inadequada e obtemos uma mostra sanguínea com reduzidas alterações,</p><br>
        <p data-aos="fade-right" class="Meio">Hospedagem</p>
            <p data-aos="fade-left">Agora você poderá viajar tranquilo e aproveitar bastante o seu passeio, sem ficar preocupado com seu amigo de penas. Oferecemos o serviço exclusivo de hospedagem para aves.</p><br>
    </div>
 </div>
</template>

<style scoped>
/*banner vantagens do plano*/
.banner-vantagens{
background-image: url("~/assets/img/calopsita.jpg");
background-size: cover;
background-repeat: no-repeat;
display: flex;
margin-bottom: 5em;
justify-content: center;
}

.texto-vantagens{
background: linear-gradient(170deg, rgba(232,136,184,1) 0%, rgba(221,96,111,1) 88%);
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