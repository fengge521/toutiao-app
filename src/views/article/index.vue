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
    <h1 class="title">{{ article.title }}</h1>
    <!-- 作者信息 -->
    <van-cell center class="user-info">
      <div slot="title" class="name">{{ article.aut_name }}</div>
      <van-image
        slot="icon"
        class="avatar"
        round
        fit="cover"
        src="article.aut_photo"
      />
      <div slot="label" class="pubdate">{{ article.pubdate | relativeTime }}</div>
      <van-button
        class="follow-btn"
        type="article.is_followed ? 'default' : 'info'"
        icon="article.is_followed ? '' : 'plus'"
        round
        size="small"
      >{{ article.is_followed ? '已关注' : '关注' }}</van-button>
    </van-cell>
    <div class="markdown-body" v-html="article.content"></div>
  </div>
</template>

<script>
import './github-markdown.css'
import { getArticleById } from '@/api/article'
export default {
  name: 'ArticleIndex',
  props: {
    articleId: {
      type: [String, Number, Object],
      required: true
    }
  },
  data () {
    return {
      article: {} // 文章数据对象
    }
  },
  created () {
    this.loadArticle()
  },
  mounted () {

  },
  methods: {
    async loadArticle () {
      const { data } = await getArticleById(this.articleId)
      this.article = data.data
    }
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
