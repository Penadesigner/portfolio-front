<template>
  <div id="nav">
    <router-link to="/" id="logo-url">
      <img :src="logo" :alt="alt" id="logo" />
    </router-link>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/habilidades">Habilidades</router-link>
      <router-link to="/formacao">Formacao</router-link>
      <router-link to="/cargos-anteriores">Cargos Anteriores</router-link>
      <router-link to="/usuarios">Usuarios</router-link>
    </nav>
  </div>
</template>
  
  <script>
export default {
  name: "Navbar",
  props: ["logo", "alt"],
};
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
#nav {
  background: #222;
  border-bottom: 4px solid black;
  padding: 15px 40px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
#nav #logo-url {
  margin: auto;
  margin-left: 0;
}
#logo {
  height: 40px;
  width: 40px;
}
#nav a {
  color: yellow;
  text-decoration: none;
  margin: 10px;
  transition: 0.5s;
}
#nav a:hover {
  color: red;
}
</style>
  