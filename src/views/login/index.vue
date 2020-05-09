<template>
  <div class="login-container">
    <!-- 顶部区域 -->
    <van-nav-bar
      class="app-nav-bar"
      title="注册/登录"
      left-arrow
      @click-left="$router.back()"
    />
    <!-- 顶部区域 -->
    <!-- 表单 -->
    <van-cell-group>
      <van-field
        v-model="user.mobile"
        icon-prefix="icon"
        left-icon="shouji"
        placeholder="请输入手机号"
      />
      <van-field
        v-model="user.code"
        clearable
        icon-prefix="icon"
        left-icon="yanzhengma"
        placeholder="请输入验证码"
      >
        <template #button>
          <van-button size="small" round class="send-btn">发送验证码</van-button>
        </template>
      </van-field>
    </van-cell-group>
    <!-- 表单 -->
    <!-- 登录按钮 -->
    <div class="login-btn-warp">
      <van-button type="info" block class="login-btn">登录</van-button>
    </div>
    <!-- 登录按钮 -->
  </div>
</template>

<script>
export default {
  name: 'LoginIndex',
  data () {
    return {
      user: {
        mobile: '',
        code: ''
      }
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
body {
  background-color: #f5f7f9;
}
.login-btn-warp {
  padding: 26px 16px;
  .login-btn {
    background-color: #6db4fb;
    border: none;
    font-size: 15px;
  }
}
.send-btn {
  width: 76px;
  height: 23px;
  background-color: #ededed;
  .van-button__text {
    font-size: 11px;
    color: #666666;
  }
}
</style>
