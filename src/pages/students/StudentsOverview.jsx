import Sidebar from '../../components/SideBar';
import * as React from 'react';
import '../../styles/Students.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import axios from 'axios';
import BootstrapButton from '../../components/btnBlue';
import BootstrapButtonRed from '../../components/BtnRed';

const baseURL = 'http://localhost:8000/student';
const columns = [
  { id: 'id', label: 'ID', align: 'left' },
  { id: 'fullname', label: 'FullName', align: 'right' },
  { id: 'carner', label: 'Carnet', align: 'right' },
  { id: 'email', label: 'Email', align: 'right' },
  { id: 'status', label: 'Status', align: 'right' }
];

const StudentsOverview = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    axios.get(baseURL).then((res) => {
      setData(res.data);
    });
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className="OverviewStudent">
      <div className="sideBar">
        <Sidebar />
      </div>
      <div className="ViewStudent">
        <div className="BodyOveridetudent">
          <div className="OverideHeaderStudent">
            <h1 className="Title">Register Student</h1>
          </div>
          <div className="TableCenter">
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell key={column.id} align={column.align}>
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                    <TableRow key={row.id}>
                      {columns.map((column) => (
                        <TableCell
                          className="ButtonOverrideView"
                          key={column.id}
                          align={column.align}>
                          {column.id === 'Status' && (
                            <div>
                              <BootstrapButton text="edit" />
                              <BootstrapButtonRed text="Block" />
                            </div>
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <TablePagination
                rowsPerPageOptions={[5, 9, 13]}
                component="div"
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </TableContainer>
          </div>
        </div>
      </div>
    </div>
  );
};
export default StudentsOverview;
