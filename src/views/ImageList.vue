<template>
    <div>
        <div v-if="isLoggedIn"  class="image-container">
            <img v-for="(image, index) in allImages" :src="image.link" :key="index"/>
        </div> 
        <div v-else>
             <h2> Log in to get Started</h2>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
    name:"ImageList",
    computed: mapGetters(['allImages','isLoggedIn']),
    methods: mapActions(['fetchImages']), 
    created(){
        this.fetchImages()
    }
}
</script>
<style scoped>
  .image-container{
      column-count: 3;
      column-gap: 0;

  }
  .image-container img{
      max-width: 100%;
      padding:5px;
  }
</style>