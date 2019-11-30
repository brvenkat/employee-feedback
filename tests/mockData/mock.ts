import { partialOf } from 'jest-helpers'
import { SurveyDetailsResponse, Questions } from '../../src/models/SurveyDetailsResponse'

export const inputOne = partialOf<SurveyDetailsResponse>({
  name: 'some-survey',
  response_rate: 0.844,
  themes: [
    {
      name: 'some-question-theme',
      questions: [
        {
          description: 'some-question-1',
          question_type: 'Survey',
          survey_responses: [
            {
              id: 1,
              question_id: 1,
              response_content: '4',
              respondent_id: 1
            },
            {
              id: 1,
              question_id: 1,
              response_content: '',
              respondent_id: 1
            }
          ]
        }
      ]
    }
  ]
})

export const outputOne = {
  participationRate: 84.4,
  question: [ { description: 'some-question-1', rating: 4 } ]
}

export const inputTwo = partialOf<SurveyDetailsResponse>({
  name: 'some-survey',
  response_rate: 0.844,
  themes: [
    {
      name: 'some-question-theme',
      questions: [
        {
          description: 'some-question-1',
          question_type: 'Survey',
          survey_responses: [
            {
              id: 1,
              question_id: 1,
              response_content: '4',
              respondent_id: 1
            },
            {
              id: 1,
              question_id: 1,
              response_content: '5',
              respondent_id: 1
            }
          ]
        },
        {
          description: 'some-question-2',
          question_type: 'Survey',
          survey_responses: [
            {
              id: 1,
              question_id: 2,
              response_content: '',
              respondent_id: 1
            },
            {
              id: 1,
              question_id: 2,
              response_content: '',
              respondent_id: 1
            }
          ]
        }
      ]
    }
  ]
})

export const outputTwo = {
  participationRate: 84.4,
  question: [
    { description: 'some-question-1', rating: 4.5 },
    { description: 'some-question-2', rating: 0 }
  ]
}

export const inputThree = partialOf<SurveyDetailsResponse>({
  name: 'some-survey',
  response_rate: 0.844,
  themes: []
})

export const outputThree = { participationRate: 84.4, question: [] }

export const mockSurveyData = {
  survey_result_detail: {
    name: 'some-name',
    participant_count: 12,
    response_rate: 12,
    submitted_response_count: 11,
    themes: [
      {
        name: 'some-theme',
        questions: [partialOf<Questions>({})]
      }
    ]

  }
}