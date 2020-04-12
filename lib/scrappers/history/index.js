
const { getPage, endpoints } = require('../utils')
const QuotationHistory = require('./QuotationHistory')

async function scrapQuotationHistory (share) {
  const response = await getPage(endpoints.quotationHistory, share)
  const data = JSON.parse(response.serialize().replace(/<.+>/g, ''))
  return data.map(item => {
    return {
      date: new Date(item[0]).toISOString().slice(0, 10),
      quotation: item[1]
    }
  })
}

async function getQuotationHistory (share) {
  const data = await scrapQuotationHistory(share)
  return new QuotationHistory(share, data)
}

module.exports = { getQuotationHistory }
