import { http } from '@/utils/http'
import type { BannerItem, CategoryItem } from '@/types/home'
/**
 * 首页-广告区域-小程序
 * @param distributionSite 广告区域展示位置 （ 投放位置，1为首页，2为商品分类页） 默认1
 */
export const getHomeBannerAPI = (distributionSite = 1) => {
  return http<BannerItem[]>({
    method: 'GET',
    url: '/home/banner',
    data: {
      distributionSite,
    },
  })
}

// services/home.ts
/**
 * 首页-前台分类-小程序
 */
export const getHomeCategoryAPI = () => {
  return http<CategoryItem[]>({
    method: 'GET',
    url: '/home/category/mutli',
  })
}
