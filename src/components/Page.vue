<template>
  <app-header :show="isShowHeader"></app-header>
  <main>
    <slot></slot>
  </main>
  <app-footer :show="isShowFooter"></app-footer>
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import { defineProps } from 'vue'
defineProps({
  isShowHeader: {
    type: Boolean,
    default: true,
  },
  isShowFooter: {
    type: Boolean,
    default: true,
  },
})
</script>
