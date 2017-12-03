<template>
  <section class="cep-checker">
    <header class="header">
      <h1>Digite o CEP</h1>
    </header>
    <input 
      type="text"
      @keyup.enter="checkCep"
      v-mask="'99999-999'"
      v-focus="true"
      placeholder="ex:  0800-888, pressione enter para confirmar"
      > 
      <br>
    <router-link class="home" to="/"> Ver Tarefas</router-link>
    <div v-show="hasAddress()" class="address">
      <p>Rua: {{address.logradouro}}</p>
      <p>Bairro: {{address.bairro}}</p>
      <p>Cidade: {{address.cidade}}</p>
      <p>Estado: {{address.estado}}</p>
    </div>
    <footer-todo></footer-todo>
  </section>
</template>

<script>
import AwesomeMask from 'awesome-mask'
import Focus from './directives/focus'
import FooterTodo from './components/FooterTodo'

export default {
  data () {
    return {
      address: {},
      hasAddress () {
        return Object.keys(this.address).length > 0
      }
    }
  },
  components: {
    FooterTodo
  },
  directives: {
    'mask': AwesomeMask,
    'focus': Focus
  },
  methods: {
    checkCep ($event) {
      let cep = $event.target.value
      this.$http.get('http://api.postmon.com.br/v1/cep/' + cep)
      .then((res) => {
        this.address = res.body
        console.log('Response OK:', res)
      }, (res) => {
        console.error('Response error:', res)
      })
    }
  }
}
</script>

<style lang="less">
.cep-checker {
  background: #fff;
  margin: 130px auto 40px auto;
  position: relative;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),
  0 25px 50px 0 rgba(0, 0, 0, 0.1);
  width:40%;
  text-align: center;
}

.cep-checker h1 {
  position: absolute;
  top: -220px;
  width: 100%;
  font-size: 100px;
  font-weight: 100;
  text-align: center;
  color: rgba(0, 0, 0, 0.35);
  -webkit-text-rendering: optimizeLegibility;
  -moz-text-rendering: optimizeLegibility;
  text-rendering: optimizeLegibility;
}

.cep-checker input::-webkit-input-placeholder {
  font-style: italic;
  font-weight: 300;
  color: #e6e6e6;
  
}

.cep-checker input::-moz-placeholder {
  font-style: italic;
  font-weight: 300;
  color: #e6e6e6;
}

.cep-checker input{
  position: relative;
  margin: 10px auto;
  width: 100%;
  font-size: 24px;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1.4em;
  border: 0;
  color: inherit;
  /* padding: 6px; */
  border: 1px solid #999;
  box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  padding: 16px 16px 16px 60px;
  border: none;
  background: rgba(0, 0, 0, 0.003);
  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
  text-align: center;
}


.address {  
  // text-align: left;
  color: rgba(0, 0, 0, 0.35);
  padding:  2em;
  p{
    font-size: 22px;
  }
}

.home{
  text-decoration: none;
  font-size: 16px;
  display: block;
  padding: 5px;
  text-align: center;
  color: #333;
}




</style>
