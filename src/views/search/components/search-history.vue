<template>
  <div class="search-history">
    <van-cell
      title="搜索历史"
    >
      <div v-if="isDelete">
        <span @click="$emit('onAllDelete', [])">全部删除</span>
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
      @click= "onDelete(history, index)"
    >
      <van-icon
        name="close"
        v-show="isDelete"
      />
    </van-cell>
  </div>
</template>

<script>
// import { setItem } from '@/utils/storage'
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
      isDelete: false // 判断是否处于删除显示状态
    }
  },
  created () {

  },
  mounted () {

  },
  methods: {
    onDelete (history, index) {
      // 删除状态
      if (this.isDelete) {
        this.searchHistories.splice(index, 1)
        // 持久化处理
        // setItem('search-histories', this.searchHistories)
        return
      }
      // 非删除状态
      this.$emit('search', history)
    }
  }
}
</script>

<style scoped lang="less">

</style>
