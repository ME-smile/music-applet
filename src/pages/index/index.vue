<template>
  <div id="app">
    <m-header></m-header>
    <tab-bar></tab-bar>
  </div>
</template>

<script type="text/ecmascript-6">
import MHeader from 'components/m-header/m-header'
import TabBar from 'components/tabbar/tabbar'
export default {
  components: {
    MHeader,
    TabBar
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  #app
    color: $color-theme
</style>