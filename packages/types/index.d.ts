export interface TableColumn<T = any> {
  type?: 'default' | 'selection' | 'index' | 'expand'
  index?: (index: number) => number
  label?: string
  columnKey?: string
  prop?: keyof T | string
  width?: string | number
  minWidth?: string | number
  fixed?: boolean | 'left' | 'right'
  sortable?: boolean | 'custom'
  sortMethod?: (a: T, b: T) => number
  sortBy?: string | string[] | ((row: T, index: number) => string | string[])
  sortOrders?: ('ascending' | 'descending' | null)[]
  resizable?: boolean
  formatter?: (row: T, column: TableColumnCtx<T>, cellValue: any, index: number) => VNode | string
  renderCell?: (data: { row: T, column: TableColumnCtx<T>, cellValue: any, index: number }) => VNode
  renderHeader?: (data: { column: TableColumnCtx<T>, index: number }) => VNode
  align?: 'left' | 'center' | 'right'
  headerAlign?: 'left' | 'center' | 'right'
  className?: string
  labelClassName?: string
  selectable?: (row: T, index: number) => boolean
  reserveSelection?: boolean
  filters?: { text: string, value: string }[]
  filterPlacement?: 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end'
  filterMultiple?: boolean
  filterMethod?: (value: any, row: T, column: TableColumnCtx<T>) => boolean
  filteredValue?: string[]
  tooltipFormatter?: (data: { row: T, column: TableColumnCtx<T>, cellValue: any }) => VNode | string
  hidden?: boolean
  slotName?: string

  children?: TableColumn<T>[]
}
