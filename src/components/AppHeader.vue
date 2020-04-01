<template>
<nav class="app-header ui secondary pointing menu">
   <div class="item">Image Storage</div>
    <div class="right menu" v-if="isLoggedIn">
         <router-link to="/" class="ui item" >
            Galleries
         </router-link>
         <router-link to="/upload" class="ui item" >
            Upload
         </router-link>
         <a class="ui item" @click="logout">
            Logout
         </a>
    </div>
    <div v-else class="right menu">
      <a class="ui item" @click="login">
        Login
      </a>
    </div>
</nav>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
    name: 'AppHeader',
    computed:{
       ...mapGetters(['isLoggedIn'])
    },
    methods:{
      ...mapActions(['login','logout'])
    }


}
</script>

<style>
</style>