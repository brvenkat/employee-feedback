import axios from 'axios'

interface Survey {
  name: string
  url: string
}

interface Response {
  data: {
    survey_results: Survey[]
  }
}

export const fetch = async () => {
  let surveys: Response
  try {
    surveys = await axios.get<Response,Response>(process.env.SURVEY_BASE_URL+'surveys')
  } catch(e) {
    surveys = {
      data: {
        survey_results: []
      }
    }
  }
  return surveys.data.survey_results.map((survey) => ({
    url: survey.url,
    name: survey.name
  }))
}