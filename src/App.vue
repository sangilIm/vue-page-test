<template>
  <v-app>
      <v-btn router :to="{name:'about'}" exact>About</v-btn>
      <v-btn router :to="{name:'home'}" exact>Home</v-btn>
      <v-btn router :to="{name:'users' , params:{userId:4321,name:'hoya'},query:{group:'member',category:'trial'}}" exact>Users</v-btn>
      <v-btn router :to="{name:'usersChild'}" exact>usersChild</v-btn>
   
      <router-link :to="{name:'about'}"> about</router-link>
      <router-view></router-view>
      <v-btn>StoreAdd</v-btn>
      <Home/>
      <Store/>
      <v-btn @click="addStore">StoreAdd</v-btn>
      <h1>{{$store.getters.CountWithSuffix}}</h1>
      <h1>{{auc}}</h1>
      <h1>{{cws}}</h1>
      <!-- <h1>{{allusersCount}}</h1>
      <h1>{{CountWithSuffix}}</h1> -->

      
      <v-btn @click="addMutaion">MutationAdd</v-btn>
  </v-app>
</template>

<script>
import Home from './components/Home';
import Store from './components/Store';
import {mapActions, mapMutations, mapState, mapGetters} from 'vuex';

export default {
  name: 'App',

  components: {
    Home,
    Store
  },
  computed:{
    // from store/index.js methods
    ...mapGetters({auc:'allusersCount',cws:'CountWithSuffix'})
    //...mapState(['allUsers'])
    //...mapGetters(['allusersCount','CountWithSuffix'])
  },
  methods:{
    //...mapMutations(['addUsers']), // 중복이 되기 때문에 주석
    ...mapActions(['addUsers']),
    addStore(){
      this.$store.state.users.push({userId:'test',tel:'2222222'})
    },
    addMutaion(){
        let userObj = {
          userId: 'mutaion',
          tel:'3333'
        };

        //this.addUsers(userObj); // using mapMutations
        //this.$store.commit('addUsers',userObj);  // using mutations
        //this.$store.dispatch('addUsers',userObj) // using actions
        this.addUsers(userObj) // using mapActions
    }

  },
  
  data: () => ({
    //
  }),
};
</script>
