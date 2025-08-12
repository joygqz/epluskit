import { EkDateRange } from './components/DateRange/index.ts'
import { useEkDialog } from './components/Dialog/index.ts'
import { EkTable } from './components/Table/index.ts'
import installer from './utils/installer'

// 按需导入解析器
export { default as EpluskitResolver } from './utils/resolver'

export { EkDateRange, EkTable, useEkDialog }

export default installer
