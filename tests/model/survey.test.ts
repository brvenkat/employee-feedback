import { partialOf } from 'jest-helpers'
import * as survey from '../../src/models/survey'
import axios from 'axios'

const response = {
  data: {
    survey_results: [{
      name: 'some-name',
      url: 'some-url'
    }]
  }
}

describe('survey', () => {
  it('Should fetch data in proper scenario', async () => {
    jest.spyOn(axios, 'get').mockResolvedValue(response)
    const result = await survey.fetch()
    expect(result).toEqual([ { url: 'some-url', name: 'some-name' } ])
  })
  it('Should handle error gracefully', async () => {
    jest.spyOn(axios, 'get').mockRejectedValue(response)
    const result = await survey.fetch()
    expect(result).toEqual([])
  })
  it('Should handle more than one entry', async () => {
    jest.spyOn(axios, 'get').mockResolvedValue({
      data: {
        survey_results: [
          {
            name: 'some-name-1',
            url: 'some-url-1'
          },
          {
            name: 'some-name-2',
            url: 'some-url-2'
          }
        ]
      }
    })
    const result = await survey.fetch()
    expect(result).toEqual(
      [
        { url: 'some-url-1', name: 'some-name-1' },
        { url: 'some-url-2', name: 'some-name-2' }
      ]
    )
  })
})