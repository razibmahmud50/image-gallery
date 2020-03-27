<template>
<nav class="app-header ui secondary pointing menu">
    <router-link class="item" to="/">Home</router-link> |
    <router-link class="item" to="/about">About</router-link>
    <div class="right menu">
      <a class="ui item">
        Logout
      </a>
    </div>
</nav>
</template>

<script>
export default {
    name: 'AppHeader'
}
</script>

<style>
</style>