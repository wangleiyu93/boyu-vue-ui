<template>
  <div>
    <yu-card header='掌声' body-style='margin-bottom:10px'/>
    <yu-card shadow='hover' body-style='margin-bottom:10px'>
      <div slot='header'>我是头部</div>
    </yu-card>
    <yu-card body-style='padding:0;margin-bottom:10px'>
      <img class="image" src="https://img1.baidu.com/it/u=271170256,4258928764&fm=26&fmt=auto" alt="">
      <div>
        <h5>商品名称</h5>
        <button>buy</button>
      </div>
    </yu-card>
  </div>
</template>

<script>
export default {
  name: 'Card',
  components: {
  }
}
</script>

<style scoped>
.image{
  width: 100%;
  display: block;
}
</style>