<template>
  <div class="news pt150">
    <div class="row m-0 p-0">
      <div class="box col-12 col-md-6">
        <img :src="newImg1" alt />
        <div class="info">
          <h2 class="py-2 h4">健身飲食篇</h2>
          <p class="mb-2">不管你是要減重、增肌或是為了健康，運動後的30分鐘到1小時內，聰明攝取一份,運動後補充一份均衡營養的輕食很重要，內容以碳水化合物與蛋白質的</p>
          <p>撰寫日期：2019/8/18</p>
          <p>觀看人數：7596</p>
        </div>
        <div class="more">查看更多</div>
      </div>
      <div class="box col-12 col-md-6">
        <img :src="newImg2" alt />
        <div class="info">
          <h2 class="py-2 h4">有氧運動迷失</h2>
          <p class="mb-2">當你決定開始健身，身邊的朋友都會跟你說乳清蛋白很重要，一定要喝，不然 ... 蛋白質是掌管人體生理機能相當重要的營養素，而對於健身、運動、體重管理的 ... 讓你的減重過程更有效率，又不用擔心營養不足，是個非常健康的減肥法，身體也會更結實。 ... 只想增加肌肉比例，不想增重的人，你需要的是一般乳清蛋白。</p>
          <p>撰寫日期：2019/5/13</p>
          <p>觀看人數：6723</p>
        </div>
        <div class="more">查看更多</div>
      </div>
    </div>
    <div class="row m-0 p-0">
      <div class="box col-12 col-md-6">
        <img :src="newImg3" alt />
        <div class="info">
          <h2 class="py-2 h4">適合老人的運動有哪些？</h2>
          <p class="mb-2">所謂要活就要動，老了也別忘記運動。適合老人的運動類型有3種，包含可提升心肺功能的有氧運動、可強化骨頭和肌肉的肌力訓練，及幫助保</p>
          <p>撰寫日期：2018/12/27</p>
          <p>觀看人數：3563</p>
        </div>
        <div class="more">查看更多</div>
      </div>
      <div class="box col-12 col-md-6">
        <img :src="newImg4" alt />
        <div class="info">
          <h2 class="py-2 h4">吃蛋白棒前要搞清楚的5件事情</h2>
          <p class="mb-2">隨著食品加工業的發展，以及人們對營養食品需求的增進，熱愛健康的人群已經不再滿足於簡單的多種維生素以及乳清蛋白粉產品。各類蛋白</p>
          <p>撰寫日期：2018/10/19</p>
          <p>觀看人數：2283</p>
        </div>
        <div class="more">查看更多</div>
      </div>
    </div>
    <div class="row m-0 p-0">
      <div class="box col-12 col-md-6">
        <img :src="newImg5" alt />
        <div class="info">
          <h2 class="py-2 h4">第一次健身就上手</h2>
          <p class="mb-2">下一站，我們即將帶領大家走入健身房，提供獨家的「攻略要點」，協助「健身房新手」不再像無頭蒼蠅於健身房裡亂竄</p>
          <p>撰寫日期：2018/8/13</p>
          <p>5233</p>
        </div>
        <div class="more">查看更多</div>
      </div>
    </div>
  </div>
</template>

<script>
import newImg1 from '@/assets/images/news/01.jpg'
import newImg2 from '@/assets/images/news/02.jpg'
import newImg3 from '@/assets/images/news/03.jpg'
import newImg4 from '@/assets/images/news/04.jpg'
import newImg5 from '@/assets/images/news/05.jpg'

export default {
  data () {
    return {
      newImg1,
      newImg2,
      newImg3,
      newImg4,
      newImg5
    }
  },
  created () {
    document.querySelector('html').classList.contains('box')
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/helpers/breakpoint.scss";

.news {
  max-width: 1200px;
  margin: 0 auto 1rem auto;
  .box {
    margin: 15px 0;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    text-align: center;
    align-items: center;
    img {
      width: 100%;
    }
    & > .info {
      & > p:nth-child(2){
      text-align: justify;
      }
      & > p:nth-child(3){
        float: left;
        color: #70757a;
        font-size: 0.8rem;
        @include pad(){
          color:white;
        }
      }
      & > p:nth-child(4){
        float: right;
        color: #70757a;
        font-size: 0.8rem;
        @include pad(){
          color:white;
        }
      }
      @include pad() {
        position: absolute;
        bottom: 0;
        color: white;
        background: $color-bgActive;
        margin-right: 15px;
      }
    }
    h2 {
      font-weight: bold;
    }
    p {
      line-height: 1.5rem;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      @include pad() {
        padding: 0 15px;
      }
    }
  }
  .more {
    transition: 0.6s;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -100%);
    color: #fff;
    font-family: impact;
    font-size: 1.5rem;
    letter-spacing: 0.5rem;
    width: calc(80% - 30px);
    border: 2px solid #fff;
    padding: 15px 0;
  }
  .box:hover {
    img {
      filter: grayscale(0.3);
    }
    .info{
      opacity: 0.5;
    }
    .more {
      opacity: 1;
      @include pad() {
        display: none;
      }
    }
  }
}
</style>
