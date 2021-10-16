<template>
    <div class="row">
     <div class="col-sm-6 banner-vantagens" >
     </div>
      <div class="col-sm-6 texto-vantagens" >
     <br><h2 data-anime="left" class="animate">Quais as vantagens de ter<br>um de nossos planos de saúde<br>para pets?</h2><br>
        <p data-anime="right" class="animate Meio">+Preço igual pra todo mundo!</p>
            <p data-anime="left" class="animate">Nossa política de preços para os planos de saúde é garantir o mesmo valor, para a mesma cobertura pet, independente do porte ou raça.</p><br>
        <p data-anime="right" class="animate Meio">+Seu pet de carteirinha eletrônica.
            <p data-anime="left" class="animate">Não é obrigatório que seu pet tenha microchip, afinal não serve como localizador e nós consideramos como um procedimento invasivo. Nosso processo de identificação é todo digital.</p><br>
        <p data-anime="right" class="animate Meio">+Emergência 24hrs</p>
            <p data-anime="left" class="animate">Contratando nossos planos, todos contam com cobertura de atendimento para urgência e emergência 24 horas por dias, em todo Brasil</p><br>
        <p data-anime="right" class="animate Meio">+Cobertura completa, nacional!</p>
            <p data-anime="left" class="animate">Independente do plano contratado, seu pet tem cobertura nacional e a Internacional*, na modalidade de Reembolso.</p><br>
    </div>
 </div>
</template>

<style scoped>
/*banner vantagens do plano*/
.banner-vantagens{
background-image: url("~/assets/img/rosachoque.jpg");
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