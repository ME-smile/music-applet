<template>
  <div id="singerDetail-page">
    <music-list :songs="songs" :title="title" :bg-image="bgImage"></music-list>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import {getSingerDetail} from 'api/singer'
  import MusicList from 'components/music-list/music-list'
  export default {
    data () {
      return {
        songs: []
      }
    },
    onLoad () {
      this.singerID = this.singer.id
      this._getSingerDetail()
    },
    methods: {
      _getSingerDetail () {
        getSingerDetail(this.singer.id).then((res) => {
          this.songs = res.songs
        })
      }
    },
    computed: {
      title () {
        return this.singer.name
      },
      bgImage () {
        return this.singer.avatar
      },
      ...mapGetters([
        'singer'
      ])
    },
    watch: {
      songs () {
        return this.songs
      }
    },
    components: {
      MusicList
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/variable"
#singerDetail-page
  color: $color-theme
</style>