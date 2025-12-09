// src/types/components.d.ts
import XtxSwiper from '@/components/XtxSwiper.vue'

declare module 'vue' {
  export interface GlobalComponents {
    XtxSwiper: typeof XtxSwiper
  }
}
