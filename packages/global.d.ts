declare module 'vue' {
  export interface GlobalComponents {
    EkDateRange: typeof import('epluskit')['EkDateRange']
    EkTable: typeof import('epluskit')['EkTable']
  }

  interface ComponentCustomProperties {
    $useEkDialog: typeof import('epluskit')['useEkDialog']
  }
}

export {}
