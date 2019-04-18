<template>
  <scroll-view class="listview">
    <ul>
      <li v-for="(group,index) of singerList" :key="group.title" class="list-group">
        <h2 class="list-group-title">{{group.title}}</h2>
        <ul>
          <li class="list-group-item" v-for="(item,i) of group.singers" :key="item.id">
            <img class="avatar" :src="item.avatar">
            <span class="name">{{item.name}}</span>
          </li>
        </ul>
      </li>
    </ul>
    <div class="alphabet">
      <ul>
        <li v-for="(item,index) of alphabet" :key="index" 
          class="item"
          :class="{'current' : currentIndex===index}">
          {{item}}
        </li>
      </ul>
    </div>
  </scroll-view>
</template>
<script type="text/ecmascript-6">
  import {getSingerList} from 'api/singer'
  export default {
    name: 'listview',
    data () {
      return {
        singerList: [],
        alphabet: []
      }
    },
    created () {
      this._getSingerList()
    },
    methods: {
      _getSingerList () {
        getSingerList().then(res => {
          this.singerList = res.singer_list
          this.alphabet = this.singerList.map((group) => {
            return group.title.substring(0, 1)
          })
        })
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
        &.current
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