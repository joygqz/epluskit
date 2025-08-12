import type { App, Plugin } from 'vue'

const version = __VERSION__

export interface EPlusKitInstallerResult {
  version: string
  install: (app: App) => void
}

export default function makeInstaller(plugins: Plugin[] = []): EPlusKitInstallerResult {
  const install = (app: App): void => {
    plugins.forEach(c => app.use(c))
  }

  return {
    version,
    install,
  }
}
