<template>
  <div class="tab">
    <router-link tag="div" class="tab-item" to="/recommend" @click="change">
      <span :class="[isActive ? 'active' : 'deactive']">推荐</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/singer">
      <span :class="[isActive ? 'active' : 'deactive']">歌手</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/rank">
      <span :class="[isActive ? 'active' : 'deactive']">排行</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/search">
      <span :class="[isActive ? 'active' : 'deactive']">搜索</span>
    </router-link>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'TabBar',
    data () {
      return {
        isActive: true
      }
    },
    methods: {
      change () {
        this.isActive = !this.isActive
      }
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .tab
    display: flex
    height: 44rpx
    line-height: 44rpx
    font-size: $font-size-medium
    padding-bottom: 15rpx
    .tab-item
      flex:1
      text-align: center
      color: $color-text-l
      .active
        color: $color-theme
        bottom: 8rpx
        border-bottom: 4rpx solid $color-theme
      .deactive
        color: $color-text-l
</style>
