<template>
  <div class="profile">
    <!-- 顶部区域 导航-->
    <van-nav-bar
      class="app-nav-bar"
      title="个人信息"
      left-arrow
      @click-left="$router.back()"
    />
    <input
      type="file"
      hidden
      ref="file"
      accept="image/*"
      @change="onChange"
    >
    <!-- 顶部区域 -->
    <van-cell
      isLink
      title="头像"
      center
      @click="$refs.file.click()"
    >
      <van-image
        width="30"
        height="30"
        round
        fit="cover"
        :src="user.photo"
      />
    </van-cell>
    <van-cell
      isLink
      title="昵称"
      :value="user.name"
      @click="isEditNameShow = true"
    />
    <van-cell
      isLink
      title="性别"
      :value="user.gender === 0 ? '男' : '女'"
      @click="isEditGenderShow = true"
    />
    <van-cell
      isLink
      title="生日"
      :value="user.birthday"
      @click="isEditBirthdayShow = true"
    />
    <!-- 修改昵称组件 -->
    <van-popup
      v-model="isEditNameShow"
      position="bottom"
      :style="{ height: '100%' }"
    >
      <updata-name
        v-if="isEditNameShow"
        v-model="user.name"
        @close="isEditNameShow = false"
      />
    </van-popup>
    <!-- 修改性别组件 -->
    <van-popup
      v-model="isEditGenderShow"
      position="bottom"
    >
      <updata-gender
        v-if="isEditGenderShow"
        v-model="user.gender"
        @close="isEditGenderShow = false"
      />
    </van-popup>
    <!-- 修改生日组件 -->
    <!-- 修改性别组件 -->
    <van-popup
      v-model="isEditBirthdayShow"
      position="bottom"
    >
      <updata-birthday
        v-if="isEditBirthdayShow"
        v-model="user.birthday"
        @close="isEditBirthdayShow = false"
      />
    </van-popup>
    <!-- 修改头像 -->
    <van-popup
      v-model="isEditPhotoShow"
      position="bottom"
    >
      <updata-photo
        v-if="isEditPhotoShow"
        :file="previewImage"
        @close="isEditPhotoShow = false"
        @update-photo="user.photo = $event"
      />
    </van-popup>
  </div>
</template>

<script>
import { getUserProfile } from '@/api/user'
import UpdataName from './components/updata-name'
import UpdataGender from './components/updata-gender'
import UpdataBirthday from './components/updata-birthday'
import UpdataPhoto from './components/updata-photo'
export default {
  name: 'Profile',
  components: {
    UpdataName,
    UpdataGender,
    UpdataBirthday,
    UpdataPhoto
  },
  data () {
    return {
      user: {}, // 储存用户信息
      isEditNameShow: false, // 是否展示昵称编辑组件
      isEditGenderShow: false, // 是否展性别编辑组件
      isEditBirthdayShow: false,
      isEditPhotoShow: false,
      previewImage: null // 上传预览图片
    }
  },
  created () {
    this.loadUserProfile()
  },
  mounted () {

  },
  methods: {
    async loadUserProfile () {
      const { data } = await getUserProfile()
      this.user = data.data
      console.log(data)
    },
    onChange () {
      // 在弹出层里面预览图片
      const file = this.$refs.file.files[0]
      // const blob = window.URL.createObjectURL(this.$refs.file.files[0])
      this.previewImage = file
      // 展示弹出层
      this.isEditPhotoShow = true
      // 为了解决相同文件不触发 change 事件，所以在这里手动的清空 file 的 value
      this.$refs.file.value = ''
    }
  }
}
</script>

<style scoped lang="less">
.van-popup {
  background-color: #f5f7f9;
}
</style>
