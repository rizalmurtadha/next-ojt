import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    // backgroundColor: theme.palette.common.black,
    // backgroundColor:'#D9D9D9',
    backgroundColor:'#250FFF',
    color: theme.palette.common.white,
    fontWeight:'bold',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

export default function TableNoPage({rows, headCells}) {
  return (
    <TableContainer component={Paper} sx={{marginBottom:'20px'}}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {/* <StyledTableCell>Dessert (100g serving)</StyledTableCell>
            <StyledTableCell align="right">Calories</StyledTableCell>
            <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell> */}
            {headCells.map((headCell) => (
            <StyledTableCell
                key={headCell.id}
                // align={headCell.numeric ? 'right' : 'left'}
                align='center'
                padding={headCell.disablePadding ? 'none' : 'normal'}
            >
                {headCell.label}

            </StyledTableCell>
          ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.no}>
              {/* <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell> */}
              {/* <StyledTableCell align="center">{row.no}</StyledTableCell>
              <StyledTableCell align="center">{row.statusKerja}</StyledTableCell>
              <StyledTableCell align="center">{row.TMT}</StyledTableCell>
              <StyledTableCell align="center">{row.keterangan}</StyledTableCell>
              <StyledTableCell align="center">{row.tanggalInsert}</StyledTableCell>
              <StyledTableCell align="center"></StyledTableCell> */}
              {Object.keys(row).map((key) => (
                <StyledTableCell align="center">{row[key]}</StyledTableCell>
              ))}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}