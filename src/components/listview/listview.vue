<template>
  <scroll-view class="listview" style="height:calc(100vh);" scroll-y="true" :scroll-into-view="groupID" @scroll="onSingerGroupScroll" :scroll-top="scrollTop">
    <ul>
      <li v-for="(group,index) of singerList" :key="group.title" class="list-group" :id="'group'+index">
        <h2 class="list-group-title">{{group.title}}</h2>
        <ul>
          <li class="list-group-item" v-for="(item,i) of group.singers" :key="item.id" @tap="selectItem(item)">
            <img class="avatar" :src="item.avatar">
            <span class="name">{{item.name}}</span>
          </li>
        </ul>
      </li>
    </ul>
    <div class="alphabet" @touchstart="handlerStart" @touchmove="handlerMove">
      <ul>
        <li v-for="(item,index) of alphabet" :key="index" :data-index="index"  :class="[currentIndex===index?'active':'item']">
          {{item}}
        </li>
      </ul>
    </div>
  </scroll-view>
</template>
<script type="text/ecmascript-6">
  import {getSingerList} from 'api/singer'
  const ANCHOR_HEIGHT = 36
  export default {
    name: 'listview',
    data () {
      return {
        singerList: [],
        alphabet: [],
        currentIndex: 0,
        groupID: ''
      }
    },
    created () {
      this.touch = {}
      this._getSingerList()
      setTimeout(() => {
        this._calculateHeight()
      }, 300)
    },
    methods: {
      _getSingerList () {
        getSingerList().then(res => {
          this.singerList = res.singer_list
          this.alphabet = this.singerList.map((group) => {
            return group.title.substring(0, 1)
          })
        })
      },
      _calculateHeight () {
        let groupHeight = []
        wx.createSelectorQuery()
          .selectAll('.list-group')
          .boundingClientRect()
          .exec(function (res) {
            let height = 0
            res[0].forEach(function (obj) {
              height += obj.height
              groupHeight.push(height)
            })
          })
        this.groupHeight = groupHeight
      },
      handlerStart (e) {
        this.touch.anchorIndex = e.mp.target.dataset.index
        this.groupID = 'group' + this.touch.anchorIndex
        this.touch.startY = e.mp.touches[0].pageY
      },
      handlerMove (e) {
        this.touch.endY = e.mp.touches[0].pageY
        let delta = (this.touch.endY - this.touch.startY) / ANCHOR_HEIGHT | 0
        this.touch.anchorIndex += delta
        this.groupID = 'group' + this.touch.anchorIndex
      },
      onSingerGroupScroll (e) {
        let groupHeight = this.groupHeight
        let scrollTop = e.mp.detail.scrollTop
        for (let i = 0; i < groupHeight.length - 1; i++) {
          let height1 = groupHeight[i]
          let height2 = groupHeight[i + 1]
          if (scrollTop >= height1 && scrollTop < height2) {
            this.currentIndex = i + 1
            return
          }
          this.currentIndex = 0
        }
      },
      selectItem (item) {
        this.$emit('select', item)
      }
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .listview
    position: relative
    top: 180rpx
    width: 100%
    height: 100%
    overflow: hidden
    background: $color-background
    .list-group
      padding-bottom: 60rpx
      .list-group-title
        height: 60rpx
        line-height: 60rpx
        padding-left: 40rpx
        font-size: $font-size-small
        color: $color-text-l
        background: $color-highlight-background
      .list-group-item
        display: flex
        align-items: center
        padding: 40rpx 0 0 60rpx
        .avatar
          width: 100rpx
          height: 100rpx
          border-radius: 50%
        .name
          margin-left: 40rpx
          color: $color-text-l
          font-size: $font-size-medium
    .alphabet
      position: fixed
      z-index: 30
      right: 0
      top: 58%
      transform: translateY(-50%)
      width: 40r0px
      padding: 40rpx 0
      border-radius: 20rpx
      text-align: center
      background: $color-background-d
      font-family: Helvetica
      .item
        padding: 6rpx
        line-height: 1
        color: $color-text-l
        font-size: $font-size-small
        .active
          color: $color-theme
    .list-fixed
      position: absolute
      top: 0
      left: 0
      width: 100%
      .fixed-title
        height: 60rpx
        line-height: 60rpx
        padding-left: 40rpx
        font-size: $font-size-small
        color: $color-text-l
        background: $color-highlight-background
    .loading-container
      position: absolute
      width: 100%
      top: 50%
      transform: translateY(-50%)
</style>
