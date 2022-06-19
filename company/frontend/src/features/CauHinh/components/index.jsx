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
import TextField from '@mui/material/TextField';
import CircleIcon from '@mui/icons-material/Circle';
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
  
  function createData(number, name, hour, time, day, coefficient, status, action) {
    return { number, name, hour, time, day, coefficient, status, action };
  }

  const rows = [
    createData(1, 'Ca Làm Thêm Giờ', 8, '17:30 - 21:00', 'T2 T3 T4', 1),
    createData(2, 'Ca hành chính', 8, '08:30 - 17:00', 'T2 T3 T4 T5 T6', 1),
    createData(3, 'Ca ngày', 8, '08:30 - 17:50', 'T2 T3 T4 T5 T6', 1),
    createData(4, 'Ca chiều', 3.5, '13:31 - 17:00', 'T2 T3 T4 T5 T6', 1)
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

function ChamCong() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Typography style={{display: 'inline-block', width: '75%', marginTop: '2%'}} variant="h3" component="div" gutterBottom>CẤU HÌNH CHẤM CÔNG</Typography>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Ca làm việc" {...a11yProps(0)} />
            <Tab label="Phụ cấp" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
        <div style={{display: 'flex', alignItems: 'center', flexDirection: 'row', margin: '2% 1.2%'}}>
          <TextField  style={{width: '75%'}} type='text' placeholder='Tìm kiếm' size='small' />
          <Button style={{marginLeft: '10%', height: '60%'}} variant="contained" startIcon={<AddIcon/>}>Thêm mới ca làm việc</Button>
        </div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
                  <TableHead>
                  <TableRow>
                      <StyledTableCell>STT</StyledTableCell>
                      <StyledTableCell align="center">Tên ca</StyledTableCell>
                      <StyledTableCell align="center">Giờ Công</StyledTableCell>
                      <StyledTableCell align="center">Thời gian</StyledTableCell>
                      <StyledTableCell align="center">Ngày làm trong tuần</StyledTableCell>
                      <StyledTableCell align="center">Hệ số lương</StyledTableCell>
                      <StyledTableCell align="center">Trạng thái</StyledTableCell>
                      <StyledTableCell align="center">Thao tác</StyledTableCell>
                  </TableRow>
                  </TableHead>
                  <TableBody>
                  {rows.map((row) => (
                      <StyledTableRow key={row.number}>
                      <StyledTableCell component="th" scope="row">
                          {row.number}
                      </StyledTableCell>
                      <StyledTableCell align="center">{row.name}</StyledTableCell>
                      <StyledTableCell align="center">{row.hour}</StyledTableCell>
                      <StyledTableCell align="center">{row.time}</StyledTableCell>
                      <StyledTableCell align="center">{row.day}</StyledTableCell>
                      <StyledTableCell align="center">{row.coefficient}</StyledTableCell>
                      <StyledTableCell align="center"><CircleIcon style={{color: 'green'}} /></StyledTableCell>
                      <StyledTableCell>
                          <Stack direction="row" spacing={2}>
                              <Button style={{marginLeft: '34%'}} variant="contained" startIcon={<EditIcon/>}>Sửa</Button>
                          </Stack>
                      </StyledTableCell>
                      </StyledTableRow>
                  ))}
                  </TableBody>
              </Table>
        </TableContainer>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <CircleIcon style={{marginRight: '0.3%', color: 'green'}}/>
          <Typography style={{marginRight: '0.7%'}}>Active</Typography>
          <CircleIcon style={{margin: '2% 0.3%', color: 'red'}}/>
          <Typography>Inactive</Typography>
        </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
        <div style={{display: 'flex', alignItems: 'center', flexDirection: 'row', margin: '1.5% 1.2%'}}>
          <TextField  style={{width: '75%'}} type='text' placeholder='Tìm kiếm' size='small' />
          <Button style={{marginLeft: '10%', height: '40px'}}variant="contained" startIcon={<AddIcon/>}>Thêm mới phụ cấp</Button>
        </div>
        <TabContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                  <TableHead>
                  <TableRow>
                      <StyledTableCell>STT</StyledTableCell>
                      <StyledTableCell align="center">Tên ca</StyledTableCell>
                      <StyledTableCell align="center">Giờ Công</StyledTableCell>
                      <StyledTableCell align="center">Thời gian</StyledTableCell>
                      <StyledTableCell align="center">Ngày làm trong tuần</StyledTableCell>
                      <StyledTableCell align="center">Hệ số lương</StyledTableCell>
                      <StyledTableCell align="center">Trạng thái</StyledTableCell>
                      <StyledTableCell align="center">Thao tác</StyledTableCell>
                  </TableRow>
                  </TableHead>
                  <TableBody>
                  {rows.map((row) => (
                      <StyledTableRow key={row.number}>
                      <StyledTableCell component="th" scope="row">
                          {row.number}
                      </StyledTableCell>
                      <StyledTableCell align="center">{row.name}</StyledTableCell>
                      <StyledTableCell align="center">{row.hour}</StyledTableCell>
                      <StyledTableCell align="center">{row.time}</StyledTableCell>
                      <StyledTableCell align="center">{row.day}</StyledTableCell>
                      <StyledTableCell align="center">{row.coefficient}</StyledTableCell>
                      <StyledTableCell align="center"><CircleIcon style={{color: 'green'}} /></StyledTableCell>
                      <StyledTableCell>
                          <Stack direction="row" spacing={2}>
                              <Button style={{marginLeft: '34%'}} variant="contained" startIcon={<EditIcon/>}>Sửa</Button>
                          </Stack>
                      </StyledTableCell>
                      </StyledTableRow>
                  ))}
                  </TableBody>
              </Table>
        </TabContainer>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <CircleIcon style={{marginRight: '0.3%', color: 'green'}}/>
          <Typography style={{marginRight: '0.7%'}}>Active</Typography>
          <CircleIcon style={{margin: '2% 0.3%', color: 'red'}}/>
          <Typography>Inactive</Typography>
        </div>
        </TabPanel>
      </Box>
  );
}

export default ChamCong;