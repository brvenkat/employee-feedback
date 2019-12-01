import * as React from 'react'
import { SurveyResponse } from '../../models/SurveySummary'
import { NavLink } from 'react-router-dom'
import { style, media } from 'typestyle'

const NavStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
  },
  media({ maxWidth: 768 }, { height: '70vh' }),
  media({ minWidth: 768 }, { height: '80vh' })
)

const SpanStyle = style({
  paddingTop: '10px',
  paddingBottom: '10px',
  fontFamily: 'arial'
})

const headerStyle = style({
  fontFamily: 'arial'
})

export const SurveySummary = (props: {surveys: SurveyResponse[]}) => (
  <span className={NavStyle}>
    <h3 className={headerStyle}>Click on the links to see survey results</h3>
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