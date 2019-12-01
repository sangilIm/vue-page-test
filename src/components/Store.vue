<template>
    <div>
       Store Page {{$store.state.users}}<br/>
       Store Page {{users}}
    </div>
</template>
<script>

import {mapState, mapGetters} from 'vuex';
export default {
    computed:{
        ...mapState(['users'])
    }
}
</script>