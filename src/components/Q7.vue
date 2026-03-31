<template>
  <a-alert type="info">
    <template #message>
      <div style="text-align: left;">
        <p>将下方数据存储在“树”这种数据结构中</p>
      </div>
    </template>
  </a-alert>
</template>
<script setup lang="ts">

const renderTree = {
  node: 'div',
  attr: {style: 'display: flex; flex-direction: column;'},
  children: [
    {
      node: 'p',
      attr: {style: '', text: ''},
      children: [
        {
          node: 'span',
          attr: {style: 'margin-right: 10px;'},
          children: [
            {
              node: 'i',
              attr: {type: 'font-seize: 12px;'},
            },
          ],
        }, {
          node: 'i',
          attt: {type: 'font-size: 12px;'},
        }
      ]
    }, {
      node: 'div',
      attr: {style: ''},
      children: [
        {
          node: 'p',
          attr: {style: 'padding: 10;', text: 'test'}
        }, {
          node: 'p',
          attr: {style: 'margin-right: 10px;'}
        }
      ]
    }
  ]
}

/**实现Node对象*/
class Node {

}

</script>