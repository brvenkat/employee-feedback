import * as _ from 'lodash'
import { SurveyDetailsResponse } from '../models/SurveyDetailsResponse'
import { round } from 'reliable-round'
import { ParsedResponse } from '../models/ParsedResponse'

export const prepareData = (details: SurveyDetailsResponse): ParsedResponse => {
  const simplifiedResponse = details.themes.reduce((prev, next) => {
    const questions = next.questions.map((question) => ({
      description: question.description,
      responsesLength: question.survey_responses
        .filter((response) => response.response_content !== '').length,
      responseContent: question.survey_responses
        .filter((response) => response.response_content !== '')
        .map((response) => Number(response.response_content))
        .reduce((sum, next) => sum+next, 0)
    }))
    return prev.concat(questions)
  }, [])
  return {
    participationRate: round(details.response_rate * 100, 2),
    question: simplifiedResponse.map((response) => ({
      description: response.description,
      rating: round(response.responseContent/response.responsesLength, 2)
    }))
  }
}