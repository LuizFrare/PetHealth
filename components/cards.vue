<template>
    <section class="titulo">
        <h2 style="margin-bottom:3em; font-weight: bold;">Cuidamos de todos!</h2>
        <div class="category">
            <div data-aos="fade-up" class="category-1 animate" data-anime="up">
                <div class="imgInformation background-green">
                    <img class="imagemInfDog" :src="require(`~/assets/img/dog.png`)">
                </div>
                <div class="containerInformation">
                    <h5 class="greenText" style="padding-top: 4%;">Cachorros</h5>
                    <div class="information">
                        <div class="line"></div>
                        <p class="textoCard">Nosssa clínica é a única do Brasil com Certificação Internacional de Dog Walker, Dog Sitter e Primeiros Socorros para cães. Com profissionais qualificados e equipamentos de última geração, garantimos amor e acolhimento ao seu companheiro.</p>
                        <button class="buttonInformation borderGreen greenText"><NuxtLink class="greenText" to="/caes">Saiba Mais</NuxtLink></button>
                        <div class="totalLine"></div>
                    </div>
                </div>
            </div>
            <div class="category-1 animate" data-anime="up">
                <div class="imgInformation background-purple">
                    <img class="imagemInf" :src="require(`~/assets/img/cat.png`)">
                </div>
                <div class="containerInformation">
                    <h5 class="purpleText" style="padding-top: 4%;">Gatos</h5>
                    <div class="information">
                        <div class="line"></div>
                        <p class="textoCard">Nós somos especialistas em cuidar do seu gato. Com uma equipe treinada e especializada em comportamento e medicina felina, nós somos a sua melhor opção para manter o bem estar do seu amiguinho.</p>
                        <button class="buttonInformation2 borderPurple purpleText"><NuxtLink class="purpleText" to="/gatos">Saiba Mais</NuxtLink></button>
                        <div class="totalLine"></div>
                    </div>
                </div>
            </div>
            <div class="category-1 animate" data-anime="up">
                <div class="imgInformation background-pink">
                    <img class="imagemInf marginPc" :src="require(`~/assets/img/bird.png`)">
                </div>
                <div class="containerInformation">
                    <h5 class="pinkText" style="padding-top: 4%;">Aves</h5>
                    <div class="information">
                        <div class="line"></div>
                        <p class="textoCard">Oferecemos um serviço diferenciado para atendimento de Aves Pet, com profissionais especializados com anos de experiência, bem como um local preparado para as suas necessidades, com a finalidade de prover o máximo de acolhimento</p>
                        <button class="buttonInformation3 borderPink pinkText"><NuxtLink class="pinkText" to="/aves">Saiba Mais</NuxtLink></button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
/*cards*/
a{
  text-decoration: none;
}

button a:hover{
  color:white
}

.card{
display: flex;
width: 40em;
height: 10em;
align-items: center;
color: white;
}

.imagemCard{
width: 5em;
height: 5em;
margin-left: 2em;
margin-top: 1.5em;
min-width: 32px;
min-height: 32px;
}

.textContent{
text-align: left;
margin-right: 2em;
margin-left: 2em;
font-family: "Nunito";
font-size: 16px;
}

.titulo{
display: block;
color:#0089c9;
margin:1em 10em;
height: auto;
text-align: center;
width: auto;
font-family: "Nunito";
}

.category{
display: flex;
margin-bottom: 7em;
}

.line{
width: 4em;
background-color:#DEDEDE;
height: 0.3em;
margin: 1em auto;
}

.textoCard{
font-weight:600;
}

.category-1{
margin: 0 3em;
font-family: "Nunito";
font-size: 0.95em;
color: #7E7E7E;
}

.greenText{
color:#88ac33;
font-weight: bold;
}

.purpleText{
color: #4c09e4;
font-weight: bold;
}

.pinkText{
color: #95093b;
font-weight: bold;
}

