<template>
    <form @submit.prevent="send" class="wrapper">
            <div class="title">
              {{$t("contactus.form2.text7")}}
            </div>
            <div class="form">
               <div class="inputfield">
                  <label>{{$t("contactus.form2.text1")}}</label>
                  <input v-model="$v.nameVagas.$model" type="text" class="input">
                  <p v-if="$v.nameVagas.$error" style="color: red; margin-left:1rem">
                  {{$t("contactus.error")}}
                  </p>
               </div> 
               <div class="inputfield">
                <label>{{$t("contactus.form2.text2")}}</label>
                <input type="text" class="input" v-model="$v.emailVagas.$model">
                <p v-if="$v.emailVagas.$error" style="color: red; margin-left:1rem">
                  {{$t("contactus.error")}}
                  </p>
             </div> 
                <div class="inputfield">
                  <label>{{$t("contactus.form2.text3")}}</label>
                  <div id="paymentContainer" class="Options">
                  <div id="payCC" class="floatBlock">
                    <label for="paymentCC"> <input id="paymentCC" name="paymentType" type="radio" value="TI" />  {{$t("contactus.form2.text4")}}</label>
                </div>
                <div id="payInvoice" class="floatBlock">
                    <label for="paymentInv"> <input id="paymentInv" name="paymentType" type="radio" value="Estagio" /> {{$t("contactus.form2.text5")}}</label>
                </div>
               </div>
            </div>
            <div class="inputfield">
                <button class="btn" :disabled="$v.$error">{{$t("contactus.form2.text6")}}</button> 
              </div>
          </div>
          <p style=" color: #1fb866;"> {{ resultado }}</p>
          </form>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, email, minLength } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  data() {
    return{
      nameVagas:'',
      vaga:'',
      emailVagas:'',
    }
  },
  validations: {
    nameVagas: { required, minLength: minLength(1) },
    emailVagas: { required, email },
  },

   methods: {
    send() {
      this.resultado = "";
      this.$v.$touch();
      if (this.$v.$invalid) return;
      this.nameVagas = "";
      this.emailVagas = "";
      this.vaga = "";
      this.resultado = "Enviado!";
      this.$v.$reset();
    },
  },
  
}
</script>


<style scoped>
/* form */
.wrapper{
max-width: 800px;
width: 100%;
background: #fff;
margin: 50px auto;
box-shadow: 20px 20px 50px -29px #96e6a1;;
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

/* radio */
.floatBlock {
margin: 0 4em 0 1em;
}

.Options {
border: none;
display: flex;
flex-direction: row;
justify-content: flex-start;
break-before: always;
}

#purchaseOrder {
margin: 0 0 0.5em 0;
}

input[type='radio']:after {
width: 15px;
height: 15px;
border-radius: 15px;
left: -1px;
position: relative;
background-color: #ffffff;
content: '';
display: inline-block;
visibility: visible;
border: 2px solid rgb(190, 190, 190);
cursor: pointer;
}

input[type='radio']:checked:after {
width: 15px;
height: 15px;
border-radius: 15px;
left: -1px;
position: relative;
background-color: #00d753;
content: '';
display: inline-block;
visibility: visible;
border: 2px solid white;
cursor: pointer;
}

</style>