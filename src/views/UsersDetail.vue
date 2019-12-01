<template>
  <div>
    Users Detail
    {{$route.params.userId}} <br/>
    <v-btn @click="edit">수정</v-btn>
  </div>
</template>
<script>
export default {
    methods:{
      edit(){
        this.$router.push({name:'usersEdit'})
      }
    }
}
</script>