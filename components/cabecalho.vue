<template>
<div>
  <header>
		<div class="logo">
            <nuxt-Link to="/" class="logoImg"><nuxt-img style="height: 100%; width: 100%; max-width: 71px; max-height: 71px; margin-top:5px;" alt="imagem da logo" src="img/LogoWhite.png"/></nuxt-Link>
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
.item{
  font-size: 1.1em;
}

.logo{
    display: none;
}

.buttonHeader{
    margin-right: 50px;
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
}

</style>

