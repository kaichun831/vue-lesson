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
  <button
    @click="
      () => {
        i18n.global.locale = 'ja'
      }
    "
  >
    切換語言
  </button>
  <button @click="getLanguage">取得語言</button>
  <h2>{{ getUserLanguage }}</h2>
</template>

<script setup>
import Card from '@/components/Card.vue'
import PageOne from './PageOne.vue'
import PageTwo from './PageTwo.vue'
import Cookies from 'js-cookie'
import { i18n } from '@/main.js'
import { ref, onMounted } from 'vue'

var tabs = [PageOne, PageTwo]
const currentScreen = ref(0)
const getLocalStoageValue = ref('')
const getCookieValue = ref('')
const getUserLanguage = ref('')

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
