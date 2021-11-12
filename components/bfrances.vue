<template>
    <div class="row">
        <div class="col-sm-6 banner-vantagens" ></div>
        <div class="col-sm-6 texto-vantagens" >
            <div class="imgradial">
            <img data-aos="fade-in" class="caozinho" src="~/static/img/bfrancesr.jpg">
            </div>
     <br><h2 data-aos="fade-left">{{ $t("dogspage.bannerbuldogue.text1") }}<br>{{ $t("dogspage.bannerbuldogue.text2") }}</h2><br>
        <h5 data-aos="fade-right" class="Meio">{{ $t("dogspage.bannerbuldogue.text3") }}</h5>
            <p data-aos="fade-left">{{ $t("dogspage.bannerbuldogue.text4") }}</p><br>
        <h5 data-aos="fade-right" class="Meio">{{ $t("dogspage.bannerbuldogue.text5") }}</h5>
            <p data-aos="fade-left">{{ $t("dogspage.bannerbuldogue.text6") }}</p><br>
        <h5 data-aos="fade-right" class="Meio">{{ $t("dogspage.bannerbuldogue.text7") }}</h5>
            <p data-aos="fade-left">{{ $t("dogspage.bannerbuldogue.text8") }}</p><br>
    </div>
 </div>
</template>

<style scoped>
/*banner vantagens do plano*/
.banner-vantagens{
background-image: url("~/static/img/bfrances.jpg");
background-size: cover;
background-repeat: no-repeat;
display: flex;
margin-bottom: 5em;
justify-content: center;
}

.texto-vantagens{
background: linear-gradient(317deg, rgba(255,179,181,1) 0%, rgba(174,26,118,1) 100%);
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