declare module 'vue' {
  export interface GlobalComponents {
    EkDateRange: typeof import('epluskit')['EkDateRange']
  }
}

export {}
