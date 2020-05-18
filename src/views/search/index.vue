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
        @focus="isResultShow = false"
      />
    </form>
    <!-- 搜索结果 -->
    <search-result
      v-if="isResultShow"
      :search-text="searchText"
    />
    <!-- 搜索联想建议 -->
    <search-suggest
      v-else-if="searchText"
      :search-text="searchText"
      @search="onSearch"
    />
    <!-- 搜索历史 -->
    <search-history
      v-else
      :search-histories="searchHistories"
      @onAllDelete="searchHistories = $event"
      @search="onSearch"
    />
  </div>
</template>

<script>
import searchSuggest from './components/search-suggest'
import searchHistory from './components/search-history'
import searchResult from './components/search-result'
import { setItem, getItem } from '@/utils/storage'
// import { getSearchHistory } from '@/api/search'
import { mapState } from 'vuex'
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
      isResultShow: false, // 控制搜索结果的显示状态,默认是false不显示
      searchHistories: [] // 搜索历史数据
    }
  },
  computed: {
    ...mapState(['user'])
  },
  watch: {
    searchHistory () {
      setItem('search-histories', this.searchHistories)
    }
  },
  created () {
    this.loadSearchHistory()
  },
  mounted () {

  },
  methods: {
    onSearch (searchText) {
      // 把输入框设置为你要搜索的文本
      this.searchText = searchText
      const index = this.searchHistories.indexOf(searchText)
      if (index !== -1) {
        // 把重复项删除
        this.searchHistories.splice(index, 1)
      }
      // 把最新的搜索历史记录放到顶部
      this.searchHistories.unshift(searchText)
      // 如果用户已登录，则把搜索历史记录存储到线上
      //    提示：只要我们调用获取搜索结果的数据接口，后端会给我们自动存储用户的搜索历史记录
      // 如果没有登录页，则把搜索历史记录存储到本地
      setItem('search-histories', this.searchHistories)
      // 展示搜索结果
      this.isResultShow = true
    },
    async loadSearchHistory () {
      // 因为后端帮我们存储的用户搜索历史记录太少了（只有4条）
      // 所以我们这里让后端返回的历史记录和本地的历史记录合并到一起
      // 如果用户已登录
      const searchHistories = getItem('search-histories') || []
      // if (this.user) {
      //   const { data } = await getSearchHistory()
      //   // 合并数组： [...数组, ...数组]
      //   // 把 Set 转为数组：[...Set对象]
      //   // 数组去重：[...new Set([...数组, ...数组])
      //   searchHistories = [...new Set([
      //     ...searchHistories,
      //     ...data.data.keywords
      //   ])]
      // }
      this.searchHistories = searchHistories
    }
  }
}
</script>

<style scoped lang="less">

</style>
