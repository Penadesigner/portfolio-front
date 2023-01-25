<template>
  <form class="form-cria-user"> 
    <h1>Cadastre-se</h1>
  <div class="form-group row">
    <label for="userNome" class="col-sm-2 col-form-label"><b>Nome</b></label>
    <div class="col-sm-8">
      <input type="text" class="form-control" id="userNome" placeholder="Nome" v-model="name">
    </div>
  </div>
  <div class="form-group row">
    <label for="userEmail" class="col-sm-2 col-form-label"><b>Email</b></label>
    <div class="col-sm-8">
      <input type="email" class="form-control" id="userEmail" placeholder="Email" v-model="email">
    </div>
  </div>
  <div class="form-group row">
    <label for="userSenha" class="col-sm-2 col-form-label"><b>Password</b></label>
    <div class="col-sm-8">
      <input type="password" class="form-control" id="userSenha" placeholder="Password" v-model="password">
    </div>
  </div>
  
  <div class="form-group row">
    <div class="col-sm-12">
      <button type="submit" class="btn btn-primary" @click="criandoUser">Cadastrar</button>
    </div>
  </div>
</form>
</template>

<script>
import http from "@/services/http"
export default {
  data() {
    return {
      name: '',
      email: '',
      password: ''
    };
  },
  methods: {
    criandoUser() {
      if (this.email != "") {
        if(this.password != ""){
          const user = {
            name: this.name,
            email: this.email,
            password: this.password
          }
          http.post("users/user", user).then(() => {
            console.log("cadastrado com sucesso");
          })
        } else {
          console.log("senha invalida");
        }
      } else {
        console.log("email invalido");
      }
      // ao final limpa os campos
      this.name = ""
      this.email = ""
      this.password = ""
    },
  },
};
</script>

<style scoped>
.form-group {
  padding: 0.5em;
}
.form-cria-user {
  padding: 2em;
}
</style>