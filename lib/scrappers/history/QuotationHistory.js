class QuotationHistory {
  constructor (share, history) {
    this.share = share.toUpperCase()
    this.history = history
  }

  last (days) {
    this.history = this.history.slice(this.history.length - days)
    return this
  }

  minDate (date) {
    this.history = this.history.filter(quotation => {
      return new Date(quotation.date) >= new Date(date)
    })
    return this
  }

  maxDate (date) {
    this.history = this.history.filter(quotation => {
      return new Date(quotation.date) <= new Date(date)
    })
    return this
  }

  minQuotation (min) {
    this.history = this.history.filter(({ quotation }) => {
      return quotation >= min
    })
    return this
  }

  maxQuotation (max) {
    this.history = this.history.filter(({ quotation }) => {
      return quotation <= max
    })
    return this
  }
}

module.exports = QuotationHistory
