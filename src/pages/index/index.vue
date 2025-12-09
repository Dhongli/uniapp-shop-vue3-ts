<script setup lang="ts">
//
import { getHomeBannerAPI, getHomeCategoryAPI } from '@/services/home'
import CustomNavbar from './components/CustomNavbar.vue'
import CategoryPanel from './components/CategoryPanel.vue'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import type { BannerItem, CategoryItem } from '@/types/home'

const bannerList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  bannerList.value = res.result
  // console.log('首页轮播图数据fghfg：', bannerList.value)
}

const categoryList = ref<CategoryItem[]>([])
// 获取前台分类数据
const getHomeCategoryData = async () => {
  const res = await getHomeCategoryAPI()
  categoryList.value = res.result
  // console.log('首页前台类目数据：', categoryList.value)
}

onLoad(() => {
  getHomeBannerData()
  getHomeCategoryData()
})
</script>

<template>
  <CustomNavbar />
  <XtxSwiper :list="bannerList" />
  <CategoryPanel :list="categoryList" />
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
}
</style>
