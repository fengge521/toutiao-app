<template>
  <div class="my-container">
    <van-cell-group>
      <!-- 头部蓝色区域 -->
      <van-cell title="单元格" value="内容" center class="bule">
        <van-image round slot="icon" fit="cover" width="50" height="50" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        <div slot="title">昵称</div>
        <van-button size="small" round>编辑资料</van-button>
      </van-cell>
      <!-- 中间蓝色区域 -->
      <van-grid :border="false">
        <van-grid-item>
          <div slot="text">
            <div class="span">8</div>
            <div class="text">头条</div>
          </div>
        </van-grid-item>
        <van-grid-item>
          <div slot="text">
            <div class="span">66</div>
            <div class="text">关注</div>
          </div>
        </van-grid-item>
        <van-grid-item>
          <div slot="text">
            <div class="span">88</div>
            <div class="text">粉丝</div>
          </div>
        </van-grid-item>
        <van-grid-item>
          <div slot="text">
            <div class="span">88</div>
            <div class="text">获赞</div>
          </div>
        </van-grid-item>
      </van-grid>
    </van-cell-group>
    <!-- 收藏, 历史 -->
    <div class="his">
      <van-grid :column-num="2">
        <van-grid-item icon-prefix="icon" icon="shoucang" text="收 藏" />
        <van-grid-item icon-prefix="icon" icon="lishi" text="历 史" class="icon2"/>
      </van-grid>
    </div>
    <!-- 页面导航部分 -->
    <van-cell title="消息通知" is-link to="/" />
    <van-cell title="小智同学" is-link to="/" class="xiaozhi"/>
    <van-cell title="退出登录" class="outlogin"/>
  </div>
</template>

<script>
export default {
  name: 'MyIndex',
  data () {
    return {

    }
  },
  created () {

  },
  mounted () {

  },
  methods: {

  }
}
</script>

<style lang="less">
  .my-container {
    .van-cell__title {
      margin-left: 12px;
      font-size: 15px;
    }
    .van-button--small {
      color: #b2b2b2;
      font-size: 10px;
    }
    .bule,
    .van-grid,
    .van-grid-item__content {
      background-color: #419DF9;
    }
    .his {
      .van-hairline {
        background-color: #fff;
      }
      .van-grid {
        margin-bottom: 9px;
        background-color: #fff;
        .van-grid-item__text {
          font-size: 16px;
        }
        .icon-shoucang {
          font-size: 20px;
          color: #EB5253;
        }
        .icon-lishi {
          font-size: 20px;
          color: #FF9D1D;
        }
      }
    }
    .van-cell:not(:last-child)::after {
      display: none;
    }
    .span {
      font-size: 36px;
      color: #fff;
    }
    .text {
      font-size: 15px;
      color: #ffffff;
    }
    .van-cell__title {
      font-size: 15px;
    }
    .xiaozhi {
      margin-bottom: 9px;
    }
    .outlogin {
      color: #D86262;
      text-align: center;
    }
  }
</style>
