<template>
  <div class="tab">
    <navigator url="/pages/index/main" class="tab-item" hover-class="router-link-active">
      <span class="tab-link">推荐</span>
    </navigator>
    <navigator url="/pages/singer/main" class="tab-item" hover-class="router-link-active">
      <span class="tab-link">歌手</span>
    </navigator>
    <navigator url="/pages/charts/main" class="tab-item" hover-class="router-link-active">
      <span class="tab-link">排行</span>
    </navigator>
    <navigator url="/pages/search/main" class="tab-item" hover-class="router-link-active">
      <span class="tab-link">搜索</span>
    </navigator>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'Tab'
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .tab
    position: relative
    display: flex
    height: 44px
    line-height: 44px
    font-size: $font-size-medium
    .tab-item
      flex:1
      text-align: center
      .tab-link
        padding-bottom: 5px
        color: $color-text-l
      &.router-link-active
        .tab-link
          color: $color-theme
          border-bottom: 2px solid $color-theme
</style>