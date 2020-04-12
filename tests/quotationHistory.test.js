const FundamentusAPI = require('../index')

test('PETR3 quotation history in the last 10 days must be fetched', async () => {
  const quotationHistory = await FundamentusAPI.fetchQuotationHistory('petr3')

  expect(quotationHistory.last(10).history.length).toBe(10)
})
