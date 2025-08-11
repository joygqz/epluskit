import { withInstall } from '@/utils/install.ts'
import EkDateRange from './src/index.vue'

// 按需导入配置
export { EkDateRange }

// 全局安装函数
export default withInstall(EkDateRange)
