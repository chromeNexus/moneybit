const BalanceSheet = require('../balance-sheet')
const Money = require('../money')

const AccountTypeChartFactory = require('../account-type-chart-factory')
const JournalFactory = require('../journal-factory')

const journalObj = require('../../__mocks__/journal')
const chartObj = require('../../__mocks__/chart')

const { expect } = require('chai')

const ledger = new JournalFactory(new AccountTypeChartFactory().createFromObject(chartObj)).createFromArray(journalObj).toLedger()

describe('BalanceSheet', () => {
  describe('retainedEarnings', () => {
    it('returns the retained earning of the balance sheet', () => {
      const bs = new BalanceSheet(ledger)

      expect(bs.retainedEarnings()).to.be.instanceof(Money)
      expect(bs.retainedEarnings().amount).to.equal(950)
    })
  })
})