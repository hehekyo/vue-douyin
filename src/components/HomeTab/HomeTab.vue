<template>
<div class="tab" :class="{ 'tab-transparent': isHome }" v-show="showHomeTab">
  <router-link tag="div" class="tab-item" to="/home">
    <span class="tab-link">首页</span>
  </router-link>
  <router-link tag="div" class="tab-item" to="/followed">
    <span class="tab-link">
      关注
      <span class="point1" :class="{ 'point1-plus': followedNewsNum > 99 }" v-show="followedNewsNum!==0">{{followedNewsNum > 99 ? '99+' : followedNewsNum}}</span>
    </span>
  </router-link>
  <router-link tag="div" class="tab-item" to="/uploadVideo">
    <span class="tab-btn">+</span>
  </router-link>
  <router-link tag="div" class="tab-item" to="/message">
    <span class="tab-link">
      消息
      <span class="point" v-if="hasMessageUnread"></span>
    </span>
  </router-link>
  <router-link tag="div" class="tab-item" to="/profile/me">
    <span class="tab-link">我</span>
  </router-link>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    isHome () {
      return this.$route.name === 'home'
    },
    showHomeTab () {
      const paths = ['/home', '/followed', '/message', '/profile/me/video', '/profile/me/videoAndDesc', '/profile/me/likes']
      const route = this.$route
      for (let i = 0; i < paths.length; i++) {
        if (route.path.indexOf(paths[i]) !== -1) return true
      }
      return false
    },
    hasMessageUnread () {
      let privateLetterNum = 0
      for (let value of this.allPrivateLetter) {
        privateLetterNum += value.unread
      }
      let totalUnreadNum = this.fanUnreadNum + this.byLikeUnreadNum + this.byCommentUnreadNum + this.atNum + privateLetterNum
      if (totalUnreadNum === 0) {
        return false
      } else {
        return true
      }
    },
    ...mapGetters([
      'fanUnreadNum',
      'byLikeUnreadNum',
      'byCommentUnreadNum',
      'atNum',
      'followedNewsNum',
      'allPrivateLetter'
    ])
  },
  methods: {
    uploadVideo () {
      this.$emit('uploadVideo')
    }
  }
}
</script>

<style lang='stylus' scoped>
@import '~@/common/stylus/variable'
.tab
  border-top .5px solid $color-divide
  background rgb(26, 27, 32)
  display flex
  height 44px
  line-height 44px
  font-size $font-size-medium
  transition background 0.5s
  .tab-item
    position relative
    flex 1
    text-align center
    .tab-btn
      font-weight 600
      color #000
      padding 5px 15px
      border-radius 5px
      background #fff
    .tab-link
      padding-bottom 10px
      color $color-desc
      position relative
      .point
        position absolute
        right -12px
        top 1px
        border-radius 50%
        height 8px
        width 8px
        background #face15
      .point1
        position absolute
        right -16px
        top -4px
        border-radius 50%
        height 16px
        width 16px
        background #face15
        text-align center
        line-height 16px
        color $color-background
        font-size $font-size-small
        font-weight 600
      .point1-plus
        right -28px
        border-radius 8px
        width 26px
    &.router-link-active
      .tab-link
        color $color-white
        border-bottom 2px solid $color-white
.tab-transparent
  background rgba(26, 27, 32, 0)
</style>
