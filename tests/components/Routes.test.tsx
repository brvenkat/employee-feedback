import * as React from 'react'
import { mount } from 'enzyme'
import { Routes } from '../../src/public/components/Routes'
import { Route } from 'react-router-dom'
import { MemoryRouter } from 'react-router'

describe('Routes', () => {
  it('Should render component correctly ', () => {
    const props = {
      surveys: [
        {
          name: 'some-name',
          url: 'some-url'
        }
      ]
    }
    const wrapper = mount(
      <MemoryRouter initialEntries={[ '/' ]}>
        <Routes {...props} />
      </MemoryRouter>
    )
    expect(wrapper.find(Route).at(0).prop('path')).toEqual('/')
    expect(wrapper.find(Route).at(1).prop('path')).toEqual('/:surveyId')
  })
})