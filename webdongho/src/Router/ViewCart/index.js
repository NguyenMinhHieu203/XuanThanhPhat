import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SellIcon from '@mui/icons-material/Sell';
import Box from '@mui/material/Box';
import Information from "../../component/contact";
import "./style.css";

function ViewCart(props) {
    const [basket, setBasket] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:4020/basket`).then((res) => setBasket(res.data));
    }, []);
    
    // Tự động scroll khi chuyển trang
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    // Tạo biến chứa tổng số tiền mua sản phẩm
    let total = 0;

    // Tạo hàm cho button thanh toán 
    const handleSuccess = () => {
        axios.delete(`http://localhost:4020/basket/${props.id}`);
        alert("Thanh toán thành công");
    }
    return (
        <>
            <div className="view-cart">
                <div className="left-element">
                    <Box>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Sản Phẩm</th>
                                    <th scope="col">Giá</th>
                                    <th scope="col">Số lượng</th>
                                    <th scope="col">Tổng</th>
                                </tr>
                            </thead>
                                    <tbody>
                                            {basket.map((el) => {
                                                if(el.id === props.id) {
                                                    total += Number(el.price) * Number(el.amount);
                                                    return(
                                                    <tr>
                                                        <th scope="row">{el.name}</th>
                                                        <td>{el.price}</td>
                                                        <td>{el.amount}</td>
                                                        <td>{Number(el.price) * Number(el.amount)}</td>
                                                    </tr>
                                                    );
                                                }
                                            })}
                                    </tbody>
                        </table>
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
                        <p>{total}đ</p>
                    </div>
                    <button className="proceed-checkout" onClick={handleSuccess}><Link to="/home" style={{textDecoration: "none", color: "white"}}>TIẾN HÀNH THANH TOÁN</Link></button>
                    <div className="coupons">
                        <SellIcon sx={{ marginRight: '1%' }} />
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