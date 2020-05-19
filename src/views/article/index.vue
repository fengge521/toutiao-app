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
    <div class="article-wrap">
      <!-- 文章标题 -->
      <h1 class="title">{{ article.title }}</h1>
      <!-- 文章标题 -->
      <!-- 作者信息 -->
      <van-cell center class="user-info">
        <div slot="title" class="name">{{ article.aut_name }}</div>
        <van-image
          slot="icon"
          class="avatar"
          round
          fit="cover"
          :src="article.aut_photo"
        />
        <div slot="label" class="pubdate">{{ article.pubdate | relativeTime }}</div>
        <van-button
          class="follow-btn"
          :type="article.is_followed ? 'default' : 'info'"
          :icon="article.is_followed ? '' : 'plus'"
          round
          size="small"
          @click="onFollow"
        >{{ article.is_followed ? '已关注' : '关注' }}</van-button>
      </van-cell>
      <!-- 作者信息 -->
      <!-- 文章内容 -->
      <div
        class="markdown-body"
        v-html="article.content"
        ref="article-content"
        ></div>
      <!-- 文章内容 -->
      <!-- 文章评论列表 -->
      <comment-list :source="articleId" />
      <!-- /文章评论列表 -->
    </div>
    <!-- 底部评论区 -->
      <div class="article-bottom">
        <van-button
          type="default"
          round
          size="small"
          class="article-btn"
          @click="isPublishShow = true"
        >写评论</van-button>
        <van-icon
          name="comment-o"
          badge="99+"
          color="#777"
        />
        <van-icon
          :name="article.is_collected ? 'star' : 'star-o'"
          :color="article.is_collected ? 'orange' : '#777'"
          @click="onCollect"
        />
        <van-icon
          :name="article.attitude === 1 ? 'good-job' : 'good-job-o'"
          :color="article.attitude === 1 ? 'orange' : '#777'"
          @click="onLike"
        />
        <van-icon
          name="share"
          color="#777"
        />
      </div>
      <!-- 底部评论区 -->
      <!-- 发布评论 -->
      <van-popup
        v-model="isPublishShow"
        position="bottom"
      >
        <publish-comment
          :target="articleId"
          @publish-success="onPublishSuccess"
        />
      </van-popup>
      <!-- 发布评论 -->
  </div>
</template>

<script>
import './github-markdown.css'
import {
  getArticleById,
  addCollect,
  deleteCollect,
  addLike,
  deleteLike
} from '@/api/article'
import { ImagePreview } from 'vant'
import { addFollow, deleteFollow } from '@/api/user'
import CommentList from './components/comment-list'
import PublishComment from './components/publish-comment'
export default {
  name: 'ArticleIndex',
  props: {
    articleId: {
      type: [String, Number, Object],
      required: true
    }
  },
  components: {
    CommentList,
    PublishComment
  },
  data () {
    return {
      article: {}, // 文章数据对象
      isPublishShow: false, // 控制发布评论的显示状态
      commentList: [] // 文章评论列表
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
      // 数据改变影响视图更新（DOM数据）不是立即的
      // 所以如果需要在修改数据之后马上操作被该数据影响的视图 DOM，需要把这个代码放到 $nextTick 中
      // this.$nextTick 是 Vue 提供的一个方法
      // 参考文档：
      this.$nextTick(() => {
        this.handlePerviewImage()
      })
    },
    handlePerviewImage () {
      // 1. 获取文章内容 DOM 容器
      const articleContent = this.$refs['article-content']
      // 2. 得到所有的 img 标签
      const imgs = articleContent.querySelectorAll('img')
      const imgPaths = [] // 收集所有的图片路径
      // 3. 循环 img 列表，给 img 注册点击事件
      imgs.forEach((img, index) => {
        imgPaths.push(img.src)
        img.onclick = function () {
          // 4. 在事件处理函数中调用 ImagePreview() 预览
          ImagePreview({
            images: imgPaths, // 预览图片路径列表
            startPosition: index // 起始位置
          })
        }
      })
    },
    async onFollow () {
      this.$toast.loading({
        message: '加载中...',
        forbidClick: true // 禁止背景点击
      })
      if (this.article.is_followed) {
        // 如果已关注 点击取消关注
        await deleteFollow(this.article.aut_id)
      } else {
        //  如果没有关注点击关注
        await addFollow(this.article.aut_id)
      }
      this.article.is_followed = !this.article.is_followed
      this.$toast.success(`${this.article.is_followed ? '' : '取消'}关注成功`)
    },
    async onCollect () {
      this.$toast.loading({
        message: '加载中...',
        forbidClick: true // 禁止背景点击
      })
      if (this.article.is_collected) {
        // 如果已收藏点击取消收藏
        await deleteCollect(this.article.art_id)
      } else {
        // 如果没有收藏点击收藏
        await addCollect(this.article.art_id)
      }
      this.article.is_collected = !this.article.is_collected
      this.$toast.success(`${this.article.is_collected ? '' : '取消'}收藏成功`)
    },
    async onLike () {
      this.$toast.loading({
        message: '加载中...',
        forbidClick: true // 禁止背景点击
      })
      if (this.article.attitude === 1) {
        // 如果已点赞点击取消点赞
        await deleteLike(this.article.art_id)
        this.article.attitude = -1
      } else {
        // 如果没有点赞点击点赞
        await addLike(this.article.art_id)
        this.article.attitude = 1
      }
      this.$toast.success(`${this.article.attitude === 1 ? '' : '取消'}点赞成功`)
    },
    onPublishSuccess (comment) {
      // 把发布成功的评论数据对象放到评论列表顶部
      this.commentList.unshift(comment)
      // 关闭发布评论弹出层
      this.isPublishShow = false
    }
  }
}
</script>

<style scoped lang="less">
.article-wrap {
  position: fixed;
  left: 0;
  right: 0;
  top: 46px;
  bottom: 44px;
  overflow-y: auto;
}
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
ul {
  list-style: unset;
}
.markdown-body {
  padding: 14px;
  background-color: #fff;
}
.article-bottom {
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 44px;
  border-top: 1px solid #d8d8d8;
  background-color: #fff;
  box-sizing: border-box;
  .article-btn {
    width: 141px;
    height: 23px;
    line-height: 23px;
    font-size: 15px;
    color: #a7a7a7;
    border: 1px soild #eee;
  }
  .van-icon {
    font-size: 20px;
    .van-info {
      font-size: 11px;
      background-color: #e22829;
    }
  }
}
</style>
