import { SurveyDetailRow } from '../../src/public/components/SurveyDetailRow'
import { mount } from 'enzyme'
import * as React from 'react'
import { TableCell } from '@material-ui/core'

describe('Row', () => {
  it('should render component correctly ', () => {
    const props = {
      index: 1,
      detail: {
        theme: 'some-theme',
        description: 'some-description',
        rating: 5
      }
    }
    const wrapper = mount(<SurveyDetailRow {...props} />)
    expect(wrapper.find(TableCell)).toHaveLength(4)
    expect(wrapper.find(TableCell).at(0).childAt(0).text()).toEqual('1')
    expect(wrapper.find(TableCell).at(1).childAt(0).text()).toEqual('some-theme')
    expect(wrapper.find(TableCell).at(2).childAt(0).text()).toEqual('some-description')
    expect(wrapper.find(TableCell).at(3).childAt(0).text()).toEqual("5")
  })
})