import { EkDateRange } from './components/DateRange/index.ts'
import { useEkDialog } from './components/Dialog/index.ts'
import { EkOnlyOffice } from './components/OnlyOffice/index.ts'
import { EkTable } from './components/Table/index.ts'
import installer from './utils/installer'

// 按需导入解析器
export { EpluskitResolver } from './utils/resolver'

export { EkDateRange, EkOnlyOffice, EkTable, useEkDialog }

export default installer
