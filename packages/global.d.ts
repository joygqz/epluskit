declare module 'vue' {
  export interface GlobalComponents {
    EkDateRange: typeof import('epluskit')['EkDateRange']
    EkTable: typeof import('epluskit')['EkTable']
    EkOnlyOffice: typeof import('epluskit')['EkOnlyOffice']
  }

  interface ComponentCustomProperties {
    $useEkDialog: typeof import('epluskit')['useEkDialog']
  }
}

export {}
