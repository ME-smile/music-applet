<template>
  <div id="singerDetail-page">
    <music-list :title="title" :bg-image="bgImage"></music-list>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import MusicList from 'components/music-list/music-list'
  export default {
    data () {
      return {
        songerID: ''
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