<script setup lang="ts">
//
import { getHomeBannerAPI, getHomeCategoryAPI, getHomeHotAPI } from '@/services/home'
import CustomNavbar from './components/CustomNavbar.vue'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'
import type { XtxGuessInstance } from '@/types/component.d.ts'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'

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

const hotList = ref<HotItem[]>([])
// 获取热门推荐数据
const getHomeHotData = async () => {
  const res = await getHomeHotAPI()
  // console.log('首页热门推荐数据：', res.result)
  hotList.value = res.result
}

onLoad(() => {
  getHomeBannerData()
  getHomeCategoryData()
  getHomeHotData()
})

//获取猜你喜欢组件实例
const guessRef = ref<XtxGuessInstance>()
// 滚动容器触底事件
const onScrolltolower = () => {
  console.log('滚动触底了')
  guessRef.value?.getMore()
}
</script>

<template>
  <!-- 导航栏 -->
  <CustomNavbar />
  <!-- 滚动容器 scrolltolower滚动触底事件-->
  <scroll-view @scrolltolower="onScrolltolower" class="scroll-view" scroll-y>
    <!-- 轮播图 -->
    <XtxSwiper :list="bannerList" />
    <!-- 前台类目 -->
    <CategoryPanel :list="categoryList" />
    <!-- 热门推荐 -->
    <HotPanel :list="hotList" />
    <!-- 猜你喜欢-->
    <XtxGuess ref="guessRef" />
  </scroll-view>
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.scroll-view {
  flex: 1;
}
</style>
