const jsdom = require('jsdom')
const camelCase = require('camelcase')

const regex = {
  tag: /<span class="(txt|oscil)">(.)+<\/span>/,
  nested: /(>((-)?[0-9]+,?([0-9])+?)%)|(>[A-Za-z]+)/,
  number: /(^-?[0-9]+(,[0-9]+)?%?$)|(([0-9]+\.)+[0-9])/
}

function formatKey (key) {
  let formattedKey = key.normalize('NFD')
    .replace(/[\u0300-\u036f\\.\\$\\(\\)]/g, '')
    .replace(/ /g, '_')
    .replace(/_?\/_?( )*/g, '_por_')
    .toLowerCase()

  if (formattedKey.match(/[0-9]{4}/)) {
    formattedKey = 'ANO_' + formattedKey
  }
  if (formattedKey.charAt(0).match(/[0-9]/)) {
    formattedKey = 'ULTIMOS_' + formattedKey
  }
  return camelCase(formattedKey)
}

function formatValue (value) {
  if (!value.match(regex.number)) return value

  if (value.includes('%')) {
    const number = parseFloat(value.replace(/,/g, '.'))
    return parseFloat((number / 100.0).toPrecision(6))
  } else {
    return parseInt(value.replace(/\./g, ''))
  }
}

function formatData (data) {
  const matches = regex.tag.exec(data)
  if (!matches) return '-'

  const result = matches[0].toString().replace('<span class="txt">', '').replace('</span>', '')

  if (result.includes('</a>') || result.includes('oscil')) {
    const value = regex.nested.exec(result)
    return value[0].toString().substring(1)
  }

  return result
}

async function getPage (share) {
  const { JSDOM } = jsdom
  const url = 'https://fundamentus.com.br/detalhes.php?papel='
  try {
    const dom = await JSDOM.fromURL(url + share)
    return dom
  } catch (e) {
    console.error(e)
  }
}

async function scrapShare (share) {
  const dom = await getPage(share)
  const { document } = dom.window
  const labels = Array.from(document.querySelectorAll('td.label'))
  const data = Array.from(document.querySelectorAll('td.data'))

  if (labels.length === 0) {
    throw new Error('Fundamentus returned an error for share: ' + share)
  }

  return labels.map((label, index) => ({
    label: label.innerHTML,
    value: data[index].innerHTML
  }))
}

function getData (table) {
  const result = {}

  const data = table.map(({ label, value }) => {
    const formattedLabel = formatData(label)
    const data = formatValue(formatData(value))
    return {
      name: label,
      label: formattedLabel,
      data: data !== '-' ? data : null
    }
  })

  data.map(({ label, data }, index) => {
    if (label !== '-') {
      const resultLabel = Object.keys(result).includes(label) ? label + '_ultimos_3_meses' : label
      result[formatKey(resultLabel)] = data
    }
  })

  const orderedResult = {}
  Object.keys(result).sort().forEach(key => {
    orderedResult[key] = result[key]
  })
  return orderedResult
}

async function get (share) {
  const table = await scrapShare(share)
  const data = getData(table)
  return data
}

module.exports = { get }
