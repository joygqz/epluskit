export default function () {
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
          `epluskit/es/components/${compName}/src/index.css`,
          ...(compName === 'DateRange'
            ? ['element-plus/es/components/date-picker/style/css']
            : []),
          ...(compName === 'Dialog'
            ? ['element-plus/es/components/dialog/style/css']
            : []),
        ],
      }
    }

    return null
  }
}
