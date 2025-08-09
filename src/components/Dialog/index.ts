import { withInstallFunction } from '@/utils/install.ts'
import { useEkDialog } from './src/index.tsx'

// 按需导入配置
export { useEkDialog }

// 全局安装函数
export default withInstallFunction(useEkDialog, 'useEkDialog')
