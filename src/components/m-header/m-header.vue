<template>
  <div class="header">
      <img class="icon" src="/static/images/logo@3x.png" alt="">
      <h1 class="text">Hello</h1>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'Header'
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
  .header
    position: relative
    height: 44px
    text-align: center
    color: $color-theme
    font-size: 0
    .icon
      display: inline-block
      vertical-align: top
      margin-top: 6px
      width: 30px
      height: 32px
      margin-right: 9px
      background-size: 30px 32px
    .text
      display: inline-block
      vertical-align: top
      line-height: 44px
      font-size: $font-size-large
</style>