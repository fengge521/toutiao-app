<template>
  <div class="my-container">
    <van-cell-group>
      <van-cell title="单元格" value="内容" center>
        <van-image round slot="icon" fit="cover" width="50" height="50" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        <div slot="title">昵称</div>
        <van-button size="small" round>编辑资料</van-button>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: 'MyIndex',
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
