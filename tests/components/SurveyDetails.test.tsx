import * as React from 'react'
import { mount } from 'enzyme'
import { SurveyDetails } from '../../src/public/components/SurveyDetails'
import { partialOf } from 'jest-helpers'
import { RouteComponentProps } from 'react-router'
import axios from 'axios'
import * as mock from '../mockData/mock'
import { SurveyAPIResponse } from '../../src/models/SurveyDetails'
import * as parse from '../../src/utils/parse'
import { Link, Table, TableCell, TableBody } from '@material-ui/core'
import wait from 'waait'
import { SurveyDetailRow } from '../../src/public/components/SurveyDetailRow'

describe('SurveyDetails', () => {
  beforeEach(() => {
    jest.spyOn(axios, 'get').mockResolvedValue(partialOf<SurveyAPIResponse>({
      data: mock.mockSurveyData
    }))
    jest.spyOn(parse, 'prepareData').mockReturnValue({
      participationRate: 81.12,
      question: [
        {
          theme: 'some-theme',
          description: 'some-description',
          rating: 1.12
        }
      ]
    })
  })
  afterEach(() => jest.resetAllMocks())
  it('Should load component correctly ', async () => {
    const props = partialOf<RouteComponentProps>({
      match: {
        params: {
          surveyId: 1
        },
        isExact: true,
        path: '',
        url: ''
      },
    })
    const wrapper = mount(<SurveyDetails {...props} />)
    await wait(0)
    wrapper.update()
    expect(wrapper.find(Link).text()).toEqual('Back to Survey Summary')
    expect(wrapper.find(Table).at(0).find(TableCell).at(0).text()).toEqual('Question No.')
    expect(wrapper.find(Table).at(0).find(TableCell).at(1).text()).toEqual('Theme')
    expect(wrapper.find(Table).at(0).find(TableCell).at(2).text()).toEqual('Question Description')
    expect(wrapper.find(Table).at(0).find(TableCell).at(3).text()).toEqual('Response Rating')
    expect(wrapper.find(Table).at(0).find(TableBody)).toHaveLength(1)
    expect(wrapper.find(Table).at(0).find(TableBody).at(0).find(SurveyDetailRow).prop('detail')).toEqual({
      description: 'some-description',
      rating: 1.12,
      theme: 'some-theme'
    })
  })
  it('Should handle error scenarios gracefully ', async () => {
    const props = partialOf<RouteComponentProps>({
      match: {
        params: {
          surveyId: 1
        },
        isExact: true,
        path: '',
        url: ''
      },
    })
    jest.spyOn(axios, 'get').mockRejectedValue(partialOf<SurveyAPIResponse>({
      data: mock.mockSurveyData
    }))
    const wrapper = mount(<SurveyDetails {...props} />)
    await wait(0)
    wrapper.update()
    expect(wrapper.find(Link).text()).toEqual('Back to Survey Summary')
    expect(wrapper.find(Table).at(0).find(TableCell).at(0).text()).toEqual('Question No.')
    expect(wrapper.find(Table).at(0).find(TableCell).at(1).text()).toEqual('Theme')
    expect(wrapper.find(Table).at(0).find(TableCell).at(2).text()).toEqual('Question Description')
    expect(wrapper.find(Table).at(0).find(TableCell).at(3).text()).toEqual('Response Rating')
    expect(wrapper.find(Table).at(0).find(TableBody).at(0).find(SurveyDetailRow)).toEqual({})
  })
})