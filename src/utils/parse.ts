import { SurveyDetailResult } from '../models/SurveyDetails'
import { round } from 'reliable-round'
import { SimplifiedSurveyDetails } from '../models/SimplifiedSurveyDetails'

export const prepareData = (details: SurveyDetailResult): SimplifiedSurveyDetails => {
  const simplifiedResponse = details.themes.reduce((prev, next) => {
    const questions = next.questions.map((question) => ({
      theme: next.name,
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
      theme: response.theme,
      rating: isNaN(round(response.responseContent/response.responsesLength, 2)) ? 0 : round(response.responseContent/response.responsesLength, 2)
    }))
  }
}