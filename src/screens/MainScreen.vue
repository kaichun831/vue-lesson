<template>
  <h1>Main</h1>
  <h1>{{ fullName }}</h1>
  <input v-model="account" />
  <input v-model="password" />
  <button @click="routeToBackend">Login</button>
  <!-- <button @click="routeToAbout">To About</button> -->
</template>

<script setup>
import Page from '@/components/Page.vue'
import Card from '@/components/Card.vue'
import { onMounted, ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import AppConfig from '../appConfig'
const router = useRouter()
const lastName = ref('')
const firstName = ref('')
const account = ref('')
const password = ref('')

function getfullName() {
  return `${firstName.value} ${lastName.value}`
}

// onMounted(() => {
//   console.log('Mounted')
//   setTimeout(() => {
//     lastName.value = 'Wang'
//     firstName.value = 'John'
//   }, 5000)
// })

const fullName = computed(() => {
  // setTimeout(() => {
  //   lastName.value = 'Wang'
  //   firstName.value = 'John'
  // }, 5000)
  // console.log('computed')
  return `${firstName.value} ${lastName.value}`
})

function routeToAbout() {
  // router.push('/about');
  router.push({ name: 'About' })
}

function routeToBackend() {
  if (account.value === '' || password.value === '') {
    alert('Please input first name and last name')
    return
  }
  console.log('查詢使用者是否存在於資料庫')
  setTimeout(() => {
    console.log('成功登陸')
    AppConfig.getInstance().setIsLogin(true)
    router.push({ name: 'Backend' })
  }, 5000)
}
</script>

<style scoped lang="scss">
.active {
  color: red;
}
.pStyle {
  font-size: 40px;
}

.currentClass {
  color: blue;
}

.errorClass {
  color: green;
}
</style>
