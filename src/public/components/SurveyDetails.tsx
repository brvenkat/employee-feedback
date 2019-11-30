import * as React from 'react'
import axios from 'axios'
import { prepareData } from '../../utils/parse'
import { ParsedResponse } from '../../models/ParsedResponse'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Row } from './Row'
import { RouteComponentProps } from 'react-router-dom';
import { Link } from '@material-ui/core';
import { SurveyAPIResponse } from '../../models/SurveyDetailsResponse';

interface Props extends RouteComponentProps {
}

interface State extends ParsedResponse {
  name: string
}

const SURVEY_BASE_URL = 'https://px2yf2j445.execute-api.us-west-2.amazonaws.com/production/'

export const SurveyDetails: React.FC<Props> = (props: Props) => {
  const { params } = props.match
  const surveyId = (params as any).surveyId
  const back = () => props.history.goBack()
  const [details, setDetails] = React.useState<State>()
  React.useEffect(() => {
    async function loadSurveyDetails() {
      let responseDetails
      try {
        responseDetails = await axios.get(SURVEY_BASE_URL+`surveys/${surveyId}`) as SurveyAPIResponse
      } catch(e) {
        setDetails({
          name: '',
          participationRate: 0,
          question: [{
            description: null, rating: 0
          }]
        })
      }
      setDetails({
        ...prepareData(responseDetails.data.survey_result_detail),
        name: responseDetails.data.survey_result_detail.name
      })
    }
    loadSurveyDetails()
  },[surveyId])
  if (!details) {
    return null
  }
  return (
    <>
    <Link onClick={back} style={{ cursor: 'pointer' }}>Back to Survey Summary</Link>
    <h3 style={{ display: 'flex', alignSelf: 'center' }}>Survey: {details.name}</h3>
    <h3>Participation Rate - {details.participationRate}</h3>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Question Description</TableCell>
          <TableCell align="right">Response Rating</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {
          details.question.map((detail, i) => (
            <TableRow key={i}>
              <Row detail={detail} />
            </TableRow>
          ))
        }
      </TableBody>
    </Table>
    </>
  )
} 