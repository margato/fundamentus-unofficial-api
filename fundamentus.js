const scrapper = require('./scrapper')

function fetch (share) {
  if (!share) {
    throw new Error('Share cannot be null or undefined')
  }
  return scrapper.get(share)
}

module.exports = { fetch }
