import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import useStyles from './styles';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Math', 80, 90, 54, 403),
  createData('Physics', 72, 87, 37, 589),
  createData('Art', 83, 99, 24, 208),
  createData('Chemistry', 65, 81, 37, 765),
  createData('Biology', 57, 76, 49, 343)
];

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <Table className={classes.table} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Lesson</TableCell>
          <TableCell align="right">Average</TableCell>
          <TableCell align="right">Highest</TableCell>
          <TableCell align="right">Lowest</TableCell>
          <TableCell align="right">Number of Student</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map(row => (
          <TableRow key={row.name}>
            <TableCell component="th" scope="row">
              {row.name}
            </TableCell>
            <TableCell align="right">{row.calories}</TableCell>
            <TableCell align="right">{row.fat}</TableCell>
            <TableCell align="right">{row.carbs}</TableCell>
            <TableCell align="right">{row.protein}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
