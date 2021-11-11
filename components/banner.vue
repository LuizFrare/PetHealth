<template>
    <div class="row">
     <div class="col-sm-6 banner-vantagens" >
     </div>
      <div class="col-sm-6 texto-vantagens" >
     <br><h2 data-aos="fade-left" class="Meio">{{ $t("banner1.text1") }}<br>{{ $t("banner1.text2") }}<br>{{ $t("banner1.text3") }}</h2><br>
        <h5 data-aos="fade-left" class="Meio">{{ $t("banner1.text4") }}</h5>
            <p data-aos="fade-right">{{ $t("banner1.text5") }}</p><br>
        <h5 data-aos="fade-left" class="Meio">{{ $t("banner1.text6") }}</h5>
            <p data-aos="fade-right">{{ $t("banner1.text7") }}</p><br>
        <h5 data-aos="fade-left" class=" Meio">{{ $t("banner1.text8") }}</h5>
            <p data-aos="fade-right" >{{ $t("banner1.text9") }}</p><br>
        <h5 data-aos="fade-left" class=" Meio">{{ $t("banner1.text10") }}</h5>
            <p data-aos="fade-right" >{{ $t("banner1.text11") }}</p><br>
    </div>
 </div>
</template>

<style scoped>
/*banner vantagens do plano*/
.banner-vantagens{
background-image: url("~/static/img/rosachoque.jpg");
background-size: cover;
background-repeat: no-repeat;
display: flex;
margin-bottom: 5em;
justify-content: center;
}

.texto-vantagens{
background:linear-gradient(to right, #fea63c , #e77f00);
padding: 10 10 10 10;
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

.texto-vantagens{
background:linear-gradient(to right, #fea63c , #e77f00);
padding: 20 20 20 20;
color: white;
background-size: cover;
background-repeat: no-repeat;
margin-bottom: 5em;
justify-content: center;
margin-left: 15px;
margin-right: 15px;
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