export interface SurveyDetailsResponse {
  name: string
  participant_count: number
  response_rate: number
  submitted_response_count: number
  themes: Themes[]
}

interface Themes {
  name: string
  questions: Questions[]
}
export interface Questions {
  description: string
  question_type: string
  survey_responses: SurveyResponses[]
}

interface SurveyResponses {
  id: number
  question_id: number
  respondent_id: number
  response_content: string
}

export interface SurveyAPIResponse {
  data: {
    survey_result_detail: SurveyDetailsResponse
  }
}