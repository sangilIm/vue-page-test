<template>
  <v-layout
    row wrap pt-5 text-xs-center
    style="max-width:500px;margin:0 auto">
    Users Child
    <v-flex xs12>
      <h1>유저를 검색해 주세요</h1>
    </v-flex>
    <v-flex xs12>
      <v-text-field label="유저 번호를 입력해주세요" v-model="userId">

      </v-text-field>
      <v-btn router :to="{name:'usersDetail',params:{userId:userId}}">검색</v-btn>
    </v-flex>
    <v-flex xs12>
      <router-view></router-view>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
    data(){
      return {
        userId : null
      }
    },
    created(){
       
    }
}
</script>