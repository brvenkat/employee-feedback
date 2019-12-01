import * as React from 'react'
import { Route } from 'react-router-dom'
import { SurveyDetails } from './SurveyDetails'
import { SurveySummary } from './SurveySummary'
import { SurveyResponse } from '../../models/SurveySummary'

export const Routes = (props: {surveys: SurveyResponse[]}) => (
  <>
    <Route exact path={'/'} render={() => <SurveySummary surveys={props.surveys} />} />
    <Route exact path={'/:surveyId'} render={(props) => <SurveyDetails {...props} />} />
  </>
)