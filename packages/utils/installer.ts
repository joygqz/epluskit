import component from '../component'
import makeInstaller from './make-installer'

const installer = makeInstaller(component)
export { installer as default }
