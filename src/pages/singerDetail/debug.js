<template>
  <div id="singerDetail-page">
    <h1>{{singerID}}</h1>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        singerID: 0
      }
    },
    onLoad: (options) => {
      this.singerID = options.id
      console.log(this.singerID)
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/variable"
#singerDetail-page
  color: $color-theme
</style>