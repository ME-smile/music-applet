<template>
  <div id="recommend-page">
    <div class="pages-header">
      <m-header></m-header>
      <tab-bar></tab-bar>
    </div>
    <div class="container">
      <scroll-view scroll-y="true">
        <div class="recommend" >
          <swiper indicator-dots indicator-color = "rgba(255, 255, 255, 0.5)" indicator-active-color="rgba(255, 255, 255, 0.8)" class="slider">
              <swiper-item v-for="item in recommends" :key="item.index" class="slider-item">
                <img :src="item.imgsrc">
              </swiper-item>
          </swiper>
          <div class="recommend-list">
           <h1 class="list-title">热门歌单推荐</h1>
             <ul>
               <li v-for="item in discList" class="item" :key="item.index">
                 <div class="icon">
                   <img :src="item.img_src">
                 </div>
                 <div class="text">
                   <h2 class="name" v-html="item.song_type"></h2>
                   <p class="desc" v-html="item.song_desc"></p>
                 </div>
               </li>
             </ul>
          </div>
        </div>
      </scroll-view>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import MHeader from 'components/m-header/m-header'
import TabBar from 'components/tabbar/tabbar'
import {getRecommendData} from 'api/recommend'
export default {
  data () {
    return {
      recommends: [],
      discList: []
    }
  },
  components: {
    MHeader,
    TabBar
  },
  created () {
    this._getRecommendData()
  },
  methods: {
    _getRecommendData () {
      getRecommendData().then((res) => {
        this.recommends = res.img_list
        this.discList = res.song_list
      })
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  #recommend-page
    color: $color-theme
    .pages-header
      position: fixed
      left: 0
      right: 0
      top: 0
      bottom: 0
      z-index: 999
      height: 160rpx
      background: $color-background
    .container
      margin-top: 180rpx
      .recommend
        .slider
          min-height: 1rpx
        .slider-item
          img
            display: block
            width: 100%
            height: 100%
        .recommend-list
          .list-title
            height: 130rpx
            line-height: 130rpx
            text-align: center
            font-size: $font-size-medium
            color: $color-theme
          .item
            display: flex
            box-sizing: border-box
            align-items: center
            padding: 0 40rpx 40rpx 40rpx
            .icon
              flex: 0 0 120rpx
              width: 120rpx
              padding-right: 40rpx
              img 
                width: 120rpx
                height: 120rpx
            .text
              display: flex
              flex-direction: column
              justify-content: center
              flex: 1
              line-height: 40rpx
              overflow: hidden
              font-size: $font-size-medium
              .name
                margin-bottom: 20rpx
                color: $color-text
              .desc
                color: $color-text-d
</style>