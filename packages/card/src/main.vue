<template>
  <div
    class="yu-card"
    :style="bodyStyle"
    :class="[`yu-card-${shadow}-boxshadow`]"
  >
    <div v-if="$slots.header || header">
      <slot name="header">{{ header }}</slot>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'YuCard',
  props: {
    header: {},
    bodyStyle: {},
    shadow: {
      validator: function (value) {
        //这个值必须匹配下列字符串中的一个
        return ['always', 'hover', 'never'].indexOf(value) !== -1
      },
      default: 'always'
    }
  }
}
</script>