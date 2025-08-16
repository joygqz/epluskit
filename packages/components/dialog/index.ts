import { withInstallFunction } from '../../utils/install.ts'
import { useEkDialog } from './src/index.ts'

export { useEkDialog }

export default withInstallFunction(useEkDialog, '$useEkDialog')
