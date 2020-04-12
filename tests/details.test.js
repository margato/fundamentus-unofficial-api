const FundamentusAPI = require('../index')

test('PETR3 share must be fetched', async () => {
  const share = await FundamentusAPI.fetch('petr3')
  expect(share.papel).toBe('PETR3')
})
