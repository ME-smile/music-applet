<template>
  <div class="music-list">
    <div class="back" @tap="back">
      <i class="icon-back"></i>
    </div>
    <h1 class="title">{{title}}</h1>
    <div class="bgImage" :style="bgStyle">
      <div class="play-wrapper">
        <div class="play">
          <i class="icon-play"></i>
          <span class="text">随机播放全部</span>
        </div>
      </div>
      <div class="filter"></div>
    </div>
    <div class="bgLayer" :style="scrollEffect"></div>
    <scroll-view class="list" scroll-y="true" :style="scrollTop">
      <div class="song-list-wrapper">
        <song-list></song-list>
      </div>
    </scroll-view>
  </div>
</template>
<script type="text/ecmascript-6">
  import SongList from 'components/song-list/song-list'
  const RESERVED_HEIGHT = 40
  export default {
    props: {
      bgImage: {
        type: String,
        default: ''
      },
      singerID: {
        type: String,
        default: ''
      },
      title: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        bgImgHeight: 0,
        scrollY: 0,
        scrollEffect: ''
      }
    },
    computed: {
      bgStyle () {
        return `background-image:url(${this.bgImage})`
      },
      scrollTop () {
        return `top:${this.bgImgHeight}px`
      }
    },
    onLoad () {
      this._getBgImgHeight()
    },
    methods: {
      back () {
        wx.navigateBack({
          url: '/pages/singer/main'
        })
      },
      _getBgImgHeight () {
        const that = this
        wx.createSelectorQuery()
          .select('.bgImage')
          .boundingClientRect(function (rect) {
            that.bgImgHeight = rect.height
          }).exec()
      },
      touchMoveHandler (e) {
        console.log(e.mp.touches[0].pageY)
      }
      // scrollHandler (pos) {
      //   console.log(pos)
      //   const that = this
      //   wx.createSelectorQuery()
      //     .select('.bgImage')
      //     .boundingClientRect(function (rect) {
      //       that.scrollY = pos.mp.detail.scrollTop
      //     }).exec()
      // }
    },
    watch: {
      scrollY (newY) {
        this.minTranslateY = -this.bgImgHeight + RESERVED_HEIGHT
        let tranlateY = Math.max(this.minTranslateY, newY)
        this.scrollEffect = `transform:translateY(${tranlateY}px)`
      }
    },
    components: {
      SongList
    }
  }
</script>
<style scpoed lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"

  .music-list
    position: fixed
    z-index: 100
    top: 0
    left: 0
    bottom: 0
    right: 0
    background: $color-background
    .back
      position: absolute
      top: 0
      left: 6px
      z-index: 50
      .icon-back
        display: block
        padding: 10px
        font-size: $font-size-large-x
        color: $color-theme
    .title
      position: absolute
      top: 0
      left: 10%
      z-index: 40
      width: 80%
      no-wrap()
      text-align: center
      line-height: 40px
      font-size: $font-size-large
      color: $color-text
    .bgImage
      position: relative
      width: 100%
      height: 0
      padding-top: 70%
      transform-origin: top
      background-size: cover
      .play-wrapper
        position: absolute
        bottom: 20px
        z-index: 50
        width: 100%
        .play
          box-sizing: border-box
          width: 135px
          padding: 7px 0
          margin: 0 auto
          text-align: center
          border: 1px solid $color-theme
          color: $color-theme
          border-radius: 100px
          font-size: 0
          .icon-play
            display: inline-block
            vertical-align: middle
            margin-right: 6px
            font-size: $font-size-medium-x
          .text
            display: inline-block
            vertical-align: middle
            font-size: $font-size-small
      .filter
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%
        background: rgba(7, 17, 27, 0.4)

    .bgLayer
      position: relative
      height: 100%
      background: $color-background
    .list
      position: fixed
      top: 0
      bottom: 0
      width: 100%
      background: $color-background
      .song-list-wrapper
        padding: 20px 30px
      .loading-container
        position: absolute
        width: 100%
        top: 50%
        transform: translateY(-50%)
</style>