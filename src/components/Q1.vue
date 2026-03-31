<template>
  <div>
    <div style="margin-bottom: 10px;">
      <a-button @click="add" block>Add</a-button>
    </div>
    <div class="container">
      <div v-for="n in count" class="item">
        {{ n }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, watchEffect, nextTick } from 'vue';

const count = ref(22);
const add = () => {
  count.value++
  setTimeout(() => {
    console.log('setTimeout:', count.value)
  })
  nextTick(() => {
    console.log('nextTick:', count.value)
  })
  console.log('count:', count.value)
  count.value++
  console.log('count:', count.value)
}
watch(count, v => {
  console.log('watch:', v)
})
watchEffect(() => {
  console.log('watchEffect', count.value)
})
</script>

<style scoped>
.container {
  border: 5px dashed #ccc;
}
.item {
  height: 50px;
  line-height: 50px;
  border: 2px solid #eee;
}
</style>
