<template>
    <div class="container col-xl-10 col-xxl-8 px-4 py-5">
      <div class="row align-items-center g-lg-5 py-5" v-for="obj in objetivo" :key="obj.id">
        <div class="col-lg-7 text-center text-lg-start">
          <h2 class="lh-1 mb-4 pb-3 fst-italic">Guilherme Domenes Santana</h2>
          <h3 class="display-4 fw-bold lh-1 mb-3">{{obj.cargo}}</h3>
          <p class="col-lg-10 fs-4">{{obj.objetivo}}</p>
          <span>{{obj.qualificacoes}}</span>
        </div>
        <div class="col-md-10 mx-auto col-lg-5">



          <form class="p-4 p-md-5 border rounded-3 bg-light">
            <div class="form-floating mb-3">
              <input v-model="email" type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
              <label for="floatingInput">Email</label>
            </div>
            <div class="form-floating mb-3">
              <input v-model="senha" type="password" class="form-control" id="floatingPassword" placeholder="Password">
              <label for="floatingPassword">Password</label>
            </div>
            <div class="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me"> Lembrar de mim
              </label>
            </div>
            <button class="w-100 btn btn-lg btn-primary" type="submit" @click="logar()">Sign up</button>
            <hr class="my-4">
            <small class="text-muted">By clicking Sign up, you agree to the terms of use.</small>
          </form>




        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "@/services/http"
  import * as jose from 'jose'
  //import chave from '@/config/jwt'
  export default {
      name: 'SobreView',
      data(){
        return {
          objetivo: '',
          email: '',
          senha: ''
        }
      },

      methods: {
        logar(){

          event.preventDefault()
          if(!this.email || !this.senha){
            return { err: "nao existe nada"}
          }
          let credenciais = (this.email+':'+this.senha)
          
          credenciais = btoa(credenciais)

          console.log(credenciais);

          const config = { 
            method: 'POST',
            url: 'http://localhost:8888/users/login',
            headers:{
              'Authorization':`Basic ${credenciais}`
            }
          }

          axios(config).then(res => {
            const bearerToken = res.data.user
            const teste = jose.jwtVerify(bearerToken, "aula-igor", {
              algorithms: ['HS256']
            })
            console.log(teste);
          }).catch(err => {
            console.log(err);
          })
        }
      },

      /*.then(decode => {
                console.log(decode);
                localStorage.setItem('user',JSON.stringify(decode))
                localStorage.setItem('token',bearerToken)
            })  */

      mounted(){
        axios.get('portfolio/obj').then(res => {
          console.log(res.data.data);
          this.objetivo = res.data.data
        })
      }
  }
  </script>
  
  <style>
  
  </style>