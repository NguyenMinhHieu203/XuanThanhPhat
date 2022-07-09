import React from "react";
import PlaceIcon from '@mui/icons-material/Place';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import img1 from "./image/payment1.png";
import img2 from "./image/payment2.png";
import img3 from "./image/payment3.png";
import img4 from "./image/payment4.png";
import img5 from "./image/payment5.png";
import { Link } from "react-router-dom";
import "./style.css";

function Contact() {
    return(
        <div className="app2">
            <div className="footer">
                    <div className="c1">
                        <p className="title">GIỚI THIỆU</p>
                        <hr className="line"/>
                        <p className="content">Chào mừng bạn đến với ngôi nhà<br/>Converse!Tại đây, mỗi một dòng chữ,<br/>mỗi chi tiết và hình ảnh đều là những<br/> 
                        bằng chứng mang dấu ấn lịch sử<br/>Conveerse 100 năm, và đang không ngừng<br/> phát triển lớn mạnh</p>
                    </div>
                    <div className="c1">
                        <p className="title">ĐỊA CHỈ</p>
                        <hr className="line"/>
                        <div className="c2">
                            <PlaceIcon className="content"/>
                            <p className="p">128 Nguyễn Trãi, Thanh Xuân, Hà Nội</p>
                        </div>
                        <div className="c2">
                            <PhoneIcon className="content"/>
                            <p className="p">0278367589</p>
                        </div>
                        <div className="c2">
                            <EmailIcon className="content"/>
                            <p className="p">phanhoang1022002@gmail.com</p>
                        </div>
                    </div>
                    <div className="c1">
                        <p className="title">MENU</p>
                        <hr className="line"/>
                        <div className="pages">
                            <div className="pageOne">
                                <Link to="/home" className="page">Trang chủ</Link>
                                <Link to="" className="page">Cửa hàng</Link>
                                <Link to="/contact" className="page">Liên hệ</Link>
                            </div>
                            <div className="pageTwo">
                                <Link to="/infor" className="page">Giới thiệu</Link>
                                <Link to="/news" className="page">Tin tức</Link>
                            </div>
                        </div>
                    </div>
                    <div className="c1">
                        <p className="title">MẠNG XÃ HỘI</p>
                        <hr className="line"/>
                        <Link to="/home"><FacebookIcon className="social"/></Link>
                        <Link to="/home"><InstagramIcon className="social"/></Link>
                        <Link to="/home"><TwitterIcon className="social"/></Link>
                        <Link to="/home"><PinterestIcon className="social"/></Link>
                    </div>
                </div>
                <hr style={{border: "1px solid red", width: "80%", marginLeft: "10%"}}/>
                <div className="sign">
                    <div className="s1">
                        <p className="title1">ĐĂNG KÝ NHẬN THÔNG TIN</p>
                        <input placeholder="Email" className="input"></input>
                        <button className="btn">ĐĂNG KÝ</button>
                        <img src={img1} alt="payment" className="pay"></img>
                        <img src={img2} alt="payment"></img>
                        <img src={img3} alt="payment"></img>
                        <img src={img4} alt="payment"></img>
                        <img src={img5} alt="payment"></img>
                    </div>
                    <div>
                        <p style={{fontSize: "110%", color: "rgb(169,169,169)", marginTop: "3%", marginLeft: "40%"}}>Bản quyền thuộc về. Thiết kế Website PVH</p>
                    </div>
                </div>
            </div>
    );
}

export default Contact;