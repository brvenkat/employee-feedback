import * as React from 'react'
import { mount } from 'enzyme'
import App, { AppStyle }  from '../../src/public/components/App'
import { MemoryRouter } from 'react-router'
import { Routes } from '../../src/public/components/Routes'

describe('App', () => {
  it('Should render component correctly ', () => {
    const props = {
      surveys: [
        {
          name: 'some-name',
          url: 'some-url'
        }
      ]
    }
    const wrapper = mount (
      <MemoryRouter initialEntries={[ '/' ]}>
        <App {...props}/>
      </MemoryRouter>
    )
    expect(wrapper.find('h1').text()).toEqual('Welcome to the employee Feedback Survey')
    expect(wrapper.find(Routes).prop('surveys')).toEqual(props.surveys)
    expect(wrapper.find('span').at(0).hasClass(AppStyle)).toEqual(true)
  })
})
