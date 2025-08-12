import { withInstallFunction } from '../../utils/install'
import { useEkDialog } from './src/index.ts'

export { useEkDialog }

export default withInstallFunction(useEkDialog, '$useEkDialog')
