import type { App, Component, ComponentCustomProperties, Directive } from 'vue'

// 安装组件
export function withInstall(component: Component): any {
  return {
    install(app: App): void {
      app.component(component.name!, component)
    },
  }
}

// 安装指令
export function withInstallDirective(directive: Directive, name: string): any {
  return {
    install(app: App): void {
      app.directive(name, directive)
    },
  }
}

// 安装方法
export function withInstallFunction(func: ComponentCustomProperties | CallableFunction, name: string): any {
  return {
    install(app: App): void {
      app.config.globalProperties[name] = func
    },
  }
}
