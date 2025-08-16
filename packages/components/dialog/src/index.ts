import type { DialogProps } from 'element-plus'
import type { Component, VNode } from 'vue'
import { ElDialog } from 'element-plus'
import { h, isVNode, onBeforeUnmount, ref, render, watch } from 'vue'
import 'element-plus/es/components/dialog/style/css'
import './index.css'

export interface EkDialogSlots {
  title?: string | Component
  content?: string | Component
  footer?: string | Component
}

export interface EkDialogInstance {
  open: (props?: any) => void
  close: () => void
  destroy: () => void
}

export function useEkDialog(props: Partial<DialogProps>, slots: EkDialogSlots): EkDialogInstance {
  const container = document.createElement('div')
  document.body.appendChild(container)
  const modelValue = ref(false)
  let vnode: VNode | null = null
  const contentProps = ref<any>({})
  const updateVNode = (): void => {
    vnode = h(ElDialog, {
      'draggable': true,
      'transition': 'dialog-scale',
      ...props,
      'modelValue': modelValue.value,
      'onUpdate:modelValue': (val: boolean) => {
        modelValue.value = val
      },
    }, {
      default: () => {
        if (typeof slots.content === 'string') {
          return slots.content
        }
        else if (isVNode(slots.content)) {
          return slots.content
        }
        else if (slots.content) {
          return h(slots.content, contentProps.value)
        }
        return null
      },
      footer: () => {
        if (typeof slots.footer === 'string') {
          return slots.footer
        }
        else if (isVNode(slots.footer)) {
          return slots.footer
        }
        else if (slots.footer) {
          return h(slots.footer)
        }
        return null
      },
    })

    render(vnode, container)
  }

  watch([modelValue, contentProps], () => {
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
    open(props: any) {
      modelValue.value = true
      contentProps.value = props || {}
    },
    close() {
      modelValue.value = false
    },
    destroy() {
      if (vnode) {
        render(null, container)
        vnode = null
      }
      if (container.parentNode) {
        document.body.removeChild(container)
      }
    },
  }
}
