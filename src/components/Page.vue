<template>
  <app-header v-if="isShowHeader"></app-header>
  <main>
    <slot></slot>
  </main>
  <app-footer v-if="isShowFooter"></app-footer>
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import router from '../router'
import { ref } from 'vue'

const isShowHeader = ref(true)
const isShowFooter = ref(true)

router.beforeEach((to, from, next) => {
  console.log('to', to.name)
  // console.log('from', from)
  if (to.name === 'About') {
    isShowHeader.value = false
    isShowFooter.value = false
  }
  next()
})
</script>
