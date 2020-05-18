<template>
  <div class="article-container">
    <!-- 顶部区域 导航 -->
    <van-nav-bar
      class="app-nav-bar"
      title="文章详情"
      left-arrow
      @click-left="$router.back()"
    />
    <!-- 顶部区域 -->
    <!-- 文章标题 -->
    <h1 class="title">牛逼程序员都用的开源工具，你用了 几个？</h1>
    <!-- 作者信息 -->
    <van-cell center class="user-info">
      <div slot="title" class="name">天涯小型客</div>
      <van-image
        slot="icon"
        class="avatar"
        round
        fit="cover"
        src="https://img.yzcdn.cn/vant/cat.jpeg"
      />
      <div slot="label" class="pubdate">14小时前</div>
      <van-button
        class="follow-btn"
        type="info"
        icon="plus"
        round
        size="small"
      >关注</van-button>
    </van-cell>
  </div>
</template>

<script>
export default {
  name: 'ArticleIndex',
  props: {
    articleId: {
      type: String,
      required: true
    }
  },
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
.title {
  font-size: 20px;
  color: #3a3a3a;
  padding: 14px;
  background-color: #fff;
  margin: 0;
}
.user-info {
  .avatar {
    width: 35px;
    height: 35px;
    margin-right: 8px;
  }
  .name {
    font-size: 12px;
    color: #333333;
  }
  .pubdate {
    font-size: 11px;
    color: #b4b4b4;
  }
  .follow-btn {
    width: 85px;
    height: 29px;
  }
}
</style>
