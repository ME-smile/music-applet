<template>
  <div id="singer-page">
    <div class="pages-header">
        <m-header></m-header>
        <tab-bar></tab-bar>
    </div>
    <listview @select="selectSinger"></listview>
  </div>
</template>

<script>
  import MHeader from 'components/m-header/m-header'
  import TabBar from 'components/tabbar/tabbar'
  import listview from 'components/listview/listview'
  import {mapMutations} from 'vuex'
  export default{
    name: 'singer',
    components: {
      MHeader,
      TabBar,
      listview
    },
    methods: {
      selectSinger (singer) {
        let url = `/pages/singerDetail/main?id=${singer.id}`
        this.setSinger(singer)
        wx.navigateTo({
          url
        })
      },
      ...mapMutations({
        setSinger: 'SET_SINGER'
      })
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/variable"
#singer-page
  color: $color-theme
  .pages-header
    position: fixed
    left: 0
    right: 0
    top: 0
    bottom: 0
    z-index: 999
    width: 100%
    height: 180rpx
    background: $color-background
</style>