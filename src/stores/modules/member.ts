import { defineStore } from 'pinia'
import { ref } from 'vue'

// 定义 Store
export const useMemberStore = defineStore(
  'member',
  () => {
    // 会员信息
    const profile = ref<any>()

    // 保存会员信息，登录时使用
    const setProfile = (val: any) => {
      profile.value = val
    }

    // 清理会员信息，退出时使用
    const clearProfile = () => {
      profile.value = undefined
    }

    // 记得 return
    return {
      profile,
      setProfile,
      clearProfile,
    }
  },
  // TODO: 持久化
  {
    // 网页端配置
    // persist: true,
    // 小程序端配置
    // getItem setItem是pinia-plugin-persistedstate插件要求的接口，通过uni.getStorageSync(key)和uni.setStorageSync(key, value)实现持久化存储
    // https://prazdevs.github.io/pinia-plugin-persistedstate/guide/config.html#storage
    persist: {
      storage: {
        getItem: (key) => {
          return uni.getStorageSync(key)
        },
        setItem: (key, value) => {
          uni.setStorageSync(key, value)
        },
      },
    },
  },
)
