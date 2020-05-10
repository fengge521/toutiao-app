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
    <van-form @submit="onLogin" validate-first :show-error="false" :show-error-message="false" @failed="onFailed">
      <van-field
        v-model="user.mobile"
        icon-prefix="icon"
        left-icon="shouji"
        placeholder="请输入手机号"
        :rules="formRules.mobile"
      />
      <van-field
        v-model="user.code"
        clearable
        icon-prefix="icon"
        left-icon="yanzhengma"
        placeholder="请输入验证码"
        :rules="formRules.code"
      >
        <template #button>
          <van-button size="small" round class="send-btn">验证码</van-button>
        </template>
      </van-field>
       <!-- 登录按钮 -->
      <div class="login-btn-wrap">
        <van-button type="info" block class="login-btn">登录</van-button>
      </div>
      <!-- 登录按钮 -->
    </van-form>
    <!-- 表单 -->
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
      formRules: {
        mobile: [
          { required: true, message: '请输入手机号' },
          { pattern: /^1{3|5|7|8|9}\d{9}$/, message: '手机号码格式错误' }
        ],
        code: [
          { required: true, message: '请输入验证码' },
          { pattern: /^\d{6}$/, message: '验证码格式错误' }
        ]
      }
    }
  },
  created () {

  },
  mounted () {

  },
  methods: {
    async onLogin () {
      this.$toast.loading({
        message: '登录中...', // 信息提示
        forbidClick: true, // 禁止背景点击
        duration: 0 // 展示时长 值为0 时toast 不消失
      })
      try {
        const res = await login(this.user)
        this.$toast.success('登录成功')
        // 处理响应结果
        console.log(res)
      } catch (err) {
        console.log('登录失败', err)
        this.$toast.fail('登录失败,手机号或验证码不正确')
      }
    },
    onFailed (error) {
      if (error.errors[0]) {
        this.$toast({
          message: error.errors[0].message,
          position: 'top'
        })
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
