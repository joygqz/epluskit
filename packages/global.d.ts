declare module 'vue' {
  export interface GlobalComponents {
    EkDateRange: typeof import('epluskit')['EkDateRange']
  }

  interface ComponentCustomProperties {
    $useEkDialog: typeof import('epluskit')['useEkDialog']
  }
}

export {}
