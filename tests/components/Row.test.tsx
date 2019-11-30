import { Row } from '../../src/public/components/Row'
import { mount } from 'enzyme'
import * as React from 'react'
import { TableCell } from '@material-ui/core'

describe('Row', () => {
  it('should render component correctly ', () => {
    const props = {
      detail: {
        description: 'some-description',
        rating: 5
      }
    }
    const wrapper = mount(<Row {...props} />)
    expect(wrapper.find(TableCell)).toHaveLength(2)
    expect(wrapper.find(TableCell).at(0).childAt(0).text()).toEqual('some-description')
    expect(wrapper.find(TableCell).at(1).childAt(0).text()).toEqual("5")
  })
})