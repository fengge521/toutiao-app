<template>
  <div class="search-suggest">
    <van-cell
      icon="search"
      :title="str"
      v-for="(str, index) in suggestions"
      :key="index"
    ></van-cell>
  </div>
</template>

<script>
import { getSearchSuggest } from '@/api/search'
import { debounce } from 'lodash'
export default {
  name: 'SearchSuggest',
  props: {
    searchText: {
      type: String,
      required: true
    }
  },
  watch: {
    searchText: {
      // 当数据发生变化则会执行 handler 处理函数
      handler: debounce(async function () {
        // 找到数据接口
        // 请求获取数据
        // 模板绑定展示
        const { data } = await getSearchSuggest(this.searchText)
        this.suggestions = data.data.options
      }, 200),
      immediate: true // 该回调将会在侦听开始之后被立即调用
    }
  },
  data () {
    return {
      suggestions: []
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
