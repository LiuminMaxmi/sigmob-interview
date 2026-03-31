<template>
  <a-alert type="info">
    <template #message>
      <div style="text-align: left;">
        <p>写一个任务处理器，TaskManager</p>
        <p>1、将随机产生的异步任务每5个一批进行处理</p>
        <p>2、每一批任务完成后，才进行下一批</p>
        <p>3、如果队列中任务不足5个，则等待10s将剩余任务处理完</p>
      </div>
    </template>
  </a-alert>
</template>
<script setup lang="ts">

function getTask() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Math.random())
    }, Math.random() * 1000)
  })
}


function productTask(listenter: (task: any) => void) {
  let timer: any = null
    timer = setTimeout(() => {
      const task = getTask()
      listenter(task)
      clearTimeout(timer)
      timer = null
      productTask(listenter)
    }, Math.random() * 1000)
}



/**TaskManager */
class TaskManager {
  queue: Promise<any>[] = []
  push(task: Promise<any>) {
    this.queue.push(task)
  }

  start(callback: (batchNum: number, results: Array<Number>) => void) {
  
  }
}

const taskManager = new TaskManager()

productTask((task) => {
  console.log("productTask")
  taskManager.push(task)
})

taskManager.start((batchNum, results) => {
  console.log("batchEnd")
  console.log(batchNum)
  console.log(results)
})

</script>