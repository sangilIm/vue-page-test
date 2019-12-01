<template>
  <div class="home">
    Users {{userId}}
    {{$route.params.name}}
    {{$route.query}}
  </div>
</template>
<script>
export default {
    computed:{
        userId(){
            return this.$route.params.userId
        }
    },
    created(){
        console.log('router',this.$router);
        console.log('route',this.$route);
    }
}
</script>