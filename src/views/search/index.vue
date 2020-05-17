<template>
  <div class="search-container">
    <!-- 搜索框 -->
    <form action="/">
      <van-search
        v-model="searchText"
        placeholder="请输入搜索关键词"
        background="blue"
        show-action
        @search="onSearch"
        @cancel="$router.back()"
      />
    </form>
    <!-- 搜索结果 -->
    <search-result v-if="isResultShow" />
    <!-- 搜索联想建议 -->
    <search-suggest
      v-else-if="searchText"
      :search-text="searchText"
    />
    <!-- 搜索历史 -->
    <search-history v-else />
  </div>
</template>

<script>
import searchSuggest from './components/search-suggest'
import searchHistory from './components/search-history'
import searchResult from './components/search-result'
export default {
  name: 'SearchIndex',
  components: {
    searchSuggest,
    searchHistory,
    searchResult
  },
  data () {
    return {
      searchText: '', // 存放输入框的内容
      isResultShow: false // 控制搜索结果的显示状态,默认是false不显示
    }
  },
  created () {

  },
  mounted () {

  },
  methods: {
    onSearch () {
      console.log('onSearch')
      // 展示搜索结果
      this.isResultShow = true
    }
  }
}
</script>

<style scoped lang="less">

</style>
