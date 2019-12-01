<template>
    <div>
         <v-card 
            class="pa-3 mb-3"
            v-for="(list,index) in todoList" 
            :key="index"
            :class="{'done':list.status==='done'}"
            >
            <p>{{list.memo}}</p>
            <p>{{list.status}}</p>
            <v-btn 
                v-if="list.status==='created'"
                fab text small color="green"
                @click="$emit('statusControl',index,'done')"
            >
                <v-icon>fas fa-check</v-icon>
            </v-btn>

            <v-btn 
                v-if="list.status==='done'"
                fab text small color="blue"
                @click="$emit('statusControl',index,'created')"
            >
                <v-icon>fas fa-redo-alt</v-icon>
            </v-btn>

            <v-btn 
                fab text small color="red"
                @click="$emit('listDelete',index)"
            >
                <v-icon>fas fa-trash</v-icon>
            </v-btn>

             <v-btn 
                @click="listEdit(list.memo,index)"
                v-if="list.status==='created'"
                fab text small color="yellow"
             >
                <v-icon>fas fa-edit</v-icon>
            </v-btn>

            
        </v-card>
    </div>
</template>
<script>
import {eventBus} from '../main'
export default {
    props:["todoList"],
    methods:{
        listEdit(memo,index){
            eventBus.listEdit(memo,index)
        }
    }
}
</script>

<style scope>
.done{
    background-color:rgba(150,0,0,0.5)
}

.done p{
    text-decoration: line-through;
    color: rgba(0, 0, 0, 0.5);
}
</style>