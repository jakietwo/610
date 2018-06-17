<template>
  <div class="hello">
    <div>
      <audio id="audio" style="display: none;height: 0" autoplay="autoplay" controls autobuffer>
        <source id="audioSource" src="@/common/music/2.mp3"/>
      </audio>
      <mu-fade-transition>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </mu-fade-transition>


      <div class="tab">
        <router-link tag="div" class="tab-item" to="/home/sixone">
          <i class="iconfont icon-home"></i><span class="tab-link"> 610宿舍</span>
        </router-link>
        <router-link tag="div" class="tab-item" to="/home/diaobao">
          <i class="iconfont icon-boy2" style="font-size: 28px"></i><span class="tab-link">碉堡</span>

        </router-link>


        <router-link tag="div" class="tab-item" to="/home/sub">
          <i class="iconfont icon-boy1" style="font-size: 28px"></i><span class="tab-link">苏B</span>

        </router-link>


        <router-link tag="div" class="tab-item" to="/home/laowang">
          <i class="iconfont icon-boy"></i><span class="tab-link">老王</span>

        </router-link>


        <router-link tag="div" class="tab-item" to="/home/jiagui">
          <i class="iconfont icon-boy3"></i><span class="tab-link">佳归</span>

        </router-link>

      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import music1 from '@/common/music/may1.mp3'
  import music2 from '@/common/music/3.mp3'
  import music3 from '@/common/music/may2.mp3'
  import music5 from '@/common/music/5.mp3'
  import music6 from '@/common/music/6.mp3'
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: '',
        currenList: 0,
        songList: [
          music1,
          music2
        ]
      }
    },
    components: {
      music1,
      music2
    },
    methods: {},
    mounted() {
      let vm = this;
      let audio = document.getElementById('audio');
      audio.addEventListener('play', function () {
        console.log('播放ing');
      });
      audio.addEventListener('ended', function () {
        let audioSource = document.getElementById('audioSource');
        if (vm.currenList ===  0 ){
          audioSource.src = music1;
          console.log(vm.currenList);
        }else if (vm.currenList === 1){
          audioSource.src = music2;
          console.log(vm.currenList+'000');
        }else if(vm.currenList === 2){
           audioSource.src = music3;
        }else if (vm.currenList === 3){
            audioSource.src = music5;
        }else if (vm.currenList === 4){
          audioSource.src = music6;
        }
        else {
          audioSource.src = music1;
          vm.currenList = -1;
        }
        vm.currenList ++ ;
        audio.load();
        audio.play();
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
    height: 50px
    line-height: 50px
    font-size: $font-size-small-s
    z-index: 100
    background-color $color-background-tab
    border-top 1px solid rgb(240, 240, 240)
    .tab-item
      flex: 1
      height 50px
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
        height 50px
        bottom 10px
        font-size 24px
      .icon-boy1
        bottom 8px
      .icon-boy
        bottom 12px
      .tab-link
        position: absolute;
        line-height: 100px;
        bottom: -40px;
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
