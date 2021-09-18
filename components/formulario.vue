<template>
    <form class="wrapper">
            <div class="title">
              Fale Conosco - Nos mande uma dúvida sobre seu pet!
            </div>
            <form id="app" @submit="checkForm" class="form">
               <div class="inputfield">
                  <label>Nome do Pet</label>
                  <input v-model="petName"  type="text" class="input">
               </div>  
                <div class="inputfield">
                  <label>Nome do Dono</label>
                  <input v-model="name"  type="text" class="input">
               </div>  
            
                <div class="inputfield">
                  <label>Gênero</label>
                  <div class="custom_select">
                    <select>
                      <option value="">Selecionar</option>
                      <option value="male">Macho</option>
                      <option value="female">Fêmea</option>
                    </select>
                  </div>
               </div> 
                <div class="inputfield">
                  <label>E-mail</label>
                  <input v-model="email" type="text" class="input">
               </div> 
              <div class="inputfield">
                  <label>Número de Telefone</label>
                  <input v-model="number"  type="text" class="input">
               </div> 
              <div class="inputfield">
                  <label>Mensagem</label>
                  <textarea class="textarea"></textarea>
               </div>  
              <div class="inputfield terms">
                  <label class="check">
                    <input type="checkbox">
                    <span class="checkmark"></span>
                  </label>
                  <p>Concordo com os termos de privacidade</p>
               </div> 
              <div class="inputfield">
                <input type="submit" value="Enviar" class="btn">
              </div>
            </form>
    </form>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup() {
    const app = new Vue({
     el: '#app',
    data: {
    errors: [],
    name: null,
    petName: null,
    email: null,
    number: null,
  },
  methods:{
    checkForm: function (e) {
      if (this.name && this.age) {
        return true;
      }

      this.errors = [];

      if (!this.name) {
        this.errors.push('O nome é obrigatório.');
      }
      if (!this.petName) {
        this.errors.push('O nome do pet é obrigatório.');
      }

      if (!this.email) {
        this.errors.push('O endereço de e-mail é obrigatório.');
      }

      if (!this.number) {
        this.errors.push('O número de telefone é obrigatório.');
      }

      e.preventDefault();
    }
  }
})
  },
})
</script>



<style scoped>
/* form */
.wrapper{
max-width: 800px;
width: 100%;
background: #fff;
margin: 50px auto;
box-shadow: 20px 20px 50px -29px #96e6a1;
padding: 30px;
}

.wrapper .title{
font-size: 24px;
font-weight: 700;
margin-bottom: 25px;
color: #00f35d;
text-transform: uppercase;
text-align: center;
}

.wrapper .form{
width: 100%;
}

.wrapper .form .inputfield{
margin-bottom: 15px;
display: flex;
align-items: center;
}

.wrapper .form .inputfield label{
 width: 200px;
 color: #757575;
 margin-right: 10px;
font-size: 14px;
}

.wrapper .form .inputfield .input,
.wrapper .form .inputfield .textarea{
width: 100%;
outline: none;
border: 1px solid #d5dbd9;
font-size: 15px;
padding: 8px 10px;
border-radius: 3px;
transition: all .4s ease;
}

.wrapper .form .inputfield .textarea{
width: 100%;
height: 125px;
resize: none;
}

.wrapper .form .inputfield .custom_select{
position: relative;
width: 100%;
height: 37px;
}

.wrapper .form .inputfield .custom_select:before{
content: "";
position: absolute;
top: 12px;
right: 10px;
border: 8px solid;
border-color: #d5dbd9 transparent transparent transparent;
pointer-events: none;
}

.wrapper .form .inputfield .custom_select select{
-webkit-appearance:none;
-moz-appearance:none;
appearance:none;
outline: none;
width: 100%;
height: 100%;
border: 0px;
padding: 8px 10px;
font-size: 15px;
border: 1px solid #d5dbd9;
border-radius: 3px;
}


.wrapper .form .inputfield .input:focus,
.wrapper .form .inputfield .textarea:focus,
.wrapper .form .inputfield .custom_select select:focus{
border: 1px solid #43df7f;
}

.wrapper .form .inputfield p{
 font-size: 14px;
 color: #757575;
}
.wrapper .form .inputfield .check{
width: 15px;
height: 15px;
position: relative;
display: block;
cursor: pointer;
}
.wrapper .form .inputfield .check input[type="checkbox"]{
position: absolute;
top: 0;
left: 0;
opacity: 0;
}
.wrapper .form .inputfield .check .checkmark{
width: 15px;
height: 15px;
border: 2px solid #00d753;
display: block;
position: relative;
}
.wrapper .form .inputfield .check .checkmark:before{
content: " ";
position: absolute;
top: 0px;
left: 3px;
width: 5px;
height: 10px;
border: 2px solid;
border-color: transparent transparent #fff #fff;
transform: rotate(-35deg);
display: none;
}
.wrapper .form .inputfield .check input[type="checkbox"]:checked ~ .checkmark{
background: #00d753;
}

.wrapper .form .inputfield .check input[type="checkbox"]:checked ~ .checkmark:before{
display: block;
}

.wrapper .form .inputfield .btn{
width: 50%;
padding: 8px 10px;
font-size: 15px; 
border: 0px;
margin-left: auto;
margin-right: auto;
background: linear-gradient(-29deg, rgba(0,215,176,1) 0%, rgba(0,215,83,1) 100%);
color: #fff;
cursor: pointer;
border-radius: 6px;
outline: none;
font-weight: bold;
}

.wrapper .form .inputfield .btn:hover{
background: #000000;
transition: all .5s ease;
}

.wrapper .form .inputfield:last-child{
margin-bottom: 0;
}

@media (max-width:420px) {
.wrapper .form .inputfield{
  flex-direction: column;
  align-items: flex-start;
}
.wrapper .form .inputfield label{
  margin-bottom: 5px;
}
.wrapper .form .inputfield.terms{
  flex-direction: row;
}
}
</style>