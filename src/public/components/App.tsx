import * as React from 'react'
import {style} from 'typestyle'
import { SurveyResponse } from '../../models/SurveyResponse'
import { Routes } from './Routes'

const AppStyle = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
})

const App = (props: {surveys: SurveyResponse[]}) => (
  <span className={AppStyle}>
    <h1 style={{ textAlign: 'center' }}>Welcome to the employee Feedback Survey</h1>
    <Routes surveys={props.surveys} />
  </span>
)

export default App