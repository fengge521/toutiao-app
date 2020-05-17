<template>
  <div class="search-history">
    <van-cell
      title="搜索历史"
    >
      <div v-if="isDelete">
        <span @click="$emit('onAllDelete')">全部删除</span>
        &nbsp;&nbsp;
        <span @click="isDelete = !isDelete">完成</span>
      </div>
      <van-icon
        name="delete"
        @click="isDelete = !isDelete"
        v-else
      />
    </van-cell>
    <van-cell
      :title="history"
      v-for="(history, index) in searchHistories"
      :key="index"
    >
      <van-icon name="close" />
    </van-cell>
  </div>
</template>

<script>
export default {
  name: 'SearchHistory',
  props: {
    searchHistories: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      isDelete: false // 判断是否处于删除状态
    }
  },
  created () {

  },
  mounted () {

  },
  methods: {
    // 根据id删除搜索历史的每一项
    // onDelete (articleId) {
    //   deleteSearchHistory (articleId) {
    //     console.log(articleId)
    //   }
    // }
  }
}
</script>

<style scoped lang="less">

</style>
