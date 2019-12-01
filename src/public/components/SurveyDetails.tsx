import * as React from 'react'
import axios from 'axios'
import { prepareData } from '../../utils/parse'
import { SimplifiedSurveyDetails } from '../../models/SimplifiedSurveyDetails'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { SurveyDetailRow } from './SurveyDetailRow'
import { RouteComponentProps } from 'react-router-dom';
import { Link, Paper } from '@material-ui/core';
import { SurveyAPIResponse } from '../../models/SurveyDetails';
import { style, media } from 'typestyle'

interface Props extends RouteComponentProps {
}

interface State extends SimplifiedSurveyDetails {
  name: string
}

const paperStyle = style({
  width: '94vw',
  margin: '0 auto',
  overflowX: 'auto',
})

const backButton = style({
  cursor: 'pointer',
  top: '1%',
  position: 'absolute',
  fontFamily: 'arial'
})

const tableStyle = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  height: '70vh'
  },
  media({ maxWidth: 768 }, { height: '70vh' }),
  media({ minWidth: 768 }, { height: '80vh' })
)

const parentTable = style({
  border: '1px solid blue'
})

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
        setDetails({
          ...prepareData(responseDetails.data.survey_result_detail),
          name: responseDetails.data.survey_result_detail.name
        })
      } catch(e) {
        setDetails({
          name: '',
          participationRate: 0,
          question: []
        })
      }
    }
    loadSurveyDetails()
  },[surveyId])
  if (!details) {
    return null
  }
  return (
    <>
    <Link onClick={back} className={backButton}>Back to Survey Summary</Link>
    <span className={tableStyle}>
      <h3 style={{ display: 'flex', alignSelf: 'center', fontFamily: 'arial' }}>Survey: {details.name}</h3>
      <h3 style={{ textAlign: 'center', fontFamily: 'arial' }}>Participation Rate - {details.participationRate} percent</h3>
      <Paper className={paperStyle}>
        <Table stickyHeader className={parentTable}>
          <TableHead>
            <TableRow>
              <TableCell>Question No.</TableCell>
              <TableCell>Theme</TableCell>
              <TableCell>Question Description</TableCell>
              <TableCell align="right">Response Rating</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              details.question.map((detail, i) => (
                <TableRow key={i}>
                  <SurveyDetailRow detail={detail} index={i+1}/>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </Paper>
    </span>
    </>
  )
} 
