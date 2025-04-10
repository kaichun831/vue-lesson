<template>
  <!-- <page :isShowHeader="true" :isShowFooter="false"> -->
  <!-- <router-view></router-view> -->
  <!-- </page> -->
  <!-- <main-screen></main-screen> -->

  <page>
    <router-view></router-view>
  </page>
</template>

<script setup>

//寫法一
console.log(import.meta.env.VITE_API_URL)
//寫法二
const {VITE_API_URL,MODE  } = import.meta.env
console.log(import.meta.env)
if(MODE==='Production'){
  
}

import Page from '@/components/Page.vue'
import { ref } from 'vue'


function method1(params) {}
</script>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
