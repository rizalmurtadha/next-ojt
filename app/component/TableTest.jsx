import { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, 
         TableHead, TableRow, Paper, TablePagination,
         } from '@mui/material';

function TableTest() {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [orderBy, setOrderBy] = useState('name');
    const [order, setOrder] = useState('asc');
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };
  
    // const handleSort = (property) => (event) => {
    //   const isAsc = orderBy === property && order === 'asc';
    //   setOrder(isAsc ? 'desc' : 'asc');
    //   setOrderBy(property);
    // };
  
    const rows = [
      { id: 1, name: 'John', age: 25 },
      { id: 2, name: 'Jane', age: 30 },
      { id: 3, name: 'Bob', age: 35 },
      { id: 4, name: 'Alice', age: 40 },
      { id: 5, name: 'Eve', age: 45 },
      { id: 6, name: 'Dave', age: 50 },
      { id: 7, name: 'Carol', age: 55 },
      { id: 8, name: 'Frank', age: 60 },
      { id: 9, name: 'Grace', age: 65 },
      { id: 10, name: 'Henry', age: 70 },
    ];
  
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
  
    const sortedRows = rows.sort((a, b) => {
      const isAsc = order === 'asc';
      if (a[orderBy] < b[orderBy]) {
        return isAsc ? -1 : 1;
      }
      if (a[orderBy] > b[orderBy]) {
        return isAsc ? 1 : -1;
      }
      return 0;
    });
  
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Age</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                    <TableRow key={row.id}>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.age}</TableCell>
                    </TableRow>
                ))}

                {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell colSpan={2} />
                    </TableRow>
                )}
                </TableBody>
                <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Table>
        </TableContainer>
  );
}

export default TableTest