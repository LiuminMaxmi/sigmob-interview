<template>
  <div>
    <a-alert type="info">
      <template #message>
        <div>根据叶子节点id获取其在整个树中的路径信息</div>
      </template>
    </a-alert>
    <div class="flex">
      <span>目标id：</span><a-input-number v-model:value="id" />
    </div>
    <div class="flex">
      <span>路径：</span>
      <pre>{{ path }}</pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

// 有如下省市区信息
type CityData = {
  id: number;
  name: string;
  children?: CityData[];
};
const cityData: CityData[] = [
  {
    id: 1,
    name: '陕西省',
    children: [
      {
        id: 10,
        name: '西安市',
        children: [
          { id: 100, name: '新城区' },
          { id: 101, name: '长安区' },
          { id: 102, name: '雁塔区' },
        ],
      },
      {
        id: 11,
        name: '铜川市',
        children: [
          { id: 110, name: '王益区' },
          { id: 111, name: '印台区' },
          { id: 112, name: '耀州区' },
        ],
      },
    ],
  },
  {
    id: 2,
    name: '安徽省',
    children: [
      {
        id: 20,
        name: '合肥市',
        children: [
          { id: 200, name: '瑶海区' },
          { id: 201, name: '肥西县' },
          { id: 202, name: '肥东县' },
        ],
      },
      {
        id: 21,
        name: '芜湖市',
        children: [
          { id: 210, name: '镜湖区' },
          { id: 211, name: '鸠江区' },
          { id: 212, name: '南陵县' },
        ],
      },
    ],
  },
];

// 请实现一个方法，传入一个id值，如果在cityData中没有找到此id对应的信息则返回null，如果找到则返回此节点的枝干信息
// 比如：
// id为333，则返回null；
// id为10则返回[{ id: 1, name: '陕西省' }, { id: 10, name: '西安市' }]
// id为101则返回[{ id: 1, name: '陕西省' }, { id: 10, name: '西安市' }, { id: 101, name: '长安区' }]
function getPathById(
  cityData: CityData[],
  id: number
): { id: number; namne: string }[] | null {
  return null;
}

const id = ref(101);
const path = computed(() => getPathById(cityData, id.value) ?? '无数据');
</script>

<style scoped>
.flex {
  display: flex;
  align-items: center;
  margin: 10px 0;
  word-break: break-all;
}
pre {
  margin: 0;
}
</style>
