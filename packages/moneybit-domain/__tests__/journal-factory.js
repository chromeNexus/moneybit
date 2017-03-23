const { Journal, AccountTypeChart } = require('../')
const { expect } = require('chai')

const journalObj = require('../__mocks__/journal')
const chartObj = require('../__mocks__/chart')

const chart = new AccountTypeChart.Factory().createFromObject(chartObj)

describe('JournalFactory', () => {
  const factory = new Journal.Factory(chart)

  describe('createFromArray', () => {
    it('creates a journal from the array of the object which represents the trade', () => {
      const journal = factory.createFromArray(journalObj)

      expect(journal).to.be.instanceof(Journal)
    })
  })
})