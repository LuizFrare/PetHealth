<template>
<div>
  <header>
		<div class="logo">
            <a href="index.html" class="logoImg"><img style="height: 100%; width: 100%; max-width: 71px; max-height: 71px; margin-top:5px;" alt="imagem da logo" :src="require(`~/assets/img/LogoWhite.png`)"></a>
        </div>
        <nav>
            <button aria-label="Abrir Menu" id="btn-mobile" aria-haspopup="true" aria-controls="menu-nav" aria-expanded="false">
              <span id="hamburger"></span>
            </button>
            <ul id="menu-nav" role="menu-nav">
				      <li><NuxtLink to="/" tag="a">Home</NuxtLink></li>
              <li><NuxtLink to="/gatos" tag="a">Gatos</NuxtLink></li>
              <li><NuxtLink to="/caes" tag="a">Cães</NuxtLink></li>
              <li><NuxtLink to="/contato" tag="a">Contato</NuxtLink></li>
            </ul>
          </nav>
        <button class="buttonHeader"> <NuxtLink to="/coletas" tag="a">Exames</NuxtLink></button>
		</header>
		
</div>
</template>

<style scoped>
header a{
    text-decoration: none;
    color: white;
}

header{
  display: flex;
  width: 100vw;
  height: 10%;
  background: linear-gradient(163deg, #3498fd 0%, #0089c9 100%);
  justify-content: space-between;
  min-height: 80px;
}

/*menu*/
nav{
  height: 100%;
  display: flex;
  align-items: center;
}

a:hover {
color:#70ecce;
transition: all .5s ease;
}

#menu-nav {
  display: flex;
  list-style: none;
  gap: 2rem;
}

#menu-nav a {
  display: block;
  padding: 1.5rem;
  text-decoration: none;
  font-weight:bolder;
}

#btn-mobile {
  display: none;
}

.logo{
  display: flex;
  width: auto;
  min-width: 100px;
  height: 100%;
  margin-left: 15em;
}
.logoImg{
  align-self: center;
}

.buttonHeader{
  width: 10em;
  height: 3em;
  align-self: center;
  background-color:  #1ba6a3;
  color: white;
  border:none;
  border-radius: 5px 30px 5px 30px;
  font-size: 16px;
  cursor: pointer;
  margin-right: 15em;
  cursor: pointer;
  font-weight: bold;
}

.buttonHeader:hover{
background-color: #FFFFFF;
color: #1ba6a3;
transition: all .5s ease;
}


/* Responsividade */

@media (max-width: 880px)
{
html{
  font-size: 90%;
}

.item{
  font-size: 1.1em;
}

.logo{
    display: none;
}

.img {
background-image: url("~/assets/img/cachorro-inicio.jpg");
background-size: cover;
object-fit: cover;
background-repeat: no-repeat;
height: 10vh;
position: relative;
display: flex;
min-height: 500px;
width: auto;
}

#menu-nav {
  display: block;
  position: absolute;
  width: 100%;
  top: 70px;
  right: 0px;
  background: #0089c9;
  transition: 0.6s;
  z-index: 1000;
  height: 0px;
  visibility: hidden;
  overflow-y: hidden;
}

.buttonHeader{
    margin-right: 40px;
}

#nav{
    margin-left: 30px;
}

#nav.active #menu-nav {
  height: calc(100vh - 70px);
  visibility: visible;
  overflow-y: auto;
}

#menu-nav a {
  padding: 1rem 0;
  margin: 5em 5em;
  text-align: center;
}

#btn-mobile {
display: flex;
padding: 0.5rem 1rem;
font-size: 1rem;
border: none;
background: none;
cursor: pointer;
gap: 0.5rem;
align-self: center;
color:white
}

#hamburger {
  border-top: 2px solid;
  width: 20px;
}

#hamburger::after,
#hamburger::before {
  content: '';
  display: block;
  width: 20px;
  height: 2px;
  background: currentColor;
  margin-top: 5px;
  transition: 0.3s;
  position: relative;
}
#nav.active #hamburger {
  border-top-color: transparent;
}
#nav.active #hamburger::before {
  transform: rotate(135deg);
}
#nav.active #hamburger::after {
  transform: rotate(-135deg);
  top: -7px;
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

@media (max-width: 1350px)
{
html{
    font-size: 70%;
}
}

@media (max-width: 1100px)
{
html{
    font-size: 80%;
}

.buttonHeader{
    margin-right: 1.5em;
}
.textContent{
  font-size: 10px;
}

.font-size{
  font-size: calc(10px + 0.5vw);
}
}

</style>

