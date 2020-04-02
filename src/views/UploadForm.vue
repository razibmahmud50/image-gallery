<template>
   <div>
       <div>
           <input type="file" @change="uploadImages($event.target.files)" multiple accept="image/*">
           <span>Drag file here</span>
       </div>
   </div> 
</template>

<script>
import {mapActions} from 'vuex'
export default {
    name:"UploadForm",
    methods:{
       ...mapActions(['uploadImages'])
       }
}
</script>