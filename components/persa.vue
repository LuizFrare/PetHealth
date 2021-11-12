<template>
    <div class="row">
        <div class="col-sm-6 texto-vantagens" >
            <div class="imgradial">
            <img data-aos="fade-in" class="caozinho" src="~/static/img/persar.jpg">
            </div>
     <br><h2 data-aos="fade-left" class="">{{ $t("catspage.bannerpersian.text1") }}<br>{{ $t("catspage.bannerpersian.text2") }}</h2><br>
        <h5 data-aos="fade-right" class=" Meio">{{ $t("catspage.bannerpersian.text3") }}</h5>
            <p data-aos="fade-left" class="">{{ $t("catspage.bannerpersian.text4") }}</p><br>
        <h5 data-aos="fade-right" class=" Meio">{{ $t("catspage.bannerpersian.text5") }}</h5>
            <p data-aos="fade-left" class="">{{ $t("catspage.bannerpersian.text6") }}</p><br>
        <h5 data-aos="fade-right" class=" Meio">{{ $t("catspage.bannerpersian.text7") }}</h5>
            <p data-aos="fade-left" class="">{{ $t("catspage.bannerpersian.text8") }}</p><br>
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