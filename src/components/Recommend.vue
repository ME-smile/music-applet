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
  export default {
    data () {
      return {
        recommends: [
          {
            'id': 20473,
            'linkUrl': 'https://y.qq.com/m/digitalbum/gold/index.html?openinqqmusic=1_video=true&id=6576190&g_f=shoujijiaodian',
            'picUrl': 'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1227761.jpg'
          },
          {
            'id': 20471,
            'linkUrl': 'http://y.qq.com/m/act/sfhd/237.html?ADTAG=banner&openinqqmusic=1',
            'picUrl': 'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1227283.jpg'
          },
          {
            'id': 20446,
            'linkUrl': 'https://y.qq.com/m/digitalbum/gold/index.html?openinqqmusic=1_video=true&id=6530396&g_f=shoujijiaodian',
            'picUrl': 'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1225534.jpg'
          },
          {
            'id': 20464,
            'linkUrl': 'https://y.qq.com/apg/gsfd/index.html?mbref=996.20117',
            'picUrl': 'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1225409.jpg'
          },
          {
            'id': 20498,
            'linkUrl': 'http://y.qq.com/w/album.html?albummid=003kO7Gb2E5HQu',
            'picUrl': 'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1228467.jpg'
          }
        ]
      }
    }
    // created () {
    //   this._getRecommendData()
    // },
    // methods: {
    //   _getRecommendData () {
    //     request({
    //       url: '/api/swiper.json',
    //       success (res) {
    //         this.recommends = res.data
    //       }
    //     })
    //   }
    // }
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
          height: 300rpx
</style>