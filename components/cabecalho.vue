<template>
<div>
  <header>
		<div class="logo">
            <NuxtLink to="/" class="logoImg"><nuxt-img style="height: 100%; width: 100%; max-width: 71px; max-height: 71px; margin-top:5px;" alt="imagem da logo" src="img/LogoWhite.png"/></NuxtLink>
        </div>
      <b-navbar toggleable="lg" type="light">
      <b-container class="py-2">
        <b-navbar-toggle style="margin-top:1.1rem; background-color:white" target="nav-collapse"></b-navbar-toggle>
        <b-collapse class="justify-content-end" id="nav-collapse" is-nav>
          <b-navbar-nav>
            <nuxt-link
              v-for="item of items"
              :key="item.url"
              :to="item.url"
              class="p-2 link"
              exact-active-class="underline"
            >
              {{ item.text }}
      </nuxt-link>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
        <button class="buttonHeader"> <NuxtLink to="/coletas" tag="a">{{ $t("menu.exams") }}</NuxtLink></button>
		</header>
		
    
</div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { url: "/", text: this.$t("menu.home") },
        { url: "/gatos", text: this.$t("menu.cat") },
        { url: "/caes", text: this.$t("menu.dog") },
        { url: "/contato", text: this.$t("menu.contact") },
      ],
    };
  },
}
</script>

<style scoped>
header a{
    text-decoration: none;
    color: white;
}

.link {
  color: white;
  font-size: 1.1rem;
  margin-inline: 0.9rem;
}

header{
  display: flex;
  width: 100vw;
  height: 10%;
  background:linear-gradient(to right, #00aeff , #0089c9);
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
background-image: url("~/static/img/cachorro-inicio.jpg");
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
  transition: 0s;
  z-index: 1000;
  height: 0px;
  visibility: hidden;
}

.buttonHeader{
    margin-right: 50px;
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

