import React from "react";
import { useState } from 'react';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import "./style.css";

function Title() {
    // Kích hoạt signin box
    const [openSignIn, setOpenSignIn] = useState(false);
    const handleSignIn = () => {
        setOpenSignIn(true);
    }
    const handleCloseSignIn = () => {
        setOpenSignIn(false);
    }

    // Kích hoạt signup box
    const [openSignUp, setOpenSignUp] = useState(false);
    const handleSignUp = () => {
        setOpenSignUp(true);
    }

    const handleCloseSignUp = () => {
        setOpenSignUp(false);
    }

    // Kích hoạt button search
    const [openSearch, setOpenSearch] = useState(false);
    const handleEnterSearch = () => {
        setOpenSearch(true);
    }
    const handleLeaveSearch = () => {
        setOpenSearch(false);
    }

    // Kích hoạt cho button giỏ hàng
    const [openBasket, setBasket] = useState(false);
    const handleEnterBasket = () => {
        setBasket(true);
    }
    const handleLeaveBasket = () => {
        setBasket(false);
    }

    // Set color cho button đăng kí
    const [signUpColor, setSignUpColor] = useState("gray");
    const handleEnterSignUp = () => {
        setSignUpColor("rgb(220,20,60)");
    }
    const handleLeaveSignUp = () => {
        setSignUpColor("gray");
    }
    
    return(
        <div className="app">
            <div className='header'>
            <Button onClick={handleSignIn} className="signIn">Đăng nhập</Button>
            <div className='shopName'>
            <div>MONA</div>
            <div>S N E<StarBorderIcon style={{fontSize: "100%", marginBottom: "5%"}} />K E R</div>
            </div>
            <div>
            <Button startIcon={<SearchIcon />} onMouseEnter={handleEnterSearch} onMouseLeave={handleLeaveSearch} className="search"></Button>
            <Button endIcon={<AddShoppingCartIcon />} onMouseEnter={handleEnterBasket} onMouseLeave={handleLeaveBasket} className="basket">Giỏ hàng / 0đ</Button>
            </div>
        </div>

            {openSignIn && (
                <div class="modalSignIn" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">ĐĂNG NHẬP</h5>
                        <button onClick={handleCloseSignIn} type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p className="content">Địa chỉ Email *</p>
                        <input type="email" placeholder="Nhập email" className="field1"/>
                        <p className="content">Mật khẩu *</p>
                        <input type="password" placeholder="Nhập mật khẩu" className="field2"/>
                    </div>
                    <div class="modal-footer">
                        <button onClick={handleSignUp} onMouseEnter={handleEnterSignUp} onMouseLeave={handleLeaveSignUp} type="button" style={{color: `${signUpColor}`, backgroundColor: "white", border: "none", fontWeight: "bold"}} className="signUp">Đăng ký</button>
                        <button onClick={handleCloseSignIn} type="button" data-bs-dismiss="modal" style={{border: "none", backgroundColor: "white", color: "rgb(30,144,255)"}} >Quên mật khẩu</button>
                        <button type="button" class="btn btn-primary">ĐĂNG NHẬP</button>
                    </div>
                    </div>
                </div>
                </div>
            )
            }

            {openSignUp && (
                <div class="modalSignUp" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">ĐĂNG KÝ</h5>
                        <button onClick={handleCloseSignUp} type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p className="content">Địa chỉ Email *</p>
                        <input type="email" placeholder="Nhập email" className="field1"/>
                        <p className="content">Mật khẩu *</p>
                        <input type="password" placeholder="Nhập mật khẩu" className="field1"/>
                        <p className="content">Nhập lại mật khẩu *</p>
                        <input type="password" placeholder="Nhập mật khẩu" className="field2"/>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary">ĐĂNG KÝ</button>
                    </div>
                    </div>
                </div>
                </div>
            )
            }

            {openSearch && (
                <div class="modalSearch" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <input type="text" placeholder="Tìm kiếm" />
                        <Button startIcon={<SearchIcon/>}></Button>
                    </div>
                    </div>
                </div>
                </div>
            )
            }

            {openBasket && (
                <div class="modalBasket" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5>Chưa có sản phẩm trong giỏ hàng</h5>
                    </div>
                    </div>
                </div>
                </div>
            )
            }
        </div>
            )
} 

export default Title;