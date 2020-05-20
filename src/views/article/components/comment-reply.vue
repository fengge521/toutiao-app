<template>
  <div class="comment-reply">
    <!-- 头部信息 -->
    <van-nav-bar
      :title="`${comment.reply_count} 条回复`"
    >
      <van-icon slot="left" name="cross" @click="$emit('close')"/>
    </van-nav-bar>
    <!-- 头部信息 -->
    <!-- 当前评论 -->
    <comment-item
      :comment= "comment"
    ></comment-item>
    <!-- 当前评论 -->
    <!-- 所有评论回复 -->
    <van-cell title="所有回复"></van-cell>
    <comment-list
      :source="comment.com_id"
      type="c"
      :list="commentList"
    ></comment-list>
    <!-- 所有评论回复 -->
    <!-- 底部区域 -->
    <div class="article-bottom">
      <van-button
        class="comment-btn"
        type="default"
        round
        size="small"
        @click="isPublishShow = true"
      >写评论</van-button>
    </div>
    <!-- /底部区域 -->
    <!-- 发布回复 -->
    <van-popup
      v-model="isPublishShow"
      position="bottom"
    >
      <publish-comment
        :target="comment.com_id"
        :article-id="articleId"
        @publish-success="onPublishSuccess"
      />
    </van-popup>
    <!-- /发布回复 -->
  </div>
</template>

<script>
import commentItem from './comment-item'
import commentList from './comment-list'
import publishComment from './publish-comment'
export default {
  name: 'CommentReply',
  components: {
    commentItem,
    commentList,
    publishComment
  },
  props: {
    comment: {
      type: Object,
      required: true
    },
    articleId: {
      type: [Number, String, Object],
      required: true
    }
  },
  data () {
    return {
      isPublishShow: false,
      commentList: [] // 评论的回复列表
    }
  },
  created () {

  },
  mounted () {

  },
  methods: {
    onPublishSuccess (comment) {
      // 将发布成功的评论放到评论列表的顶部
      this.commentList.unshift(comment)
      // 更新评论的回复数量
      this.comment.reply_count++
      // 关闭发布回复的弹出层
      this.isPublishShow = false
    }
  }
}
</script>

<style scoped lang="less">
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
  .comment-btn {
    width: 200px;
    height: 30px;
    line-height: 30px;
    font-size: 15px;
    color: #a7a7a7;
    border: 1px soild #eee;
  }
}
</style>
