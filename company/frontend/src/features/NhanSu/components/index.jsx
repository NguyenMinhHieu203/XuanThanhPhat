import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TabContainer } from 'react-bootstrap';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import InfoIcon from '@mui/icons-material/Info';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.common.black,
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
  
  function createDataOne(number, name, employeeCode, gender, email, phoneNumber, address, coefficient, roomCode) {
    return {number, name, employeeCode, gender, email, phoneNumber, address, coefficient, roomCode};
  }

  const rowOne = [
    createDataOne(1, 'Nguyên Thị Thu Trang', 'HRM03', 'fermale', 'trangxinggai@gmail.com', '0345058801', 'Hà Nội', 1, 'Phòng nhân sự'),
    createDataOne(2, 'Bùi Khánh Linh', 'HRM04', 'fermale', 'linh@gmail.com', '0964514536', 'Hà Nội', 1, 'Phòng nhân sự'),
    createDataOne(3, 'Doãn Thị Hồng Nguyệt', 'HRM05', 'fermale', 'linh@gmail.com', '0387207377', 'Hà Nội', 1, 'Phòng nhân sự')
  ];

  function createDataTwo(number, code, name, salary, day) {
    return {number, code, name, salary, day };
  }
  
  const rowTwo = [
    createDataTwo(1, 'KT', 'Phòng kĩ thuật', 5000000, 22),
    createDataTwo(2, 'HR', 'Phòng nhân sự', 4000000, 21),
    createDataTwo(3, 'KT', 'Phòng kế toán', 5000000, 20)
  ];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function Employees() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Typography style={{display: 'inline-block', width: '75%', marginTop: '2%'}} variant="h3" component="div" gutterBottom>NHÂN SỰ</Typography>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Nhân viên" {...a11yProps(0)} />
            <Tab label="Phòng ban" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
        <div style={{display: 'flex', alignItems: 'center', flexDirection: 'row', margin: '1.5% 1.2%'}}>
          <TextField  style={{width: '75%'}} type='text' placeholder='Tìm kiếm' size='small' />
          <Button style={{marginLeft: '10%', height: '40px'}}variant="contained" startIcon={<AddIcon/>}>Thêm mới nhân viên</Button>
        </div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
                  <TableHead>
                  <TableRow>
                      <StyledTableCell>STT</StyledTableCell>
                      <StyledTableCell align="center">Tên</StyledTableCell>
                      <StyledTableCell align="center">Mã nhân viên</StyledTableCell>
                      <StyledTableCell align="center">Giới tính</StyledTableCell>
                      <StyledTableCell align="center">Email</StyledTableCell>
                      <StyledTableCell align="center">Số điện thoại</StyledTableCell>
                      <StyledTableCell align="center">Địa chỉ</StyledTableCell>
                      <StyledTableCell align="center">Hệ số lương</StyledTableCell>
                      <StyledTableCell align="center">Mã phòng ban</StyledTableCell>
                      <StyledTableCell align="center">Tác vụ</StyledTableCell>
                  </TableRow>
                  </TableHead>
                  <TableBody>
                  {rowOne.map((row) => (
                      <StyledTableRow key={row.number}>
                      <StyledTableCell component="th" scope="row">
                          {row.number}
                      </StyledTableCell>
                      <StyledTableCell align="center">{row.name}</StyledTableCell>
                      <StyledTableCell align="center">{row.employeeCode}</StyledTableCell>
                      <StyledTableCell align="center">{row.gender}</StyledTableCell>
                      <StyledTableCell align="center">{row.email}</StyledTableCell>
                      <StyledTableCell align="center">{row.phoneNumber}</StyledTableCell>
                      <StyledTableCell align="center">{row.address}</StyledTableCell>
                      <StyledTableCell align="center">{row.coefficient}</StyledTableCell>
                      <StyledTableCell align="right">{row.roomCode}</StyledTableCell>
                      <StyledTableCell>
                          <Stack direction="row" spacing={2}>
                              <Button style={{marginLeft: '20%'}} variant="contained" startIcon={<EditIcon/>}>Sửa</Button><Button variant="contained" startIcon={<InfoIcon/>}>Chi tiết</Button>
                          </Stack>
                      </StyledTableCell>
                      </StyledTableRow>
                  ))}
                  </TableBody>
              </Table>
        </TableContainer>
        </TabPanel>
        <TabPanel value={value} index={1}>
        <div style={{display: 'flex', alignItems: 'center', flexDirection: 'row', margin: '1.5% 1.2%'}}>
          <TextField  style={{width: '75%'}} type='text' placeholder='Tìm kiếm' size='small' />
          <Button style={{marginLeft: '10%', height: '40px'}}variant="contained" startIcon={<AddIcon/>}>Thêm mới phòng</Button>
        </div>
        <TabContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                  <TableHead>
                  <TableRow>
                      <StyledTableCell>STT</StyledTableCell>
                      <StyledTableCell align="center">MÃ PHÒNG</StyledTableCell>
                      <StyledTableCell align="center">TÊN PHÒNG BAN</StyledTableCell>
                      <StyledTableCell align="center">LƯƠNG CƠ BẢN</StyledTableCell>
                      <StyledTableCell align="center">SỐ NGÀY LÀM VIỆC CƠ BẢN</StyledTableCell>
                      <StyledTableCell align="center">THAO TÁC</StyledTableCell>
                  </TableRow>
                  </TableHead>
                  <TableBody>
                  {rowTwo.map((row) => (
                      <StyledTableRow key={row.number}>
                      <StyledTableCell component="th" scope="row">
                          {row.number}
                      </StyledTableCell>
                      <StyledTableCell align="center">{row.code}</StyledTableCell>
                      <StyledTableCell align="center">{row.name}</StyledTableCell>
                      <StyledTableCell align="center">{row.salary}</StyledTableCell>
                      <StyledTableCell align="center">{row.day}</StyledTableCell>
                      <StyledTableCell align="center"><Button variant="contained" startIcon={<EditIcon/>}>Sửa</Button></StyledTableCell>
                      </StyledTableRow>
                  ))}
                  </TableBody>
              </Table>
        </TabContainer>
        </TabPanel>
      </Box>
  );
}

export default Employees;