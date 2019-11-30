import * as parse from '../../src/utils/parse'
import * as mock from '../mockData/mock'

describe('parse', () => {
  it('Should parse the input correctly', () => {
    expect(parse.prepareData(mock.inputOne)).toEqual(mock.outputOne)
  })
  it('Should give proper output when there is no response to a question', () => {
    expect(parse.prepareData(mock.inputTwo)).toEqual(mock.outputTwo)
  })
  it('Should not crash on an ionvalid input', () => {
    expect(parse.prepareData(mock.inputThree)).toEqual(mock.outputThree)
  })
})