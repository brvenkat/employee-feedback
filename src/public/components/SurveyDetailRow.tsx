import * as React from 'react'
import TableCell from '@material-ui/core/TableCell';

export const SurveyDetailRow = (props) => (
  <>
    <TableCell component="th" scope="row">{props.index}</TableCell>
    <TableCell>{props.detail.theme}</TableCell>
    <TableCell>
      {props.detail.description}
    </TableCell>
    <TableCell align="right">{props.detail.rating}</TableCell>
  </>
)
