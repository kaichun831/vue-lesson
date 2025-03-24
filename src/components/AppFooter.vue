<template>
  <footer class="footer" v-if="show">
    <div class="wrapper">
      <p>© 2023 - All rights reserved</p>
    </div>
  </footer>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  show: {
    type: Boolean, //型態
    default: true, //預設值
    required: false, //必填與否
  },
})
</script>
<style scoped lang="scss">
.footer {
  background-color: #007979;
  color: white;
  text-align: center;
  padding: 10px;
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
