class EarningsHistory {
  constructor (share, history) {
    this.share = share.toUpperCase()
    this.history = history
  }

  filterByType (type) {
    this.history = this.history.filter(item => item.type === type)
    return this
  }

  maxValue (value) {
    this.history = this.history.filter(item => item.value <= value)
    return this
  }

  minValue (value) {
    this.history = this.history.filter(item => item.value >= value)
    return this
  }

  maxDate (date) {
    this.history = this.history.filter(item => new Date(item.date) <= new Date(date))
    return this
  }

  minDate (date) {
    this.history = this.history.filter(item => new Date(item.date) >= new Date(date))
    return this
  }
}

module.exports = EarningsHistory
