<template>
    <div class="row">
        <div class="col-sm-6 texto-vantagens" >
     <br><h2 data-aos="fade-left">{{ $t("dogspage.bannersplitz.text1") }}<br>{{ $t("dogspage.bannersplitz.text2") }}</h2><br>
        <h5 data-aos="fade-right" class="Meio">{{ $t("dogspage.bannersplitz.text3") }}</h5>
            <p data-aos="fade-left">{{ $t("dogspage.bannersplitz.text4") }}</p><br>
        <h5 data-aos="fade-right" class="Meio">{{ $t("dogspage.bannersplitz.text5") }}</h5>
            <p data-aos="fade-left">{{ $t("dogspage.bannersplitz.text6") }}</p><br>
        <h5 data-aos="fade-right" class="Meio">{{ $t("dogspage.bannersplitz.text7") }}</h5>
            <p data-aos="fade-left">{{ $t("dogspage.bannersplitz.text8") }}</p><br>
    </div>
    <div class="col-sm-6 banner-vantagens" ></div>
 </div>
</template>


<style scoped>
/*banner vantagens do plano*/
.banner-vantagens{
background-image: url("~/static/img/splitz.jpg");
background-size: cover;
background-repeat: no-repeat;
display: flex;
margin-bottom: 5em;
justify-content: center;
}

.texto-vantagens{
background: linear-gradient(355deg, rgba(122,128,245,1) 0%, rgba(245,196,204,1) 100%);
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