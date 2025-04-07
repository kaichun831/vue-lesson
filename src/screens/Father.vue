<template>
    <h1>父頁面</h1>
    <PrettyButton
    :title="'取得資料列表'"
    @void="getList"
    ></PrettyButton>

    <PrettyButton
    :style="{fontSize: fontSizeNumber+'px'}"
    :title="'查詢資料'"
    @void="fontSizeNumber+=20"
    ></PrettyButton>

</template>


<script setup>
import { ref } from 'vue'
import PrettyButton from '@/components/PrettyButton.vue'
const fontSizeNumber = ref(40)
function getList(){
   setTimeout(() => {
      console.log('呼叫取得資料列表')
   }, 1000)
}

function queryData(){
   setTimeout(() => {
      console.log('查詢資料')
   }, 1000)
}

</script>