<template>
    <main>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400&family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
        <BgHome/>
        <section class="element">
            <div class="textoInicial">
                <p class="texto">
                    <span class="azulMaroto">{{ $t("index.textblue") }}</span> {{ $t("index.texthome1") }}
                </p>
                <p class="texto">
                    {{ $t("index.texthome2") }}
                </p>
            </div>
        </section>
        <banner />
        <cards />
        <div class="background">
            <p data-aos="fade-left" class="texto branco marginTexto">
                {{ $t("index.texthome3") }}
            </p>
        </div>
        <redes />
    </main>
</template>


<style>
html {
  box-sizing: border-box;
  font-size: 100%;
  overflow-x: hidden;
}

*, *:before, *:after {
  box-sizing: inherit;
}

body, h1, h2, h3, h4, h5, h6, p, ol, ul {
  margin: 0;
  padding: 0;
  font-weight: normal;
  font-family: "Nunito";
}

ol, ul {
  list-style: none;
}

a{
  text-decoration: none;
}

img {
  max-width: 100%;
  height: auto;
}

body{
  height: 100vh;
}

h1{
  font-size: 5em;
  color:white;
  transform: translateY(6rem);
  animation: animate 2s ease-in-out forwards;
  z-index: 1;
}

h3{
animation: animate 2.1s ease-in-out forwards;
}

@keyframes animate{
  0%{
    transform: translateY(-800px);
    color: #025e88;
  }

  60%{
    transform: translateY(0);
  }

  80%{
    transform: translateY(-100px);
  }

  100%{
    transform: translateY(0);
    color: #FFFFFF;
  }
}

/*primeiro paragrafo*/
.element{
display: block;
padding-bottom: 5em;
height: auto;
width: auto;
}

.textoInicial{
margin-top: 6em;
margin-bottom: 3em;
}

.textoInicial1{
  margin-top: 6em;
  margin-bottom: 3em;
  }

.element2{
display: block;
padding-bottom: 3em;
height: auto;
width: auto;
}

.textoFinal{
margin-top: 3em;
margin-bottom: 0em;
}

.texto{
font-family: "Nunito";
font-size: 27px;
color: #7E7E7E;
text-align: center;
}

.azulMaroto{
color:#0089c9;
font-family: "Nunito";
text-align: center;
font-weight: bold;
}

.amareloMaroto{
  color:#ffaf00;
	font-weight: bold;
}

.roxoMaroto{
  color:#4c09e4;
	font-weight: bold;
}

.branco{
color: white;
font-size: 3em;
}

.marginTexto{
text-align: center;
align-self: center;
margin-left: 1.5em;
margin-right: 1.5em;
}

/*scroll-bar*/
::-webkit-scrollbar{
width: 15px;
}

::-webkit-scrollbar-track{
border: 7px solid #ffffff;
}

::-webkit-scrollbar-thumb{
background:linear-gradient(
 45deg,
rgb(14, 14, 14),
#1b1b1b
);
border-radius: 3px;
}

/*Responsivo Cards */
@media (max-width: 880px)
{
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

}

/*menu responsivo*/
@media (max-width: 1000px)
{
html{
    font-size: 95%;
}
.item{
    font-size: 1.1em;
}


}


/*responsividade fontes*/
@media (max-width: 1000px)
{
html{
    font-size: 70%;
}
.item{
    font-size: 1.1em;
}
}


/* Migalha de pão */
.breadcrumbs{
	padding: 10px;
	padding-left: 50px;
	line-height: 1.7;
	font-weight: bold;
}

.breadcrumbs__item{
	display: inline-block;
}

.breadcrumbs__link{
	text-decoration: none;
	color:#100f1d;
}

/*img cachorro*/
.background {
    width: 100vw;
    height: 30em;
    background-image: linear-gradient(rgba(0, 0, 0, 0.479), #00151fa6),
        url('~/static/img/img-slide01.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position-y: center;
    display: flex;
    margin-bottom: 5em;
    justify-content: center;
}
</style>
