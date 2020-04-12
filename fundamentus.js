const { details, quotationHistory, earningsHistory } = require('./lib/scrappers')

function fetch (share) {
  if (!share) {
    throw new Error('Share cannot be null or undefined')
  }
  return details.getDetails(share)
}

function fetchQuotationHistory (share) {
  if (!share) {
    throw new Error('Share cannot be null or undefined')
  }
  return quotationHistory.getQuotationHistory(share)
}

function fetchEarningsHistory (share) {
  if (!share) {
    throw new Error('Share cannot be null or undefined')
  }
  return earningsHistory.getEarningsHistory(share)
}

module.exports = { fetch, fetchQuotationHistory, fetchEarningsHistory }
