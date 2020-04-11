const FundamentusAPI = require('../index')

test('PETR3 share must be fetched', async () => {
  const share = await FundamentusAPI.fetch('petr3')
  console.log(share)
  expect(share.papel).toBe('PETR3')
})

test('Fundamentus API must throw an error of invalid share', async () => {
  await expect(FundamentusAPI.fetch('XXXXXXX')).rejects.toThrow()
})
