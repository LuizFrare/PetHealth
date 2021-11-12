<template>
    <div class="row">
     <div class="col-sm-6 banner-vantagens" >
     </div>
      <div class="col-sm-6 texto-vantagens" >
     <br><h2 data-aos="fade-left">{{ $t("birdpage.banner1.text1") }}  <br>{{ $t("birdpage.banner1.text2") }}<br> {{ $t("birdpage.banner1.text3") }}</h2><br>
        <p data-aos="fade-right" class="Meio">{{ $t("birdpage.banner1.text4") }}</p>
            <p data-aos="fade-left">{{ $t("birdpage.banner1.text5") }}</p><br>
        <p data-aos="fade-right" class="Meio">{{ $t("birdpage.banner1.text6") }}</p>
            <p data-aos="fade-left">{{ $t("birdpage.banner1.text7") }}</p><br>
        <p data-aos="fade-right" class="Meio">{{ $t("birdpage.banner1.text8") }}</p>
            <p data-aos="fade-left">{{ $t("birdpage.banner1.text9") }}</p><br>
    </div>
 </div>
</template>

<style scoped>
/*banner vantagens do plano*/
.banner-vantagens{
background-image: url("~/static/img/calopsita.jpg");
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