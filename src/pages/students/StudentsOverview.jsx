import Sidebar from '../../components/SideBar';
import React, { useEffect, useState } from 'react';
import '../../styles/Students.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import BootstrapButton from '../../components/btnBlue';
import BootstrapButtonRed from '../../components/BtnRed';
import { getStudents } from '../../services/student';
import { TableSortLabel } from '@mui/material';
import ButtonAppBar from '../../components/Header';

const headers = [
  { id: 'code', label: 'Code', align: 'left' },
  { id: 'name', label: 'Name', align: 'left' },
  { id: 'email', label: 'Email', align: 'left' },
  { id: 'phone', label: 'Phone', align: 'left' },
  { id: 'status', label: 'Status', align: 'left' },
  { id: '', label: 'Action', align: 'left' }
];

const StudentsOverview = () => {
  const [page, setPage] = useState(0);
  const [sortOptions, setSortOptions] = useState({
    order: 'id',
    sort: 'asc'
  });
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [data, setData] = useState([]);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    getStudents(page, rowsPerPage, sortOptions).then((response) => {
      setData(response.data);
      setInfo(response.info);
    });
  }, [page, rowsPerPage, sortOptions]);

  const handleSort = (id) => {
    setSortOptions({
      order: id,
      sort: sortOptions.sort === 'desc' ? 'asc' : 'desc'
    });
  };

  return (
    <div className="OverviewStudent">
      <div className="sideBar">
        <Sidebar />
      </div>
      <div className="ViewStudent">
        <div className="BodyOveridetudent">
          <div className="OverideHeaderStudent">
            <ButtonAppBar />
          </div>
          <div>
            <TableContainer>
              <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                  <TableRow>
                    {headers.map((column) => (
                      <TableCell key={column.id} align={column.align}>
                        <TableSortLabel
                          active={sortOptions.order === column.id}
                          direction={sortOptions.sort}
                          onClick={() => handleSort(column.id)}>
                          {column.label}
                        </TableSortLabel>
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell>{row.code}</TableCell>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>{row.email}</TableCell>
                      <TableCell>{row.phone}</TableCell>
                      <TableCell>{row.status}</TableCell>
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
                count={info.count || 0}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={(_e, newPage) => setPage(newPage)}
                onRowsPerPageChange={(e) => setRowsPerPage(parseInt(e.target.value))}
              />
            </TableContainer>
          </div>
        </div>
      </div>
    </div>
  );
};
export default StudentsOverview;
