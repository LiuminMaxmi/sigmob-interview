<template>
  <div>
    <a-alert message="图片依次加载" type="info" />
    <div class="container">
      <img v-for="src in imgs" :src="src" class="img" />
    </div>
  </div>
</template>

<script setup lang="ts">
const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 获取数据
function getUser(id: number): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`用户 - ${id}`), id % 2 ? 4000 : 1000)
  });
}

function delay(delayTime: number): Promise<void> {}

// 要求实现一个方法，可以依次获取用户信息，第一个获取后再获取第二个
async function getUsers(ids: number[]): Promise<void> {}
getUsers(ids);
// 在数据获取时，设定一个超时时间3秒，比如某一个用户信息获取如果加载超过3秒，则不再等待，直接去获取下一个用户信息。该如何实现
async function getUserWithTimeout(ids: number[], delayTime) {}
</script>

<style scoped>
.container {
  margin-top: 10px;
}
.img {
  width: 100px;
  margin: 0 10px 10px 0;
}
</style>
