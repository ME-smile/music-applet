<template>
  <div class="song-list">
    <ul>
      <li v-for="(song,index) in songs" class="item" :key="index">
        <div class="content">
          <h2 class="name">{{song.name}}</h2>
          <p class="desc" v-text="song.singer + '·' +song.album"></p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script type="text/ecmascript-6">
  import {mapGetters} from 'vuex'
  import {getSingerDetail} from 'api/singer'
  export default {
    props: {
      singerID: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        songs: []
      }
    },
    onLoad () {
      this._getSingerDetail()
    },
    onUnload () {
      this.songs = [] // 清除数据
    },
    methods: {
      _getSingerDetail () {
        console.log(this.singer.id)
        getSingerDetail(this.singer.id).then((res) => {
          this.songs = res.songs
          console.log('我被执行了')
        })
      }
    },
    computed: {
      ...mapGetters([
        'singer'
      ])
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
  .song-list
    .item
      display: flex
      align-items: center
      box-sizing: border-box
      height: 64px
      font-size: $font-size-medium
      .content
        flex: 1
        line-height: 20px
        overflow: hidden
        .name
          no-wrap()
          color: $color-text
        .desc
          no-wrap()
          margin-top: 4px
          color: $color-text-d
</style>