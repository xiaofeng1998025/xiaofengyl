<template>
  <div class="home">

    <template>
        <el-input-number v-model="num"  :min="1" :max="10" label="描述文字"></el-input-number>
    </template>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {

  },
  data(){
    return{
      num:1,
    }
  },
  mounted(){
    this.$post(this.$api.add).then(data=>{
      console.log(data);
        
    })
  },
 
  
  
}
</script>
