import * as React from 'react'
import { Route } from 'react-router-dom'
import { SurveyDetails } from './SurveyDetails'
import { SurveyData } from './SurveyData'
import { SurveyResponse } from '../../models/SurveyResponse'

export const Routes = (props: {surveys: SurveyResponse[]}) => (
  <>
    <Route exact path={'/'} render={() => <SurveyData surveys={props.surveys} />} />
    <Route exact path={'/:surveyId'} render={(props) => <SurveyDetails {...props} />} />
  </>
)