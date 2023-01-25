<template>
    <div class="list-group" v-for="formacao in formacoes" :key="formacao.id">
    <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
        <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">{{formacao.escola}}</h5>
        <small>{{formacao.periodo}}</small>
        </div>
        <p class="mb-1">{{formacao.curso}}</p>
        <small></small>
    </a>
    </div>
</template>

<script>
import axios from "@/services/http"
export default {
    name: 'Formacao',
    data(){
        return {
            formacoes: []
        }
    },
    mounted(){
        axios.get('portfolio/formacao').then(res => {
            console.log(res.data.data);
            this.formacoes = res.data.data
        })
    }
}
</script>

<style>

</style>