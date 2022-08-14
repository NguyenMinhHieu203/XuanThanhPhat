import React, { useEffect } from "react";
import { useState } from 'react';
import axios from "axios";
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import "./style.css";

function Title() {
    // Lấy ra thông tin người dùng 
    const [user, setUser] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:4020/user").then((res) => setUser(res.data));
    }, [user]);

    // Validation đăng nhập
    const signInUser = () => {
        let check = false;
        let i = 0;
        while(i < user.length) {
            if(emailSignIn === user[i].email && passwordSignIn === user[i].password) {
                setTextSignIn(user[i].email);
                handleCloseSignIn();
                check = true;
                break;
            }
            ++i;
        }
        if(check === true) {
            alert("Đăng nhập thành công");
        }
        else {
            alert("Tài khoản hoặc mật khẩu không đúng");
        }
    }

    // Lấy ra giá trị người dùng nhập vào form đăng kí
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    // Đẩy thông tin người dùng lên database
    const signUpUser = () => {
        if(email !== "" && password !== "" && passwordConfirmation !== "") {
            if(passwordConfirmation !== password) {
                alert("Mật khẩu không khớp");
            }
            else {
                const data = {
                    email: email,
                    password: password
                }
                axios.post("http://localhost:4020/user", data).then((res) => alert("Đăng ký thành công"), handleCloseSignUp(), handleCloseSignIn());
            }
        } 
        else {
            alert("Vui lòng nhập đầy đủ thông tin");
        }
    }

    // Set email và password người dùng sử dụng để đăng nhập
    const [textSignIn, setTextSignIn] = useState("Đăng nhập");
    const [emailSignIn, setEmailSignIn] = useState("");
    const [passwordSignIn, setPasswordSignIn] = useState("");
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
        <div className="app7">
            <div className='header'>
            <Button onClick={handleSignIn} className="signIn">{textSignIn}</Button>
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
                        <input type="email" placeholder="Nhập email" className="field1" value={emailSignIn} onChange={(e) => setEmailSignIn(e.target.value)}/>
                        <p className="content">Mật khẩu *</p>
                        <input type="password" placeholder="Nhập mật khẩu" className="field2" value={passwordSignIn} onChange={(e) => setPasswordSignIn(e.target.value)}/>
                    </div>
                    <div class="modal-footer">
                        <button onClick={handleSignUp} onMouseEnter={handleEnterSignUp} onMouseLeave={handleLeaveSignUp} type="button" style={{color: `${signUpColor}`, backgroundColor: "white", border: "none", fontWeight: "bold"}} className="signUp">Đăng ký</button>
                        <button onClick={handleCloseSignIn} type="button" data-bs-dismiss="modal" style={{border: "none", backgroundColor: "white", color: "rgb(30,144,255)"}} >Quên mật khẩu</button>
                        <button type="button" class="btn btn-primary" onClick={signInUser}>ĐĂNG NHẬP</button>
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
                        <input type="email" placeholder="Nhập email" className="field1" onChange={(e) => setEmail(e.target.value)}/>
                        <p className="content">Mật khẩu *</p>
                        <input type="password" placeholder="Nhập mật khẩu" className="field1" onChange={(e) => setPassword(e.target.value)}/>
                        <p className="content">Nhập lại mật khẩu *</p>
                        <input type="password" placeholder="Nhập mật khẩu" className="field2" onChange={(e) => setPasswordConfirmation(e.target.value)}/>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" onClick={signUpUser}>ĐĂNG KÝ</button>
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