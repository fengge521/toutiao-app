<template>
  <div id="app">
    <!-- 缓存组件 -->
    <keep-alive :include="cachePages">
      <router-view/>
    </keep-alive>
    <!-- 缓存组件 -->
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'App',
  computed: {
    ...mapState(['cachePages'])
  }
}
</script>
<style lang="less"></style>
