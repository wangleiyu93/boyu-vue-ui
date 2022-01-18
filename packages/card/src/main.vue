<template>
  <div class="yu-card" :style='bodyStyle' :class="{'yu-card-boxshadow':shadow==='always','yu-card-hover-boxshadow':shadow==='hover'}">
      <div>
        <slot name="header">{{header}}</slot>
      </div>
      <slot></slot>
  </div>
</template>

<script>
export default {
    name:'YuCard',
    props:{
      header:{},
      bodyStyle:{},
      shadow:{
        type:String,
        default:'always'
      },
    }
}
</script>