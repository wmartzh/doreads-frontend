import Sidebar from '../../components/SideBar';
import React, { useEffect, useState } from 'react';
import '../../styles/Students.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import BootstrapButton from '../../components/btnBlue';
import BootstrapButtonRed from '../../components/BtnRed';
import fetchData from '../../services/StudentOverview';
const columns = [
  { id: 'id', label: 'ID', align: 'left' },
  { id: 'code', label: 'Code', align: 'right' },
  { id: 'name', label: 'Name', align: 'right' },
  { id: 'email', label: 'Email', align: 'right' },
  { id: 'phone', label: 'Phone', align: 'right' },
  { id: 'status', label: 'Status', align: 'right' },
  { id: 'createdAt', label: 'CreatedAt', align: 'right' },
  { id: 'updatedAt', label: 'UpdatedAt', align: 'right' }
];

const StudentsOverview = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [data, setData] = useState([]);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetchData(page).then((response) => {
      const { data: fetchedData, info: paginationInfo } = response;
      setData(fetchedData);
      setInfo(paginationInfo);
    });
  }, []);
  const handleChangePage = (event, newPage) => {
    console.log(newPage);
    fetchData(newPage).then((response) => {
      const { data: fetchedData, info: paginationInfo } = response;
      setData(fetchedData);
      setInfo(paginationInfo);
    });
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
                  {data.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell>{row.id}</TableCell>
                      <TableCell>{row.code}</TableCell>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>{row.email}</TableCell>
                      <TableCell>{row.phone}</TableCell>
                      <TableCell>{row.status}</TableCell>
                      <TableCell>{row.createdAt}</TableCell>
                      <TableCell>{row.updatedAt}</TableCell>
                      <TableCell>
                        <div>
                          <BootstrapButton text="edit" />
                          <BootstrapButtonRed text="Block" />
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <TablePagination
                rowsPerPageOptions={[10, 20, 30]}
                component="div"
                count={info.count}
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
