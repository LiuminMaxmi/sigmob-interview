<template>
  <a-tabs v-model:activeKey="tab">
    <a-tab-pane key="1" tab="题目1"></a-tab-pane>
    <a-tab-pane key="2" tab="题目2"></a-tab-pane>
    <a-tab-pane key="3" tab="题目3"></a-tab-pane>
    <a-tab-pane key="4" tab="题目4"></a-tab-pane>
    <a-tab-pane key="5" tab="题目5"></a-tab-pane>
    <a-tab-pane key="6" tab="题目6"></a-tab-pane>
    <a-tab-pane key="7" tab="题目7"></a-tab-pane>
  </a-tabs>
  <div class="content">
    <Q1 v-if="tab === '1'"></Q1>
    <Q2 v-if="tab === '2'"></Q2>
    <Q3 v-if="tab === '3'"></Q3>
    <Q4 v-if="tab === '4'"></Q4>
    <Q5 v-if="tab === '5'"></Q5>
    <Q6 v-if="tab === '6'"></Q6>
    <Q7 v-if="tab === '7'"></Q7>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Q1 from './components/Q1.vue'
import Q2 from './components/Q2.vue'
import Q3 from './components/Q3.vue'
import Q4 from './components/Q4.vue'
import Q5 from './components/Q5.vue'
import Q6 from './components/Q6.vue'
import Q7 from './components/Q7.vue'

const tab = ref('1');
</script>

<style scoped></style>
