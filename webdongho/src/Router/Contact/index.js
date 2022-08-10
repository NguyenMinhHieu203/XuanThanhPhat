import React from "react";
import { Link } from "react-router-dom";
import PlaceIcon from '@mui/icons-material/Place';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import Information from "../../component/contact";
import "./style.css";

function Contact() {
    return(
        <div className="app-3">
            <div className="gt">
                <p className="text">LIÊN HỆ</p>
                <div className="links">
                    <Link to="/home" className="l2 l3" style={{color: "white", textDecoration: "none", fontSize: "95%"}}>TRANG CHỦ</Link>
                    <p className="slash">/</p>
                    <Link to="/contact" className="l2 l4" style={{color: "white", textDecoration: "none", fontSize: "95%"}}>LIÊN HỆ</Link>
                </div>
            </div>
            <div className="b1">
                <div className="container1">
                    <p className="text-title">THÔNG TIN LIÊN HỆ</p>
                    <div className="if1">
                        <PlaceIcon className="s1"/>
                        <p>128 Nguyễn Trãi, Thanh Xuân, Hà Nội</p>
                    </div>
                    <div className="if1">
                        <PhoneIcon className="s1"/>
                        <p>03391234567</p>
                    </div>
                    <div className="if1">
                        <EmailIcon className="s1"/>
                        <p>phanhoang1022002@gmail.com</p>
                    </div>
                    <div>
                        <FacebookRoundedIcon className="s2"/>
                        <InstagramIcon className="s2"/>
                        <TwitterIcon className="s2"/>
                        <PinterestIcon className="s2"/>
                    </div>
                </div>
                <div className="container2">
                    <div>
                        <input placeholder="Họ và tên" className="input1"></input>
                        <input placeholder="Email" className="input1"></input>
                    </div>
                    <div>
                        <input placeholder="Số điện thoại" className="input1"></input>
                        <input placeholder="Địa chỉ" className="input1"></input>
                    </div>
                    <textarea placeholder="Lời nhắn" className="input2"></textarea>
                    <button className="buttonSend">GỬI</button>
                </div>
            </div>
            <Information />
        </div>
    );
}

export default Contact;