import { EkDateRange } from './components/date-range/index.ts'
import { useEkDialog } from './components/dialog/index.ts'
import { EkOnlyOffice } from './components/only-office/index.ts'
import { EkTable } from './components/table/index.ts'
import installer from './utils/installer'

// 按需导入解析器
export { EpluskitResolver } from './utils/resolver'

export { EkDateRange, EkOnlyOffice, EkTable, useEkDialog }

export default installer
