export default function () {
  return (name: string) => {
    if (name.startsWith('Ek')) {
      const compName = name.replace(/^Ek/, '')
      return {
        name,
        from: 'epluskit',
        sideEffects: [
          `epluskit/es/components/${compName}/src/index.css`,
          ...(compName === 'DateRange'
            ? ['element-plus/es/components/date-picker/style/css']
            : []),
        ],
      }
    }

    if (name.startsWith('useEk')) {
      const hookName = name.replace(/^useEk/, '')
      return {
        name,
        from: 'epluskit',
        sideEffects: [
          `epluskit/es/components/${hookName}/src/index.css`,
          ...(hookName === 'Dialog'
            ? ['element-plus/es/components/dialog/style/css']
            : []),
        ],
      }
    }

    return null
  }
}
