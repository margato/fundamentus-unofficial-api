const scrapper = require('./scrapper')

function fetch (share) {
  if (!share) {
    throw new Error('Share cannot be null or undefined')
  }
  return scrapper.getDetails(share)
}

function fetchQuotationHistory (share, maxDays = null) {
  if (!share) {
    throw new Error('Share cannot be null or undefined')
  }
  return scrapper.getQuotationHistory(share, maxDays)
}

module.exports = { fetch, fetchQuotationHistory }
