<template>
    <section class="img">
			<div class="fundo">
				<div class="containerLetters">
					<h1>Clínica PetHealth</h1>
					<h3>Onde seus companheiros felinos se tornam nossos também!</h3>
				</div> 
				<div class="svg">
					<svg width="50" height="100" viewBox="0 0 70 38" fill="none">
						<path d="M2 2.5L35 35.5L68 2.5" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
					<img class="logoImg" alt="imagem da logo" style="height: 100%; width: 100%; max-width: 136px;" :src="require(`~/assets/img/Logo.svg`)" >
			  </div>   
			</div>
		</section>
</template>

<style scoped>
.img .fundo {
  background: linear-gradient(360deg, #00151f 1%, rgba(0, 0, 0, 0.3) 100%);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.img {
background-image: url("~/assets/img/gatitos.jpg");
background-size: cover;
object-fit: cover;
background-repeat: no-repeat;
height: 100vh;
position: relative;
display: flex;
min-height: 500px;
width: auto;
}

.containerLetters{
  display: flex;
  flex-direction: column;
  width: 100vw;
  margin-left: 15em;
  justify-content: center;
  padding-top:8em;
}

.goContent{
  width: 20em;
  height: 5em;
  border:none;
  background-color: #00A4EF;
  margin-top: 10em;
}

.svg{
  display: flex;
  width: 100%;
  margin-left: 15em;
  padding-right: 30em;
  flex-direction: row;
  justify-content: space-between;
}

/* Responsivo */
@media (max-width: 880px)
{
.item{
  font-size: 1.1em;
}

.logo{
    display: none;
}

.img {
background-image: url("~/assets/img/gatitos.jpg");
background-size: cover;
object-fit: cover;
background-repeat: no-repeat;
height: 10vh;
position: relative;
display: flex;
min-height: 500px;
width: auto;
}

.containerLetters{
  display: block;
  width: auto;
  margin:0 5em;
  padding-top:5em;
  text-align: center;
}

svg{
  display: none;
}

.svg{
  display: block;
  margin: 0 auto;
  text-align: center;
  padding: 0;
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
    text-align: start;
  }
  
.imgInformation{
    align-self: center;
    max-width: 100px;
    max-height: 100px;
    min-width: 100px;
    min-height: 100px;
    margin-bottom: 5em;
  }

  .card{
    width: 100%;
    min-width: 30em;
    height: 15em;
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