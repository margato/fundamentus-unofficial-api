
const { getPage, endpoints } = require('../utils')
const EarningsHistory = require('./EarningsHistory')

async function scrapEarningsHistory (share) {
  const dom = await getPage(endpoints.earningsHistory, share)
  const { document } = dom.window
  const trs = Array.from(document.querySelectorAll('tr'))
  if (trs.length === 0) {
    throw new Error('Fundamentus returned an error for share: ' + share)
  }
  return trs.slice(1).map(tr => {
    const data = tr.innerHTML.replace(/\n/g, '').replace(/( ){2,}/g, '').replace(/<\/td>/g, '</td>-').trim()
    const tds = data.split('-').slice(0, 4).map(td => td.replace(/<td>/, '').replace('</td>', ''))
    return tds
  })
}

function parseTdsDataToObject (array) {
  return array.map(td => {
    const dateStr = td[0].split('/')
    const date = new Date(Number(dateStr[2]), Number(dateStr[1]) - 1, Number(dateStr[0]))
    return {
      date: date.toISOString().slice(0, 10),
      value: parseFloat(td[1].replace(',', '.')),
      type: td[2],
      perShare: parseInt(td[3])
    }
  })
}

async function getEarningsHistory (share) {
  const data = await scrapEarningsHistory(share)
  const parsedData = parseTdsDataToObject(data)
  return new EarningsHistory(share, parsedData)
}

module.exports = { getEarningsHistory }
