<template>
  <div class='swiper-wrapper'>
    <swiper class="swiper-container" indicator-dots="true" indicator-color="rgba(255, 255, 255, 0.4)" indicator-active-color="rgba(255, 255, 255, 0.9)" autoplay="true" >
      <swiper-item class='item' v-for='item in recommends' :key='item.index'>
        <a :href='item.linkUrl'>
          <img :src='item.picUrl'>
        </a>
      </swiper-item >
    </swiper>
  </div>
</template>
<script type='text/ecmascript-6'>
  // import {ERR_OK} from 'api/config'
  import getRecommendData from 'api/recommend'
  export default {
    data () {
      return {
        recommends: []
      }
    },
    created () {
      this._getRecommendData()
    },
    methods: {
      _getRecommendData () {
        const _this = this
        const callback = function (val) {
          _this.recommends = val
        }
        getRecommendData(callback)
        console.log(_this.recommends)
      }
    }
  }
</script>
<style scoped lang='stylus' rel='stylesheet/stylus'>
  .swiper-wrapper
    position: fixed
    width: 100%
    height: 40%vw
    .swiper-container
      width: 100%
      height: 100%
      .item
        position: absolute
        overflow: hidden
        width: 100%
        height: 100%
        a
          display: block
          text-decoration: none
        img
          display: block
          width: 100%
</style>