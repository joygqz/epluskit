import type { VNode } from 'vue'
import { ElDialog } from 'element-plus'
import { h, isVNode, onBeforeUnmount, ref, render, watch } from 'vue'
import 'element-plus/es/components/dialog/style/css'

export function useEkDialog(props: any): any {
  const container = document.createElement('div')
  document.body.appendChild(container)
  const modelValue = ref(false)
  let vnode: VNode | null = null
  const { title, content, footer } = props
  delete props.title
  delete props.content
  delete props.footer

  const updateVNode = (): void => {
    vnode = h(ElDialog, {
      ...props,
      'modelValue': modelValue.value,
      'onUpdate:modelValue': (val: boolean) => {
        modelValue.value = val
      },
    }, {
      default: () => {
        if (typeof content === 'string') {
          return content
        }
        else if (isVNode(content)) {
          return content
        }
        else if (content) {
          return h(content)
        }
        return null
      },
      header: () => {
        if (typeof title === 'string') {
          return title
        }
        else if (isVNode(title)) {
          return title
        }
        else if (title) {
          return h(title)
        }
        return null
      },
      footer: () => {
        if (typeof footer === 'string') {
          return footer
        }
        else if (isVNode(footer)) {
          return footer
        }
        else if (footer) {
          return h(footer)
        }
        return null
      },
    })

    render(vnode, container)
  }

  watch([modelValue], () => {
    updateVNode()
  }, {
    immediate: true,
    deep: true,
  })

  onBeforeUnmount(() => {
    if (vnode) {
      render(null, container)
      vnode = null
    }
    document.body.removeChild(container)
  })

  return {
    open() {
      if (vnode)
        modelValue.value = true
    },
    close() {
      if (vnode)
        modelValue.value = false
    },
    destroy() {
      if (vnode) {
        render(null, container)
        vnode = null
      }
      document.body.removeChild(container)
    },
  }
}
