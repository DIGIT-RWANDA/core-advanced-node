const parse = (csvString = '') => {
  const lines = csvString.split('\n')
  let result = []
  let headers = lines[0].split(',')

  lines.forEach((line, i) => {
    let obj = {}
    let fields = line.split(',')
    headers.forEach((header, j) => {
      obj[header] = fields[j]
      result.push(obj)
    })
  })
  return result
}

module.exports = (ops) => {
  console.log(ops)
  return {
    parse
  }

}
