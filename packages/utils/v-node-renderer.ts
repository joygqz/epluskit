import { defineComponent } from 'vue'

const VNodeRenderer = defineComponent({
  props: ['vnode'],
  render() {
    return this.vnode
  },
})

export default VNodeRenderer
