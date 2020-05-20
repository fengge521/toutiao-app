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
    ></comment-list>
    <!-- 所有评论回复 -->
  </div>
</template>

<script>
import commentItem from './comment-item'
import commentList from './comment-list'
export default {
  name: 'CommentReply',
  components: {
    commentItem,
    commentList
  },
  props: {
    comment: {
      type: Object,
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

</style>
