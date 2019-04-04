<template>
  <div id="app">
    <m-header></m-header>
    <tab-bar></tab-bar>
    <recommend></recommend>
  </div>
</template>

<script type="text/ecmascript-6">
import MHeader from 'components/MHeader'
import TabBar from 'components/TabBar'
import Recommend from 'components/Recommend'
export default {
  components: {
    MHeader,
    TabBar,
    Recommend
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  #app
    color: $color-theme
</style>