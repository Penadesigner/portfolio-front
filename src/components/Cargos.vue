<template>
  <div class="list-group" v-for="job in jobs" :key="job.id">
    <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
        <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">{{job.empresa}}</h5>
        <small>{{job.periodo}}</small>
        </div>
        <p class="mb-1">{{job.cargo}}</p>
        <small></small>
    </a>
    </div>
</template>

<script>
  import axios from "@/services/http"
export default {
    name: 'Cargos',
    data(){
        return {
            jobs: []
        }
    },
    mounted(){
        axios.get('portfolio/job').then(res => {
            console.log(res.data.data);
            this.jobs = res.data.data
        })
    }
}
</script>

<style>

</style>