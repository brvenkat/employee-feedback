import * as React from 'react'
import { SurveyResponse } from '../../models/SurveyResponse'
import { NavLink } from 'react-router-dom'
import { style } from 'typestyle'

const NavStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

const SpanStyle = style({
  paddingTop: '10px',
  paddingBottom: '10px'
})

export const SurveyData = (props: {surveys: SurveyResponse[]}) => (
  <span className={NavStyle}>
    <h3>Click on the names to see survey details</h3>
    {
      props.surveys.map((survey, i) => {
        const surveyId = survey.url.split('/').pop()
        return (
          <span key={i} className={SpanStyle}>
            <NavLink to={surveyId}>{survey.name}</NavLink>
          </span>
        )})
    }
  </span>
)