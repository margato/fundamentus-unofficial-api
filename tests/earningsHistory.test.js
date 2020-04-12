const FundamentusAPI = require('../index')

test('PETR3 earnings in the 2019 must be 3', async () => {
  const quotationHistory = await FundamentusAPI.fetchEarningsHistory('petr3')

  expect(quotationHistory.minDate('2019-01-01').maxDate('2019-12-31').history.length).toBe(3)
})
