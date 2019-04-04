<template>
  <div class="header">
      <img class="avatar" :src="avatarUrl" alt="user avatar">
      <h1 class="text">Hello</h1>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'MHeader',
    data () {
      return {
        nickName: 'Hello',
        avatarUrl: '/static/images/logo@3x.png'
      }
    },
    methods: {
      auth () {
        wx.getSetting({
          success (res) {
            if (!res.authSetting['scope.userInfo']) {
              wx.authorize({
                scope: 'scope.userInfo',
                success () {
                  wx.getUserInfo({
                    success (res) {
                      const userInfo = res.userInfo
                      this.nickName = userInfo.nickName
                      this.avatarUrl = userInfo.avatarUrl
                    }
                  })
                }
              })
            }
          }
        })
      }
    },
    beforeMount () {
      // 是否允许获取用户头像和昵称
      this.auth()
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
  .header
    position: relative
    height: 44px
    text-align: center
    color: $color-theme
    font-size: 0
    .avatar
      display: inline-block
      vertical-align: top
      margin-top: 6px
      width: 30px
      height: 32px
      margin-right: 9px
      background-size: 30px 32px
    .text
      display: inline-block
      vertical-align: top
      line-height: 44px
      font-size: $font-size-large
</style>