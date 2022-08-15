import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import image from "./images/03306320213d3356ce875921ff197762.jpg";
import Information from "../../component/contact";
import "./style.css";

function Introduce() {
    // Tự động scroll khi chuyển trang
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);
    
    return(
        <div className="app-2">
            <div className="gt">
                <p className="text">GIỚI THIỆU</p>
                <div className="links">
                    <Link to="/home" className="l2 l3" style={{color: "white", textDecoration: "none", fontSize: "95%"}}>TRANG CHỦ</Link>
                    <p className="slash">/</p>
                    <Link to="/infor" className="l2 l4" style={{color: "white", textDecoration: "none", fontSize: "95%"}}>GIỚI THIỆU</Link>
                </div>
            </div>
            <div className="t1">
                <img src={image} alt="shoe" className="shoe-img"></img>
                <div>
                    <div>
                        <p className="t2">GIỚI THIỆU</p>
                        <p style={{fontSize: "100%"}}>Chào mừng bạn đến với ngôi nhà Converse! Tại đây, mỗi một dòng chữ, mỗi chi tiết và 
                        hình ảnh đều là những bằng chứng mang dấu ấn lịch sử Converse 100 năm, và đang không<br /> ngừng phát triển lớn mạnh.</p>
                    </div>
                    <div>
                        <p className="t3">SẢN PHẨM GIÀY TỐT NHẤT</p>
                        <div className="t4">
                            <p style={{marginRight: "2%", fontSize: "110%"}}>Chào mừng bạn đến với ngôi nhà Coverse! <br />
                                Tại đây, mỗi một dòng chữ, mỗi chi tiết và <br />
                                hình ảnh đều là những bằng chứng mang <br />
                                dấu ấn lịch sử Converse 100 năm, và đang<br />
                                không ngừng phát triển lớn mạnh</p>
                            <div className="v1"/>
                            <p style={{marginLeft: "2%", fontSize: "110%"}}>Chào mừng bạn đến với ngôi nhà Coverse! <br />
                                Tại đây, mỗi một dòng chữ, mỗi chi tiết và <br />
                                hình ảnh đều là những bằng chứng mang <br />
                                dấu ấn lịch sử Converse 100 năm, và đang<br />
                                không ngừng phát triển lớn mạnh</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="r1">
                <div className="column">
                    <div>
                        <p className="t5">Miễn phí giao hàng</p>
                        <p className="t6">Tại đây, mỗi một dòng chữ,mỗi chi tiết và hình ảnh đều là những bằng chứng mang dấu ấn lịch sử Converse 100<br /> 
                        năm, và đang không ngừng phát triển lớn mạnh</p>
                    </div>
                    <div>
                        <p className="t5">Sản phẩm mới 100%</p>
                        <p className="t6">Tại đây, mỗi một dòng chữ,mỗi chi tiết và hình ảnh đều là những bằng chứng mang dấu ấn lịch sử Converse 100<br /> 
                        năm, và đang không ngừng phát triển lớn mạnh</p>
                    </div>
                    <div>
                        <p className="t5">Hàng chính hãng</p>
                        <p className="t6">Tại đây, mỗi một dòng chữ,mỗi chi tiết và hình ảnh đều là những bằng chứng mang dấu ấn lịch sử Converse 100<br /> 
                        năm, và đang không ngừng phát triển lớn mạnh</p>
                    </div>
                </div>
                <div className="column">
                    <div>
                        <p className="t5">Đổi trả trong vòng 7 ngày</p>
                        <p className="t6">Tại đây, mỗi một dòng chữ,mỗi chi tiết và hình ảnh đều là những bằng chứng mang dấu ấn lịch sử Converse 100<br /> 
                        năm, và đang không ngừng phát triển lớn mạnh</p>
                    </div>
                    <div>
                        <p className="t5">Chăm sóc khách hàng</p>
                        <p className="t6">Tại đây, mỗi một dòng chữ,mỗi chi tiết và hình ảnh đều là những bằng chứng mang dấu ấn lịch sử Converse 100<br /> 
                        năm, và đang không ngừng phát triển lớn mạnh</p>
                    </div>
                    <div>
                        <p className="t5">Thanh toán đa dạng</p>
                        <p className="t6">Tại đây, mỗi một dòng chữ,mỗi chi tiết và hình ảnh đều là những bằng chứng mang dấu ấn lịch sử Converse 100<br /> 
                        năm, và đang không ngừng phát triển lớn mạnh</p>
                    </div>
                </div>
            </div>
            <Information />
        </div>
    );
}

export default Introduce;