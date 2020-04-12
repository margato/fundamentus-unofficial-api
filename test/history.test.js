const FundamentusAPI = require('../index')

test('PETR3 quotation history in the last 10 days must be fetched', async () => {
  const history = await FundamentusAPI.fetchQuotationHistory('petr3', 10)
  expect(history.quotationHistory.length).toBe(10)
})
