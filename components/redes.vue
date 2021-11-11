<template>
    <section>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.4.2/vue.min.js"></script>
    <div id="new" class="element2">
        <div class="textoFinal">
            <p class="texto"><span class="azulMaroto">Gostou do nosso conteúdo?</span>  Acomapanhe a PetHealth em nossas redes sociais!</p>
            <p class="texto">Veja o dia-a-dia de uma clínica veterinária, além de extras e sorteios. </p>
        </div>
	</div>
    <div class="lastImg">
        <div class="componentImg">
            <a href=""><nuxt-img class="imgC" :src="Instagram" alt="Instagram"/></a>
        </div>
        <div class="componentImg2">
            <a href=""><nuxt-img class="imgD" :src="Maps" alt="Google Maps"/></a>
        </div>
        <div class="componentImg2">
            <a href=""><nuxt-img class="imgF" :src="Facebook" alt="Facebook"/></a>
        </div>
        <div class="componentImg">
            <a href=""><nuxt-img class="imgG" :src="Twitter" alt="Twitter"/></a>
        </div>
    </div>
    </section>
    </template>

<script>
export default {
  data() {
    return { 
      Facebook: 'img/face.png',
      Twitter:'img/twitter.png',
      Maps:'img/maps.png',
      Instagram:'img/insta.png',
    }
  },
}
</script>

<style scoped>

/*redes sociais*/

.lastImg{
  width: 100%;
  display: flex;
  max-width: 400px;
  align-items: center;
  margin: auto;
  text-align: center;
  padding-bottom: 2em;
  }
  
  .componentImg{
  width: 25%;
  min-width: 50px;
  height: auto;
  
  }
  .componentImg2{
  width: 25%;
  min-width: 50px;
  height: auto;
  }
  
  .imgF{
  max-width: 50%;
  min-width: 30px;
  }

  .imgF:hover{
        background-image: url('~/static/img/twitter-hover.png');
  }
  
  .imgD{
  max-width: 50%;
  min-width: 30px;
  }
  
  .imgG{
  max-width: 50%;
  min-width: 30px;
  }
  
  .imgC{
  max-width: 50%;
  min-width: 30px;
  }

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
</style>