<template>
  <div class="m-2 p-2">
      <router-link to="/usuarios/novo"><button class="btn btn-primary">Criar Novo Usuario</button></router-link>
    </div>
    <div class="table-responsive">
      <table class="table table-striped table-dark table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nome</th>
            <th scope="col">Email</th>
            <th scope="col">Criado em:</th>
            <th scope="col">Ação</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <th scope="row">{{ user.id }}</th>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.createdAt.split("T")[0] }}</td>
            <td>
              <button @click="deletaUser(user.id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
</template>

<script>
import http from '@/services/http'

export default {
    name: 'Usuarios',
    data(){
    return {
      users: []
    }
  },
  methods: {
    pegarUser(){
      http.get('users').then(res => {
        console.log(res.data.data);
        this.users = res.data.data
        console.log("Busca concluida com sucesso");
      })
    },
    
    async deletaUser(id){
      http.delete(`users/user/${id}`).then(() => {
        console.log("deletado com sucesso");
        this.pegarUser()
      })
    }
  },
  mounted(){
    this.pegarUser()
  }


  /*setup(){
    const store = useStore()

    store.dispatch('ActBuscaUsers').then(() => {
      console.log("busca completa");
    })
    
  }*/
}
</script>

<style>

</style>