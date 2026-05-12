<template>
  <div>
    <a-alert type="info">
      <template #message>
        <div style="text-align: left;">
          <p>计算一下下面三个容器的宽度</p>
        </div>
      </template>
    </a-alert>
    <div class="c-csscomponent">
      <div class="div1">div1</div>
      <div class="div2">div2</div>
      <div class="div3">div3</div>
    </div>
  </div>
</template>
<style scoped lang="less">
  .c-csscomponent {
    width: 900px;
    display: flex;
    margin-top: 30px ;

    .div1 {
      background-color: aqua;
      width: 300px;
      flex: 3 1 400px; 
    }

    .div2 {
      background-color: green;
      flex: 1 1 400px;
    }

    .div3 {
      background-color: red;
      flex: 1 1 200px;
    }
  }
</style>

