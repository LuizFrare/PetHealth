<template>
    <section>
    <div class="element2">
        <div class="textoFinal">
            <p class="texto"><span class="azulMaroto">Gostou do nosso conteúdo?</span>  Acomapanhe a PetHealth em nossas redes sociais!</p>
            <p class="texto">Veja o dia-a-dia de uma clínica veterinária, além de extras e sorteios. </p>
        </div>
	</div>
    <div class="lastImg">
        <div class="componentImg animate" data-anime="left">
            <a href=""><img class="imgC" src="~/assets/img/insta.png" onmouseover="this.src='~/assets/img/insta-hover.png'" onmouseout="this.src='~/assets/img/insta.png'" alt="Instagram"></a>
        </div>
        <div class="componentImg2 animate" data-anime="left">
            <a href=""><img class="imgD" src="~/assets/img/maps.png"  onmouseover="this.src='~/assets/img/maps-hover.png'" onmouseout="this.src='~/assets/img/maps.png'" alt="Google Maps"></a>
        </div>
        <div class="componentImg2 animate" data-anime="left">
            <a href=""><img class="imgF" src="~/assets/img/face.png" onmouseover="this.src='~/assets/img/face-hover.png'" onmouseout="this.src='~/assets/img/face.png'" alt="Facebook"></a>
        </div>
        <div class="componentImg animate" data-anime="left">
            <a href=""><img class="imgG" src="~/assets/img/twitter.png" onmouseover="this.src='~/assets/img/twitter-hover.png'" onmouseout="this.src='~/assets/img/twitter.png'" alt="Twitter"></a>
        </div>
    </div>
    </section>
    </template>

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
</style>