<template>
  <h1>Production</h1>
  <card>
    <component :is="tabs[currentScreen]" />
  </card>

  <h2>{{ getLocalStoageValue }}</h2>
  <h2>{{ getCookieValue }}</h2>
  <!-- <button @click="switchScreen(0)">PageOne</button>
    <button @click="switchScreen(1)">PageTwo</button> -->
  <!-- <button @click="save">存儲至LOCAL STORAGE</button> -->
  <!-- <button @click="getStorageByKey('username')">取出</button> -->

  <button @click="setCookie">透過Cookie儲存資料</button>
  <button @click="getCookie">透過Cookie儲存資料</button>
  <h2>{{ $t('message.hello') }}</h2>
  <!-- <button
    @click="
      () => {
        i18n.global.locale = 'ja'
      }
    "
  > -->
    <!-- 切換語言 -->
  <!-- </button>
  <button @click="getLanguage">取得語言</button>
  <h2>{{ getUserLanguage }}</h2>

  <h1>{{ object }}</h1>
  <button @click="changeObject">Change Object</button> -->

  <!-- <input v-model="userName"> -->

   <!-- <button @click="changeObject">{{ listen.age }}</button> -->
    <!-- <input v-model="oldPassword"> -->
   <input v-model="newPassword">

</template>

<script setup>
import Card from '@/components/Card.vue'
import PageOne from './PageOne.vue'
import PageTwo from './PageTwo.vue'
import Cookies from 'js-cookie'
import { i18n } from '@/main.js'
import { ref, onMounted, computed, onUnmounted, watch } from 'vue'
import AppConfig from '@/appConfig'

var tabs = [PageOne, PageTwo]
const currentScreen = ref(0)
const getLocalStoageValue = ref('')
const getCookieValue = ref('')
const getUserLanguage = ref('')
const userName = ref('')

const oldPassword = ref('qsc236578')
const newPassword = ref('')



// 瓶子 瓶子的名字叫做:寶礦力
// 瓶子 瓶子的名字叫做:悅氏
const listen = ref({
  age:30,
  name:"John"
})
const name = ref('KG')

//deep true,用於監聽整個物件的內容變化
watch(listen,(newValue,oldValue)=>{
  if(newValue.age!=30){
    alert('is not 30')
  }
},{deep:true})

//物件內部監聽指定欄位參數
watch(()=>listen.value.age,(newV,oldV)=>{
  console.log(newV)
  console.log(oldV)
})
//直接監聽基本型態
watch(name,(newV,oldV)=>{
   console.log(newV)
  console.log(oldV)
})

function changeObject(){
  listen.value.age = 50
  name.value = "KAI"
}

onMounted(() => {
  getUserLanguage.value = getLanguage()
})

function switchScreen(page) {
  currentScreen.value = page
}

function getLanguage() {
  return navigator.language || navigator.userLanguage
}

function save() {
  localStorage.setItem('username', JSON.stringify({ age: 10, name: 'KG' })) //key:value
}
function getStorageByKey(key) {
  //    getLocalStoageValue.value=localStorage.getItem(key)
  getLocalStoageValue.value = JSON.parse(localStorage.getItem(key))['age']
}

function setCookie() {
  Cookies.set('username', 'KG', {
    expires: 7,
    secure: true,
    sameSite: 'Strict',
  })
}
function getCookie() {
  getCookieValue.value = Cookies.get('username')
}
function deleteCookie() {
  Cookies.remove('username')
}
</script>
