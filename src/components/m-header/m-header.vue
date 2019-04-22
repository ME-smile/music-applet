<template>
  <div class="header">
      <img class="icon" src="/static/images/logo@3x.png">
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
    height: 88rpx
    text-align: center
    color: $color-theme
    font-size: 0
    .icon
      display: inline-block
      vertical-align: top
      margin-top: 12rpx
      width: 60rpx
      height: 64rpx
      margin-right: 18rpx
      background-size: 60rpx 64rpx
    .text
      display: inline-block
      vertical-align: top
      line-height: 88rpx
      font-size: $font-size-large
</style>