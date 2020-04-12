const { details, history } = require('./lib/scrappers')

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
  return history.getQuotationHistory(share)
}

module.exports = { fetch, fetchQuotationHistory }
