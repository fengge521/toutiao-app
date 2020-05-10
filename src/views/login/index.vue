<template>
  <div class="login-container">
    <!-- 顶部区域 -->
    <van-nav-bar
      class="app-nav-bar"
      title="注册 / 登录"
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
        name="pattern"
        placeholder="请输入手机号"
        :rules="[{ pattern, message: '请输入正确的号码格式' }]"
      />
      <van-field
        v-model="user.code"
        clearable
        icon-prefix="icon"
        left-icon="yanzhengma"
        placeholder="请输入验证码"
      >
        <template #button>
          <van-button size="small" round class="send-btn">验证码</van-button>
        </template>
      </van-field>
    </van-cell-group>
    <!-- 表单 -->
    <!-- 登录按钮 -->
    <div class="login-btn-wrap">
      <van-button type="info" block class="login-btn" @click="onLogin">登录</van-button>
    </div>
    <!-- 登录按钮 -->
  </div>
</template>
<script>
import { login } from '@/api/user'
// import { Toast } from 'vant'
export default {
  name: 'LoginIndex',
  data () {
    return {
      user: {
        mobile: '', // 手机号
        code: '' // 验证码
      },
      pattern: /^(((13[0-9])|(14[5-7])|(15[0-9])|(16[0-9])|(17[0-9])|(18[0-9]))+\d{8})$/
    }
  },
  created () {

  },
  mounted () {

  },
  methods: {
    async onLogin () {
      try {
        const res = await login(this.user)
        // 处理响应结果
        console.log(res)
      } catch (err) {
        console.log('登录失败', err)
      }
    }
  }
}
</script>

<style scoped lang="less">
.login-container {
  .send-btn {
    width: 76px;
    height: 23px;
    background-color: #ededed;
    .van-button__text {
      font-size: 11px;
      color: #666666;
    }
  }
  .login-btn-wrap {
    padding: 26px 16px;
    .login-btn {
      background-color: #6db4fb;
      border: none;
      .van-button__text {
        font-size: 15px;
      }
    }
  }
}
</style>
