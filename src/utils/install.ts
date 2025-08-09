import type { App } from 'vue'

// 安装组件
export function withInstall(component: any): any {
  return {
    install(app: App): void {
      app.component(component.name, component)
    },
  }
}

// 安装指令
export function withInstallDirective(directive: any, name: string): any {
  return {
    install(app: App): void {
      app.directive(name, directive)
    },
  }
}

// 安装方法
export function withInstallFunction(func: any, name: string): any {
  return {
    install(app: App): void {
      app.config.globalProperties[name] = func
    },
  }
}
