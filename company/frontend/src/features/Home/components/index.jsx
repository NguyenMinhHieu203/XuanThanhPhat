import React from 'react';
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import Link from '@mui/material/Link';


function Information(props) {
    return(
        <div style={{margin: '3% 1.2%',border: '2px solid rgb(192,192,192)', borderTop: 'none'}}>
            <Grid style={{margin: '0 1.2%'}} xs>
                <Typography style={{display: 'inline-block', width: '75%'}} variant="h4" component="div" gutterBottom>THÔNG TIN CÔNG TY</Typography>
                <Button style={{display: 'inline-block', width: '14%', marginLeft: '10%', height: '40px'}}variant="contained" startIcon={<BorderColorIcon/>}>Cập nhật</Button>
            </Grid>
            <div style={{margin: '1% 3%', marginBottom: '4%', borderTop: '2px solid rgb(105,105,105)', borderBottom: '2px solid rgb(192,192,192)'}}>
            <Grid>
                <Typography style={{fontWeight: 'bold', display: 'inline-block', width: '30%'}}>TÊN CÔNG TY:</Typography>
                <Typography style={{display: 'inline-block'}}>Xuân Thành Phát</Typography>
            </Grid>
            <Grid>
                <Typography style={{fontWeight: 'bold', display: 'inline-block', width: '30%'}}>ĐỊA CHỈ:</Typography>
                <Typography style={{display: 'inline-block'}}>No09 B2 Thành Thái, Dịch Vọng, Cầu Giấy, Hà Nội</Typography>
            </Grid>
            <Grid>
                <Typography style={{fontWeight: 'bold', display: 'inline-block', width: '30%'}}>SỐ ĐIỆN THOẠI:</Typography>
                <Typography style={{display: 'inline-block'}}>098178869</Typography>
            </Grid>
            <Grid>
                <Typography style={{fontWeight: 'bold', display: 'inline-block', width: '30%'}}>EMAIL:</Typography>
                <Typography style={{display: 'inline-block'}}>xuanthanhphat@xtp.com</Typography>
            </Grid>
            <Grid>
                <Typography style={{fontWeight: 'bold', display: 'inline-block', width: '30%'}}>WEBSITE:</Typography>
                <Link href="#">Địa chỉ web công ty</Link>
            </Grid>
            <Grid>
                <Typography style={{fontWeight: 'bold', display: 'inline-block', width: '30%'}}>NGÀY THÀNH LẬP:</Typography>
                <Typography style={{display: 'inline-block'}}>29/01/2022</Typography>
            </Grid>
            </div>
        </div>
    );
}

export default Information;