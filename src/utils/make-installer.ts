import type { App, Plugin } from 'vue'

export interface EPlusKitInstallerResult {
  version: string
  install: (app: App) => void
}

const version = '1.0.0'

export default function makeInstaller(plugins: Plugin[] = []): EPlusKitInstallerResult {
  const install = (app: App): void => {
    plugins.forEach(c => app.use(c))
  }
  return {
    version,
    install,
  }
}
