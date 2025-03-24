<template>
  <div>
    <h1>About Screen</h1>
    <resume-block
      v-for="(it, index) in historyRef"
      :key="index"
      :item="it"
      :number="index"
    ></resume-block>
    <!-- <ResumeBlock v-for="(it, index) in history" :key="index" :item="it" :number="index" /> -->
  </div>
</template>

<script setup>
import History from '@/response/History'
import ResumeBlock from '@/components/ResumeBlock.vue'
import { onMounted, ref } from 'vue'
const historyRef = ref([])
onMounted(() => {
  const originData = [
    {
      title: 'FLUTTER ENGINEER',
      since: 'SINCE 2023/05 - NOW',
      companyName: 'CCCC有限公司',
      content:
        '從0開始打造產品，提供多國業主使用，提供多種APP服務，如：APP開發、APP維護等等。※擁有多年APP開發經驗，熟悉多種APP開發流程，並且擅長多國語言翻譯。',
      image: ['././public/pretty.png', '././public/pretty.png'],
    },
    {
      title: 'FLUTTR',
      since: 'SINCE 2023/05 - NOW',
      companyName: 'XXXX有限公司',
      content:
        '從0開始打造產品，提供多國業主使用，提供多種APP服務，如：APP開發、APP維護等等。※擁有多年APP開發經驗，熟悉多種APP開發流程，並且擅長多國語言翻譯。',
      image: ['././public/pretty.png', '././public/pretty.png'],
    },
    {
      title: 'FLUTTER ENGINEER',
      since: 'SINCE 2023/05 - NOW',
      companyName: 'CCCC有限公司',
      content:
        '從0開始打造產品，提供多國業主使用，提供多種APP服務，如：APP開發、APP維護等等。※擁有多年APP開發經驗，熟悉多種APP開發流程，並且擅長多國語言翻譯。',
      image: ['././public/pretty.png', '././public/pretty.png'],
    },
    {
      title: 'FLUTTER ENGINEER',
      since: 'SINCE 2023/05 - NOW',
      companyName: 'CCCC有限公司',
      content:
        '從0開始打造產品，提供多國業主使用，提供多種APP服務，如：APP開發、APP維護等等。※擁有多年APP開發經驗，熟悉多種APP開發流程，並且擅長多國語言翻譯。',
      image: ['././public/pretty.png', '././public/pretty.png'],
    },
    {
      title: 'FLUTTER ENGINEER',
      since: 'SINCE 2023/05 - NOW',
      companyName: 'CCCC有限公司',
      content:
        '從0開始打造產品，提供多國業主使用，提供多種APP服務，如：APP開發、APP維護等等。※擁有多年APP開發經驗，熟悉多種APP開發流程，並且擅長多國語言翻譯。',
      image: ['././public/pretty.png', '././public/pretty.png'],
    },
    {
      title: 'FLUTTER ENGINEER',
      since: 'SINCE 2023/05 - NOW',
      companyName: 'CCCC有限公司',
      content:
        '從0開始打造產品，提供多國業主使用，提供多種APP服務，如：APP開發、APP維護等等。※擁有多年APP開發經驗，熟悉多種APP開發流程，並且擅長多國語言翻譯。',
      image: ['././public/pretty.png', '././public/pretty.png'],
    },
    {
      title: 'FLUTTER ENGINEER',
      since: 'SINCE 2023/05 - NOW',
      companyName: 'CCCC有限公司',
      content:
        '從0開始打造產品，提供多國業主使用，提供多種APP服務，如：APP開發、APP維護等等。※擁有多年APP開發經驗，熟悉多種APP開發流程，並且擅長多國語言翻譯。',
      image: ['././public/pretty.png', '././public/pretty.png'],
    },
    {
      title: 'FLUTTER ENGINEER',
      since: 'SINCE 2023/05 - NOW',
      companyName: 'CCCC有限公司',
      content:
        '從0開始打造產品，提供多國業主使用，提供多種APP服務，如：APP開發、APP維護等等。※擁有多年APP開發經驗，熟悉多種APP開發流程，並且擅長多國語言翻譯。',
      image: ['././public/pretty.png', '././public/pretty.png'],
    },
    {
      title: 'FLUTTER ENGINEER',
      since: 'SINCE 2023/05 - NOW',
      companyName: 'CCCC有限公司',
      content:
        '從0開始打造產品，提供多國業主使用，提供多種APP服務，如：APP開發、APP維護等等。※擁有多年APP開發經驗，熟悉多種APP開發流程，並且擅長多國語言翻譯。',
      image: ['././public/pretty.png', '././public/pretty.png'],
    },
    {
      title: 'FLUTTER ENGINEER',
      since: 'SINCE 2023/05 - NOW',
      companyName: 'CCCC有限公司',
      content:
        '從0開始打造產品，提供多國業主使用，提供多種APP服務，如：APP開發、APP維護等等。※擁有多年APP開發經驗，熟悉多種APP開發流程，並且擅長多國語言翻譯。',
      image: ['././public/pretty.png', '././public/pretty.png'],
    },
  ]
  let historyArray = []
  for (let i = 0; i < originData.length; i++) {
    let history = new History(
      originData[i].title,
      originData[i].since,
      originData[i].companyName,
      originData[i].content,
      originData[i].image,
    )
    historyArray.push(history)
  }
  historyRef.value = historyArray
})
</script>

<style scoped lang="scss"></style>
