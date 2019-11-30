export interface ParsedResponse {
  participationRate: number
  question: {
    description: string
    rating: number
  }[]
}