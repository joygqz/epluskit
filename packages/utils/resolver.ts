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
  }
}
