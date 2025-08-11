import { EkDateRange } from './components/DateRange/index.ts'
import { useEkDialog } from './components/Dialog/index.ts'
import installer from './utils/installer'

// 按需导入配置
export { EkDateRange, useEkDialog }

// 自动加载器
export { default as EpluskitResolver } from './utils/resolver'

export default installer
