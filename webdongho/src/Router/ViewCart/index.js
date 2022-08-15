import React, { useEffect } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import SellIcon from '@mui/icons-material/Sell';
import Box from '@mui/material/Box';
import Information from "../../component/contact";
import "./style.css";

function ViewCart() {
    // Tự động scroll khi chuyển trang
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);
    
    return (
        <>
            <div className="view-cart">
                <div className="left-element">
                    <div className="header-table">
                        <p className="start-end">SẢN PHẨM</p>
                        <div className="end-row">
                            <p className="text-end">GIÁ&emsp;&emsp;&emsp;</p>
                            <p className="text-end">SỐ LƯỢNG&emsp;&emsp;&emsp;</p>
                            <p className="text-end">TỔNG</p>
                        </div>
                    </div>
                    <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: "2%" }}>
                        <CircularProgress />
                        <p>Đang cập nhật</p>
                    </Box>
                </div>
                <div className="right-element">
                    <p className="title-right">TỔNG SỐ LƯỢNG</p>
                    <div className="content-details1">
                        <p>Tổng phụ</p>
                        <p>0đ</p>
                    </div>
                    <div className="content-details2">
                        <p>Giao hàng</p>
                        <p>Miễn phí</p>
                    </div>
                    <div className="content-details2">
                        <p>Tổng tiền phải trả khi nhận hàng</p>
                        <p>0đ</p>
                    </div>
                    <button className="proceed-checkout">TIẾN HÀNH THANH TOÁN</button>
                    <div className="coupons">
                        <SellIcon sx={{marginRight: '1%'}}/>
                        <p>Phiếu ưu đãi</p>
                    </div>
                    <input type="text" placeholder="Mã ưu đãi" className="input-coupons"></input>
                    <button className="btn-coupons">ÁP DỤNG</button>
                </div>
            </div>
            <Information />
        </>
    );
}

export default ViewCart;