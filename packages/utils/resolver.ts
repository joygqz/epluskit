import { kebabCase } from 'es-toolkit/string'

export function EpluskitResolver() {
  return (name: string) => {
    if (name.startsWith('Ek') || name.startsWith('useEk')) {
      let compName = ''
      if (name.startsWith('Ek')) {
        compName = name.replace(/^Ek/, '')
      }
      else if (name.startsWith('useEk')) {
        compName = name.replace(/^useEk/, '')
      }
      return {
        name,
        from: 'epluskit',
        sideEffects: [
          `epluskit/es/components/${kebabCase(compName)}/src/index.css`,
          ...(compName === 'DateRange'
            ? ['element-plus/es/components/date-picker/style/css']
            : []),
          ...(compName === 'Dialog'
            ? ['element-plus/es/components/dialog/style/css']
            : []),
          ...(compName === 'Table'
            ? ['element-plus/es/components/table/style/css', 'element-plus/es/components/table-column/style/css']
            : []),

        ],
      }
    }

    return null
  }
}