.background-green{
background:linear-gradient(to right, #b2d55f , #88ac33)
}

.background-pink{
background:linear-gradient(to right, #e31962 , #95093b)
}

.background-purple{
background:linear-gradient(to right, #9139dc , #4c09e4)
}

.imgInformation{
height: 10em;
border-radius: 1000px;
width:  10em;
margin: 0 auto;
}

.imagemInf{
width: 50%;
height: auto;
margin: 3em auto;
}

.imagemInfDog{
width: 50%;
height: auto;
margin: 2.5em auto;
}

.marginPc{
margin-top: 2.8em;
}

.totalLine{
background-color:#DEDEDE;
width: 100%;
height: 0.3em;
display: none;
}

.buttonInformation{
margin-top: 2.5em;
width: 8em;
height: 2.5em;
background-color: #FFFFFF;
border:none;
font-family: "Nunito";
cursor: pointer;
}

.buttonInformation:hover{
margin-top: 2.5em;
width: 8em;
height: 2.5em;
background:linear-gradient(to right, #b2d55f , #88ac33);
color: white;
border:none;
font-family: "Nunito";
cursor: pointer;
transition: all .5s ease;
}

.buttonInformation2{
margin-top: 2.5em;
width: 8em;
height: 2.5em;
background-color: #FFFFFF;
border:none;
font-family: "Nunito";
cursor: pointer;
}

.buttonInformation2:hover{
margin-top: 2.5em;
width: 8em;
height: 2.5em;
background:linear-gradient(to right, #9139dc , #4c09e4);
color: white;
border:none;
font-family: "Nunito";
cursor: pointer;
transition: all .5s ease;
}

.buttonInformation3{
margin-top: 2.5em;
width: 8em;
height: 2.5em;
background-color: #FFFFFF;
border:none;
font-family: "Nunito";
cursor: pointer;
}

.buttonInformation3:hover{
margin-top: 2.5em;
width: 8em;
height: 2.5em;
background:linear-gradient(to right, #e31962 , #95093b);
color: white;
border:none;
font-family: "Nunito";
cursor: pointer;
transition: all .5s ease;
}

.borderGreen{
border-radius: 5px 10px 5px 20px;
border: 3px solid;
border-image: linear-gradient(45deg, #b2d55f , #88ac33) border-box;
}

.borderPurple{
border-radius: 5px 10px 5px 20px;
border: 3px solid;
border-image: linear-gradient(45deg, #9139dc , #4c09e4) border-box;
}

.borderPink{
border-radius: 5px 10px 5px 20px;
border: 3px solid;
border-image: linear-gradient(45deg, #e31962 , #95093b) border-box;
}

@media (max-width: 1000px)
{
html{
    font-size: 95%;
}
.item{
    font-size: 1.1em;
}

.imagemInf{
  margin-top: 3em;
}

.imagemInfDog{
  margin-top: 1.9em;
}
}

@media (max-width: 880px)
{
.containerLetters{
  display: block;
  width: auto;
  margin:0 5em;
  padding-top:5em;
  text-align: center;
}

.element{
  margin:5em 5em;
}

.containerLetters{
  display: block;
  width: auto;
  margin:0 5em;
  padding-top:5em;
  text-align: center;
}
  .titulo{
    margin: 5em;
  }
  .category{
    display: block;
  }
  .line{
    display: none;
  }
  .totalLine{
    margin-top: 3em;
    display: block;
  }
  .category-1{
    display: flex;
    flex-direction: row-reverse;
    font-size: 1.5em;
  }
  .containerInformation{
    text-align: center;
  }
  
.imgInformation{
    align-self: center;
    max-width: 100px;
    max-height: 100px;
    min-width: 100px;
    min-height: 100px;
    margin-bottom: 5em;
  }

.greenText{
font-size: 1.2em;
}

.purpleText{
font-size: 1.2em;
}

.pinkText{
font-size: 1.2em;
}

  .card{
    width: 100%;
    min-width: 30em;
    height: 17em;
  }

  .textContent{
    font-size: 12px;
  }

  .imagemInf{
    margin-top: 1.8em;
  }

  .imagemInfDog{
    margin-top: 1.5em;
  }

  .marginPc{
    margin-top: 1.8em;
  }

  .buttonInformation{
    margin-top:1.5em;
  }
}
</style>