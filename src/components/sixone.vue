<template>
  <div>
    <div ref="wrapper" class="wrapper">
      <div>
        <mu-carousel class="imageWrapper" transition="fade">
          <mu-carousel-item>
            <img class="image1 img1" :src="carouselImg4">
          </mu-carousel-item>
          <mu-carousel-item>
            <img class="image1" :src="carouselImg2">
          </mu-carousel-item>
          <mu-carousel-item>
            <img class="image1" :src="carouselImg3">
          </mu-carousel-item>
          <mu-carousel-item>
            <img class="image1" :src="carouselImg1">
          </mu-carousel-item>
        </mu-carousel>

        <div>
          <mu-alert class="alert" >
           致敬我们四年610，时光荏苒，青春不老
          </mu-alert>
        </div>

        <mu-container class="cardWrapper">
          <mu-card style="width: 100%; max-width: 441px; margin: 0 auto;">
            <mu-card-header title="青春不散场" sub-title="毕业季">
            </mu-card-header>
            <mu-card-media title="" sub-title="毕业 自由">
              <img src="@/common/image/610/14.jpg">
            </mu-card-media>
            <mu-card-title title="2017.6.10" sub-title="花江图书馆"></mu-card-title>
            <mu-card-text class="text" style="font-size: 14px">
              要再见了，再骄傲一次 <br/>
              要再见了，再正经一次 <br/>
              然而，下一次再见，不再是九月初的开学，而是漫长的想念
            </mu-card-text>
          </mu-card>
        </mu-container>

        <mu-container class="cardWrapper">
          <mu-card style="width: 100%; max-width: 441px; margin: 0 auto;">
            <mu-card-header title="愿一切安好" sub-title="毕业季">
            </mu-card-header>
            <mu-card-media title="" sub-title="武士 深沉">
              <img src="@/common/image/610/6.jpg">
            </mu-card-media>
            <mu-card-title title="2017.6.10" sub-title="花江相思湖"></mu-card-title>
            <mu-card-text class="text" style="font-size: 14px">
              晴空万里的下午 <br/>
              和约聚在一起 <br/>
              把相思湖的美丽印在脑海，印在青春
            </mu-card-text>
          </mu-card>
        </mu-container>

        <mu-container class="cardWrapper">
        <mu-card style="width: 100%; max-width: 441px; margin: 0 auto;">
          <mu-card-header title="青年晚报" sub-title="毕业季">
          </mu-card-header>
          <mu-card-media title="" sub-title="夕阳 少年">
            <img src="@/common/image/610/8.jpg">
          </mu-card-media>
          <mu-card-title title="2017.6.10" sub-title="网球馆"></mu-card-title>
          <mu-card-text class="text" style="font-size: 14px">
            正德厚学 <br/>
            笃行致新 <br/>
            幽蓝的天空，少年的意志，起飞的理想！
          </mu-card-text>
        </mu-card>
      </mu-container>

        <mu-container class="cardWrapper">
          <mu-card style="width: 100%; max-width: 441px; margin: 0 auto;">
            <mu-card-header title="日不落之晖" sub-title="毕业季">
            </mu-card-header>
            <mu-card-media title="" sub-title="落日 希望">
              <img src="@/common/image/610/9.jpg">
            </mu-card-media>
            <mu-card-title title="2017.6.10" sub-title="网球场"></mu-card-title>
            <mu-card-text class="text" style="font-size: 14px">
              冷酷 坚韧 <br/>
              从心 出发 <br/>
              希望 理想！
            </mu-card-text>
          </mu-card>
        </mu-container>

        <mu-container class="cardWrapper">
        <mu-card style="width: 100%; max-width: 441px; margin: 0 auto;">
          <mu-card-header title="夜色之光" sub-title="毕业季">
          </mu-card-header>
          <mu-card-media title="" sub-title="奔跑 ">
            <img src="@/common/image/610/10.jpg">
          </mu-card-media>
          <mu-card-title title="2017.6.10" sub-title="网球馆"></mu-card-title>
          <mu-card-text class="text" style="font-size: 14px">
            四人游 <br/>
            不忘 <br/>
            既是终点也是起点！
          </mu-card-text>
        </mu-card>
      </mu-container>

        <mu-container class="cardWrapper">
          <mu-card style="width: 100%; max-width: 441px; margin: 0 auto;">
            <mu-card-header title="夜幕降临" sub-title="毕业季">
            </mu-card-header>
            <mu-card-media >
              <img src="@/common/image/610/11.jpg">
            </mu-card-media>
            <mu-card-title title="2017.6.10" sub-title="网球馆"></mu-card-title>
          </mu-card>
        </mu-container>

        <mu-container class="cardWrapper">
          <mu-card style="width: 100%; max-width: 441px; margin: 0 auto;">
            <mu-card-header title="学识海洋" sub-title="毕业季">
            </mu-card-header>
            <mu-card-media title="" sub-title="知识 光明 未来">
              <img src="@/common/image/610/15.jpg">
            </mu-card-media>
            <mu-card-title title="2017.6.10" sub-title="图书馆"></mu-card-title>
            <mu-card-text class="text" style="font-size: 14px">
              不想装尼玛文艺了 自己随便看！<br/>
              <span style="color: red;font-size: 16px" >不往下看就吃屎</span>
            </mu-card-text>
          </mu-card>
        </mu-container>

        <mu-container class="cardWrapper">
          <mu-card style="width: 100%; max-width: 441px; margin: 0 auto;">
            <mu-card-header title="猥琐至极" sub-title="毕业季">
            </mu-card-header>
            <mu-card-media title="" sub-title="搞笑 装X">
              <img src="@/common/image/610/16.jpg">
            </mu-card-media>
            <mu-card-title title="2017.6.10" sub-title="图书馆"></mu-card-title>
            <mu-card-text class="text" style="font-size: 14px">
              610首次表演共同'尿'time<br/>
              害羞的老王
            </mu-card-text>
          </mu-card>
        </mu-container>

        <mu-container class="cardWrapper">
          <mu-card style="width: 100%; max-width: 441px; margin: 0 auto;">
            <mu-card-header title="610之家" sub-title="毕业季">
            </mu-card-header>
            <mu-card-media title="" sub-title="">
              <img src="@/common/image/610/17.jpg">
            </mu-card-media>
            <mu-card-title title="2017.6.10" sub-title="610"></mu-card-title>
            <mu-card-text class="text" style="font-size: 14px">
              23岁的我们坐在这里<br/>
              深情的目光望去，都是自己18岁的模样！<br/>
              当时光的列车远去，渐行渐远的车辙，默默带走了属于4个人的青春，却指引着一路追随的我们！
            </mu-card-text>
          </mu-card>
        </mu-container>

        <mu-container class="cardWrapper">
          <mu-card style="width: 100%; max-width: 441px; margin: 0 auto;">
            <mu-card-header title="610阳台" sub-title="毕业季">
            </mu-card-header>
            <mu-card-media title="" sub-title="">
              <img src="@/common/image/610/19.jpg">
            </mu-card-media>
            <mu-card-title title="2017.6.10" sub-title="露天阳台"></mu-card-title>
            <mu-card-text class="text" style="font-size: 14px">
              任时光匆匆，让往事一切随风<br/>
              任她风情万种，任她岁月相送<br/>
            </mu-card-text>
          </mu-card>
        </mu-container>

        <mu-container class="cardWrapper">
          <mu-card style="width: 100%; max-width: 441px; margin: 0 auto;">
            <mu-card-header title="610阳台" sub-title="毕业季">
            </mu-card-header>
            <mu-card-media title="" sub-title="">
              <img src="@/common/image/610/20.jpg">
            </mu-card-media>
            <mu-card-title title="2017.6.10" sub-title="露天阳台"></mu-card-title>
            <mu-card-text class="text" style="font-size: 14px">
              最可惜的是没有在那个大雨天，我们一起去捉泥鳅
              <br/>QAQ<br/>
              大哥哥，你说是吗？
            </mu-card-text>
          </mu-card>
        </mu-container>

        <mu-container class="cardWrapper">
          <mu-card style="width: 100%; max-width: 441px; margin: 0 auto;">
            <mu-card-header title="610阳台" sub-title="毕业季">
            </mu-card-header>
            <mu-card-media title="" sub-title="">
              <img src="@/common/image/610/22.jpg">
            </mu-card-media>
            <mu-card-title title="2017.6.10" sub-title="露天阳台"></mu-card-title>
            <mu-card-text class="text" style="font-size: 14px">
              刀客，武士，这一刻，由我们演绎
              <br/>
              江湖再见,
              愿相见于江湖，愿不忘于江湖
            </mu-card-text>
          </mu-card>
        </mu-container>

        <mu-container class="cardWrapper">
          <mu-card style="width: 100%; max-width: 441px; margin: 0 auto;">
            <mu-card-header title="610阳台" sub-title="毕业季">
            </mu-card-header>
            <mu-card-media title="" sub-title="">
              <img src="@/common/image/610/23.jpg">
            </mu-card-media>
            <mu-card-title title="2017.6.10" sub-title="露天阳台"></mu-card-title>
            <mu-card-text class="text" style="font-size: 14px">
              你怎么回事？老弟
              <br/>

            </mu-card-text>
          </mu-card>
        </mu-container>

        <mu-container class="cardWrapper">
          <mu-card style="width: 100%; max-width: 441px; margin: 0 auto;">
            <mu-card-header title="田径场" sub-title="毕业季">
            </mu-card-header>
            <mu-card-media title="" sub-title="">
              <img src="@/common/image/610/24.jpg">
            </mu-card-media>
            <mu-card-title title="2017.6.10" sub-title="观众席"></mu-card-title>
            <mu-card-text class="text" style="font-size: 14px">
              来，给爸爸打个招呼
              <br/>

            </mu-card-text>
          </mu-card>
        </mu-container>

        <mu-container class="cardWrapper">
          <mu-card style="width: 100%; max-width: 441px; margin: 0 auto;">
            <mu-card-header title="田径场" sub-title="毕业季">
            </mu-card-header>
            <mu-card-media title="" sub-title="">
              <img src="@/common/image/610/25.jpg">
            </mu-card-media>
            <mu-card-title title="2017.6.10" sub-title="观众席"></mu-card-title>
            <mu-card-text class="text" style="font-size: 14px">
              看一眼青春，偷偷的看一眼
              <br/>

            </mu-card-text>
          </mu-card>
        </mu-container>

        <mu-container class="cardWrapper">
          <mu-card style="width: 100%; max-width: 441px; margin: 0 auto;">
            <mu-card-header title="田径场" sub-title="毕业季">
            </mu-card-header>
            <mu-card-media title="" sub-title="">
              <img src="@/common/image/610/26.jpg">
            </mu-card-media>
            <mu-card-title title="2017.6.10" sub-title="跑道"></mu-card-title>
            <mu-card-text class="text" style="font-size: 14px">
              233，你以为这是彩排？
              <br/>
              不，人生没有演习
            </mu-card-text>
          </mu-card>
        </mu-container>

        <mu-container class="cardWrapper">
          <mu-card style="width: 100%; max-width: 441px; margin: 0 auto;">
            <mu-card-header title="田径场" sub-title="毕业季">
            </mu-card-header>
            <mu-card-media title="" sub-title="">
              <img src="@/common/image/610/27.jpg">
            </mu-card-media>
            <mu-card-title title="2017.6.10" sub-title="跑道"></mu-card-title>
            <mu-card-text class="text" style="font-size: 14px">
              大佬在训话，某领导在考察
              <br/>
            </mu-card-text>
          </mu-card>
        </mu-container>

        <mu-container class="cardWrapper">
        <mu-card style="width: 100%; max-width: 441px; margin: 0 auto;">
          <mu-card-header title="田径场" sub-title="毕业季">
          </mu-card-header>
          <mu-card-media title="" sub-title="">
            <img src="@/common/image/610/28.jpg">
          </mu-card-media>
          <mu-card-title title="2017.6.10" sub-title="跑道"></mu-card-title>
          <mu-card-text class="text" style="font-size: 14px">
            旁白：你看你妈呢？崽种<br/>
            十年后，会是怎样？
            <br/>
          </mu-card-text>
        </mu-card>
      </mu-container>

        <mu-container class="cardWrapper">
          <mu-card style="width: 100%; max-width: 441px; margin: 0 auto;">
            <mu-card-header title="田径场" sub-title="毕业季">
            </mu-card-header>
            <mu-card-media title="" sub-title="">
              <img src="@/common/image/610/29.jpg">
            </mu-card-media>
            <mu-card-title title="2017.6.10" sub-title="跑道"></mu-card-title>
            <mu-card-text class="text" style="font-size: 14px">
              123，青春就是蓝天白云，晴空万里<br/>
              我们有好心情
              <br/>
            </mu-card-text>
          </mu-card>
        </mu-container>

        <mu-container class="cardWrapper">
          <mu-card style="width: 100%; max-width: 441px; margin: 0 auto;">
            <mu-card-header title="训练场" sub-title="毕业季">
            </mu-card-header>
            <mu-card-media title="" sub-title="">
              <img src="@/common/image/610/30.jpg">
            </mu-card-media>
            <mu-card-title title="2017.6.10" sub-title="跑道"></mu-card-title>
            <mu-card-text class="text" style="font-size: 14px">
              浪起来，荡起来<br/>

              <br/>
            </mu-card-text>
          </mu-card>
        </mu-container>

        <mu-container class="cardWrapper">
          <mu-card style="width: 100%; max-width: 441px; margin: 0 auto;">
            <mu-card-header title="训练场" sub-title="毕业季">
            </mu-card-header>
            <mu-card-media title="" sub-title="">
              <img src="@/common/image/610/32.jpg">
            </mu-card-media>
            <mu-card-title title="2017.6.10" sub-title="跑道"></mu-card-title>
            <mu-card-text class="text" style="font-size: 14px">
              感受你拥有的世界<br/>
              感恩青春
              <br/>
            </mu-card-text>
          </mu-card>
        </mu-container>

        <mu-container class="cardWrapper">
          <mu-card style="width: 100%; max-width: 441px; margin: 0 auto;">
            <mu-card-header title="训练场" sub-title="毕业季">
            </mu-card-header>
            <mu-card-media title="" sub-title="">
              <img src="@/common/image/610/33.jpg">
            </mu-card-media>
            <mu-card-title title="2017.6.10" sub-title="跑道"></mu-card-title>
            <mu-card-text class="text" style="font-size: 14px">
              愿多年后依旧这么美好<br/>
              <br/>
            </mu-card-text>
          </mu-card>
        </mu-container>

        <mu-container class="cardWrapper">
          <mu-card style="width: 100%; max-width: 441px; margin: 0 auto;">
            <mu-card-header title="训练场" sub-title="毕业季">
            </mu-card-header>
            <mu-card-media title="" sub-title="">
              <img src="@/common/image/610/34.jpg">
            </mu-card-media>
            <mu-card-title title="2017.6.10" sub-title="跑道"></mu-card-title>
            <mu-card-text class="text" style="font-size: 14px">
              岁月你别催，该来的我不推<br/>
              岁月你别催，走远的仍要追<br/>
              当不得不说再见的时候，挥别的那一刻就如同流水的光阴，谁能抵得过，谁能叹息、奈何。
              <br/>
            </mu-card-text>
          </mu-card>
        </mu-container>
      </div>
    </div>
  </div>
</template>
<script>
  import carouselImg1 from '@/common/image/610/1.jpg';
  import carouselImg2 from '@/common/image/610/2.jpg';
  import carouselImg3 from '@/common/image/610/3.jpg';
  import carouselImg4 from '@/common/image/610/4.jpg';
  import BScroll from 'better-scroll'

  export default {
    name: "sixone",
    data() {
      return {
        carouselImg1,
        carouselImg2,
        carouselImg3,
        carouselImg4
      }
    },
    mounted() {

      setTimeout(()=>{
        this._initScroll();
      },20)
    },
    methods: {
      _initScroll(){
        this.scroll = new BScroll(this.$refs.wrapper,{
          click: true,

        })
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .wrapper
    position absolute
    width 100vw
    top 0
    bottom 50px
    .imageWrapper
      width 100vw
      height 76vw
      .image1
        width 100vw
        height 75vw
        top 0
        transform translate(-50%, 0)
        &::after
          content: "致我们最爱的610"
          position absolute
          width 90%
          height 40px
          z-index 100

    .alert
      margin 5px auto 10px
      background-color #25b7aa
      font-size 16px
    .cardWrapper
      margin-bottom 10px
</style>
