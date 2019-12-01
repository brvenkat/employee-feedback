import * as React from 'react'
import { style, media} from 'typestyle'
import { SurveyResponse } from '../../models/SurveySummary'
import { Routes } from './Routes'

export const AppStyle = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  },
)

export const HeaderStyle = style({
  textAlign: 'center',
  fontFamily: 'arial'
})

const App = (props: {surveys: SurveyResponse[]}) => (
  <span className={AppStyle}>
    <h1 className={HeaderStyle}>Welcome to the Employee Feedback Survey</h1>
    <Routes surveys={props.surveys} />
  </span>
)

export default App