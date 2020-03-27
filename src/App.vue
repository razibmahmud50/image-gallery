<template>
  <div id="root">
      <AppHeader/>
      <router-view/>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader'

export default {
  name: 'root',
  components: {
    AppHeader
  }
}
</script>

<style>
</style>
