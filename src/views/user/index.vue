<template>
  <div class="user-container">
    <!-- 头部导航栏 -->
    <van-nav-bar
      class="app-nav-bar"
      title="用户名"
      left-arrow
      @click-left="$router.back()"
    />
    <!-- 头部导航栏 -->
    <div class="user-info">
      <div class="base-info">
        <van-image
          class="avatar"
          round
          fit="cover"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <div class="stats-info">
          <div class="stats-wrap">
            <div class="stats-item">
              <span class="count">66</span>
              <span class="text">发布</span>
            </div>
            <div class="stats-item">
              <span class="count">88</span>
              <span class="text">关注</span>
            </div>
            <div class="stats-item">
              <span class="count">28</span>
              <span class="text">粉丝</span>
            </div>
            <div class="stats-item">
              <span class="count">160</span>
              <span class="text">获赞</span>
            </div>
          </div>
          <van-button class="follow-btn">关注</van-button>
        </div>
      </div>
      <div class="label-info">
        <div class="bio-wrap">
          <span class="label">简介：</span>
          <span class="text">这是用户简介</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserIndex',
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

<style scoped lang="less">
.user-container {
  .user-info {
    background-color: #fff;
    padding: 12px 16px;
    .base-info {
      display: flex;
      margin-bottom: 12px;
      .avatar {
        width: 77px;
        height: 77px;
        margin-right: 30px;
      }
    }
    .label-info {
      font-size: 12px;
      .bio-wrap {
        .label {
          color: #646263;
        }
        .text {
          color: #212121;
        }
      }
    }
  }
  .stats-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    .stats-wrap {
      display: flex;
      justify-content: space-between;
      .stats-item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .count {
          font-size: 13px;
          color: #0d0a10;
        }
        .text {
          font-size: 11px;
          color: #9c9b9d;
        }
      }
    }
    .follow-btn {
      width: 145px;
      height: 27px;
      line-height: 27px;
      background-color: #6bb5ff;
      color: #fff;
      border: none;
    }
  }
}
</style>
