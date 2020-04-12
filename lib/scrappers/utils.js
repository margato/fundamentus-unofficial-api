const jsdom = require('jsdom')

async function getPage (endpoint, share) {
  const { JSDOM } = jsdom
  try {
    const dom = await JSDOM.fromURL(endpoint + share)
    return dom
  } catch (e) {
    console.error(e)
  }
}

const endpoints = {
  details: 'https://fundamentus.com.br/detalhes.php?papel=',
  quotationHistory: 'https://fundamentus.com.br/amline/cot_hist.php?papel=',
  earningsHistory: 'https://www.fundamentus.com.br/proventos.php?tipo=1&papel='
}

module.exports = {
  getPage, endpoints
}
