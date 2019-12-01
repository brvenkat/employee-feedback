export interface SimplifiedSurveyDetails {
  participationRate: number
  question: {
    description: string
    theme: string
    rating: number
  }[]
}