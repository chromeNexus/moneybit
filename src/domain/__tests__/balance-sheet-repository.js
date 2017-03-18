const fs = require('fs')
const rimraf = require('rimraf')
const {expect} = require('chai')

const BalanceSheetRepository = require('../balance-sheet-repository')
const { journal } = require('../../__tests__/helper')

const repository = new BalanceSheetRepository()

describe('BalanceSheetRepository', () => {
  describe('saveYamlToPath', () => {
    it('saves the yaml to the path', () => {
      const path = `${__dirname}/bs.yml`

      repository.saveYamlToPath(journal.toBalanceSheet(), path)

      const yaml = fs.readFileSync(path).toString()

      expect(yaml).to.be.a('string')
      expect(yaml.length).to.gt(0)

      rimraf.sync(path)
    })
  })
})