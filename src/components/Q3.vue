<template>
  <div>
    <a-alert type="info">
      <template #message>
        <div>
          某班级考试成绩按非严格递增顺序记录于整数数组 scores，请返回目标成绩
          target 的出现次数。
        </div>
        <br />
        <div>示例 1：</div>
        <div>输入: scores = [2, 2, 3, 4, 4, 4, 5, 6, 6, 8], target = 4</div>
        <div>输出：3</div>
        <br />
        <div>示例 2：</div>
        <div>输入: scores = [1, 2, 3, 5, 7, 9], target = 6</div>
        <div>输出：0</div>
      </template>
    </a-alert>
    <div class="flex">scores: {{ scores }}</div>
    <div class="flex">
      <span>目标值：</span><a-input-number v-model:value="target" />
    </div>
    <div class="flex"><span>正确结果：</span>{{ result }}</div>
    <div class="flex"><span>你的结果：</span>{{ yourResult }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const scores = Array.from({ length: 20 })
  .map((_, i) => Math.floor(Math.random() * 10))
  .sort((a, b) => a - b);

const target = ref(null);
const result = computed(() => scores.filter((v) => v === target.value).length);

function search(scores: number[], target: number | null): number {
  return -1;
}
const yourResult = computed(() => search(scores, target.value));
</script>

<style scoped>
.flex {
  display: flex;
  align-items: center;
  margin: 10px 0;
}
</style>
