<script setup lang="ts">
import type { IConfig } from '@onlyoffice/document-editor-vue'
import { DocumentEditor } from '@onlyoffice/document-editor-vue'
import { computed, getCurrentInstance, onMounted, ref } from 'vue'

const { documentServerUrl, document, getToken, callbackUrl, config } = defineProps<{
  documentServerUrl: string
  document?: IConfig['document']
  callbackUrl?: string
  config?: IConfig
  getToken?: (config: IConfig) => Promise<string | undefined>
}>()

const instance = getCurrentInstance()

const documentType = computed(() => {
  const map: Record<string, string[]> = {
    word: ['doc', 'docm', 'docx', 'dot', 'dotm', 'dotx', 'epub', 'fb2', 'fodt', 'htm', 'html', 'mht', 'mhtml', 'odt', 'ott', 'pages', 'rtf', 'stw', 'sxw', 'txt', 'wps', 'wpt', 'xml'],
    cell: ['csv', 'et', 'ett', 'fods', 'numbers', 'ods', 'ots', 'sxc', 'xls', 'xlsb', 'xlsm', 'xlsx', 'xlt', 'xltm', 'xltx', 'xml'],
    slide: ['dps', 'dpt', 'fodp', 'key', 'odp', 'otp', 'pot', 'potm', 'potx', 'pps', 'ppsm', 'ppsx', 'ppt', 'pptm', 'pptx', 'sxi'],
    pdf: ['djvu', 'docxf', 'oform', 'oxps', 'pdf', 'xps'],
    diagram: ['vsdm', 'vsdx', 'vssm', 'vssx', 'vstm', 'vstx'],
  }

  if (document?.fileType) {
    for (const [type, extensions] of Object.entries(map)) {
      if (extensions.includes(document.fileType.toLowerCase())) {
        return type
      }
    }
  }
  return config?.documentType || instance?.attrs?.documentType as string || undefined
})

const _config = ref<IConfig>(
  {
    documentType: documentType.value,
    height: '100%',
    // token: undefined,
    type: 'desktop',
    width: '100%',
    ...config,
    document: {
      fileType: '',
      key: '',
      title: '',
      url: '',
      ...document,
    },
    editorConfig: {
      actionLink: undefined, // 动作链接配置
      callbackUrl, // 回调地址
      coEditing: undefined, // 协同编辑配置
      createUrl: undefined, // 创建新文档的URL
      lang: 'zh-CN', // 语言设置;
      mode: 'edit', // 打开模式
      recent: undefined, // 最近使用的文档列表
      region: undefined, // 区域设置
      templates: undefined, // 模板列表
      user: undefined, // 用户信息
      customization: { // 自定义配置
        anonymous: { // 匿名用户配置
          request: false, // 是否请求匿名名称
          label: 'Guest', // 匿名用户标签
        },
        autosave: false, // 启用自动保存功能
        close: {
          visible: true,
          text: 'Edfdsafdsafsdafsadfit',
        },
        comments: false, // 评论功能
        compactHeader: true, // 紧凑型标题栏
        compactToolbar: true, // 紧凑型工具栏
        compatibleFeatures: false, // 兼容功能
        customer: { // 客户信息配置
          address: undefined, // 地址
          info: undefined, // 其他信息
          logo: undefined, // 大logo
          logoDark: undefined, // 大logo暗色版
          mail: undefined, // 邮箱
          name: undefined, // 名称
          phone: undefined, // 电话
          www: undefined, // 网站
        },
        features: undefined, // 功能配置
        feedback: undefined, // 反馈配置
        forcesave: false, // 强制保存功能
        forceWesternFontSize: false, // 强制西文字体大小
        goback: undefined, // 返回到文档所在位置
        help: false, // 帮助功能
        hideNotes: true, // 隐藏笔记
        hideRightMenu: true, // 隐藏右键菜单
        hideRulers: false, // 隐藏标尺
        integrationMode: undefined, // 集成模式
        layout: { // 布局配置
          header: {
            editMode: true, // 编辑模式
            save: true, // 保存按钮
            user: true, // 用户信息
            users: true, // 用户列表
          },
          leftMenu: {
            mode: true,
            navigation: true,
            spellcheck: true,
          },
          rightMenu: {
            mode: true,
          },
          statusBar: {
            actionStatus: true,
            docLang: true,
            textLang: true,
          },
          toolbar: {
            collaboration: {
              mailmerge: true,
            },
            draw: true,
            file: {
              close: true,
              info: true,
              save: true,
              settings: true,
            },
            home: {},
            layout: true,
            plugins: true,
            protect: true,
            references: true,
            save: true,
            view: {
              navigation: true,
            },
          },
        },
        logo: { // logo 配置
          image: undefined,
          imageDark: undefined,
          imageLight: undefined,
          imageEmbedded: undefined,
          url: undefined,
          visible: false,
        },
        macros: false, // 启用宏功能
        macrosMode: 'disable', // 宏模式
        mentionShare: false, // 提及分享功能
        mobile: { // 移动端配置
          forceView: false,
          info: false,
          standardView: false,
        },
        plugins: false, // 插件功能
        pointerMode: 'select', // PPT 指针模式
        review: undefined,
        showHorizontalScroll: true, // 显示水平滚动条
        showVerticalScroll: true, // 显示垂直滚动条
        slidePlayerBackground: '#000000', // 幻灯片播放器背景色;
        submitForm: false, // 表单提交功能;
        toolbarHideFileName: false, // 工具栏隐藏文件名
        toolbarNoTabs: false, // 工具栏不显示标签
        uiTheme: 'theme-dark', // UI 主题
        unit: 'cm', // 单位设置
        wordHeadingsColor: '#00ff00', // Word 标题颜色;
        zoom: 100, // 缩放级别;
      },
      embedded: undefined, // 嵌入式配置
      plugins: undefined, // 插件配置
      ...config?.editorConfig,
    },
    events: {
      ...config?.events,
    },
  },
)

onMounted(async () => {
  if (getToken) {
    _config.value.token = await getToken(_config.value)
  }
})

const documentEditor = ref<any>(null)
function onDocumentReady() {
  documentEditor.value = window.DocEditor.instances.docEditor

  const events_onDocumentReady = instance?.attrs?.events_onDocumentReady as FunctionConstructor
  if (events_onDocumentReady) {
    events_onDocumentReady()
  }
}

defineExpose({
  documentEditor,
})
</script>

<template>
  <DocumentEditor
    id="docEditor" :document-server-url="documentServerUrl" :config="_config"
    :events_on-document-ready="onDocumentReady" v-bind="$attrs" width="100%" height="100%"
  />
</template>

<style scoped>
@import './index.css';
</style>
