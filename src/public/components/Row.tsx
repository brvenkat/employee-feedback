import * as React from 'react'
import TableCell from '@material-ui/core/TableCell';

export const Row = (props) => (
  <>
    <TableCell component="th" scope="row">
      {props.detail.description}
    </TableCell>
    <TableCell align="right">{props.detail.rating}</TableCell>
  </>
)
