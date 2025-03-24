<template>
  <!-- <page :isShowHeader="true" :isShowFooter="false"> -->
  <!-- <router-view></router-view> -->
  <!-- </page> -->
  <!-- <main-screen></main-screen> -->

  <page :isShowHeader="isShowFooter" :isShowFooter="isShowHeader">
    <router-view></router-view>
  </page>
</template>

<script setup>
import Page from '@/components/Page.vue'
import { ref } from 'vue'
const isShowFooter = ref(true)
const isShowHeader = ref(false)


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
