<template>
    <div class="row">
        <div class="col-sm-6 texto-vantagens" >
             <div class="imgradial">
            <img data-aos="fade-in" class="caozinho" src="~/static/img/ragdollr.jpg">
            </div>
     <br><h2 data-aos="fade-left">{{ $t("catspage.bannerragdoll.text1") }}<br>{{ $t("catspage.bannerragdoll.text2") }}</h2><br>
        <h5 data-aos="fade-right" class="Meio">{{ $t("catspage.bannerragdoll.text3") }}</h5>
            <p data-aos="fade-left">{{ $t("catspage.bannerragdoll.text4") }}</p><br>
        <h5 data-aos="fade-right" class="Meio">{{ $t("catspage.bannerragdoll.text5") }}</h5>
            <p data-aos="fade-left">{{ $t("catspage.bannerragdoll.text6") }}</p><br>
        <h5 data-aos="fade-right" class="Meio">{{ $t("catspage.bannerragdoll.text7") }}</h5>
            <p data-aos="fade-left">{{ $t("catspage.bannerragdoll.text8") }}</p><br>
    </div>
    <div class="col-sm-6 banner-vantagens" ></div>
 </div>
</template>

<style scoped>
/*banner vantagens do plano*/
.banner-vantagens{
background-image: url("~/static/img/ragdoll.jpg");
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