<template>
  <div class="hello">
    <div>
      <audio  id="audio"  style="display: none" autoplay="autoplay" controls autobuffer >
        <source src="@/common/music/2.mp3"/>
      </audio>
      <mu-slide-left-transition>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </mu-slide-left-transition>


      <div class="tab">
        <router-link tag="div" class="tab-item" to="/home/sixone">
          <i class="iconfont icon-home"></i><span class="tab-link">610宿舍</span>
        </router-link>


        <router-link tag="div" class="tab-item" to="/home/diaobao">
          <i class="iconfont icon-mappin"></i><span class="tab-link">碉堡</span>

        </router-link>


        <router-link tag="div" class="tab-item" to="/home/sub">
          <i class="iconfont icon-airplane"></i><span class="tab-link">苏B</span>

        </router-link>


        <router-link tag="div" class="tab-item" to="/home/laowang">
          <i class="iconfont icon-report"></i><span class="tab-link">老王</span>

        </router-link>


        <router-link tag="div" class="tab-item" to="/home/jiagui">
          <i class="iconfont icon-user1-copy"></i><span class="tab-link">佳归</span>

        </router-link>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      changeSong() {
          console.log('结束第一首!');
      },
      playing() {
        console.log('播放中');
      }
    },
    mounted(){
      let audio = document.getElementById('audio');
      audio.addEventListener('play',function () {
        console.log('播放ing');
      });
      audio.addEventListener('ended',function () {
        console.log('结束了');
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "./../common/stylus/variable.styl"
  .tab
    position: fixed
    display: flex
    bottom: 0
    width: 100%
    text-align: center
    height: 100px
    line-height: 100px
    font-size: $font-size-small-s
    z-index: 50
    background-color $color-background-tab
    box-shadow: 2px 2px 2px
    .tab-item
      flex: 1
      height 100px
      display flex
      justify-items center
      align-items center
      text-align: center
      flex-direction column
      vertical-align middle
      &.router-link-active
        .iconfont
          color $color-tab-iconfont
        .tab-link
          color $color-tab-link
      .iconfont
        position absolute
        height 100px
        bottom 16px
        font-size: $size-iconfont-m
      .tab-link
        position: absolute;
        line-height: 100px;
        bottom: -30px;
        padding: 0;
        font-size $font-size-small
      .badge
        position absolute
        bottom 30px
        height 12px
        width 14px
        line-height 12px
        margin-left 20px
</style>
