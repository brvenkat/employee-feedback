import * as React from 'react'
import { mount } from 'enzyme'
import { SurveyData } from '../../src/public/components/SurveyData'
import { MemoryRouter } from 'react-router'
import { NavLink } from 'react-router-dom'

describe('SurveyData', () => {
  it('Should render component correctly ', () => {
    const props = {
      surveys: [
        {
          name: 'some-name',
          url: 'some-url/1'
        },
        {
          name: 'some-name-2',
          url: 'some-url/2'
        }
      ]
    }
    const wrapper = mount(
      <MemoryRouter initialEntries={[ '/' ]}>
        <SurveyData {...props} />
      </MemoryRouter>
    )
    expect(wrapper.find('h3').text()).toEqual('Click on the names to see survey details')
    expect(wrapper.find(NavLink).at(0).prop('to')).toEqual('1')
    expect(wrapper.find(NavLink).at(0).childAt(0).text()).toEqual('some-name')
    expect(wrapper.find(NavLink).at(1).prop('to')).toEqual('2')
    expect(wrapper.find(NavLink).at(1).childAt(0).text()).toEqual('some-name-2')
  })
})