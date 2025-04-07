<template>
    <button 
        style="height: 60px;"
    @click="$emit('void')">{{title}}</button>
</template>

<script setup>
import { defineProps,defineEmits } from 'vue'
defineProps(['title'])
defineEmits(['void'])
</script>