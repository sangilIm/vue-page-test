<template>
    <v-container fluid>
        <v-layout row wrap>
            <v-flex xs12 text-xs-center>
                 <h1>투두리스트</h1>
                 <p>전체 할일: {{todoList.length}} / 완료된 할일: {{countDone}} / 남은 할일:{{todoList.length - countDone}}</p>
            </v-flex>
            <v-flex 
                pa-2
                xs6>
                <List 
                    :todoList="todoList"
                    @statusControl="statusControl"
                    @listDelete="listDelete"
                />
            </v-flex>
            <v-flex 
                pa-2
                xs6>
                <ListAdd 
                    @listAdd="listAdd"
                    @listEdit="listEdit"
                />
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
import List from './List'
import ListAdd from './ListAdd'


export default {
    components:{
        List,
        ListAdd
    },
    data(){
        return{
            todoList:[]
        }
    },
    computed:{
        countDone(){
            let count =0;
            this.todoList.forEach(item =>{
                if(item.status === "done" ) count++;
            })

            return count;
        }
    },
    methods:{
        listAdd(memo){
            console.log("받았어!")
            this.todoList.push({memo:memo , status:'created'})
        },
        statusControl(index,status){
            console.log('status',status)
            this.todoList[index].status = status;
        },
        listDelete(index){
            this.todoList.splice(index,1)
        },
        listEdit(memo,index){
            this.todoList[index].memo = memo;
        }
    }
}
</script>