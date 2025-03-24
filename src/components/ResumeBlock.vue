<template>
  <div
    class="history"
    :style="number % 2 == 0 ? { backgroundColor: '#D9FFFF' } : { backgroundColor: '#FFD9D9' }"
  >
    <div class="history-title">
      <h2>{{ item.title }}</h2>
      <span>{{ number }}</span>
    </div>
    <p>{{ item.since }}</p>
    <p>{{ item.companyName }}</p>
    <br />
    <p>{{ item.content }}</p>
    <img v-for="(img, ind) in item.image" :key="ind" :src="img" alt="image" />
  </div>
</template>
<script setup>
import History from '@/response/History'
defineProps({
  number: {
    type: Number,
  },
  item: {
    type: History,
    required: true,
  },
})
</script>

<style lang="scss" scoped>
.history {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  .history-title {
    display: flex;
    justify-content: space-between;
  }
  h2 {
    font-size: 26px;
    color: #007979;
  }
  img {
    width: 100px;
    height: 100px;
  }
}
</style>
