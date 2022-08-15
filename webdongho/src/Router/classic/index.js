import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import image1 from "./images/news-1-150x150.jpg";
import image2 from "./images/news-2-150x150.jpg";
import image3 from "./images/news-3-150x150.jpg";
import image4 from "./images/news-4-150x150.jpg";
import image5 from "./images/news-5-150x150.png";
import image6 from "./images/news-6-300x225.jpg";
import image7 from "./images/women-classic-1.jpg";
import image8 from "./images/women-classic-6.jpg";
import image9 from "./images/women-onestar-1.jpg";
import image10 from "./images/women-onestar-4.jpg";
import image11 from "./images/women-sunbaked-2.jpg";
import product1 from "./images/women-classic-1.jpg";
import product2 from "./images/women-classic-2.jpg";
import product3 from "./images/women-classic-3.jpg";
import product4 from "./images/women-classic-4.jpg";
import product5 from "./images/women-classic-5.jpg";
import product6 from "./images/women-classic-6.jpg";
import product7 from "./images/women-classic-7.jpg";
import product8 from "./images/women-classic-8.jpg";
import Information from "../../component/contact";
import "./style.css";

function Classic() {
    // Tự động scroll khi chuyển trang
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);
    
    return (
        <>
            <div className="app-6">
                <div className="leftdiv">
                    <div className="plink">
                        <Link to="/home" className="tohome">TRANG CHỦ</Link>
                        <p className="phome"> / Classic</p>
                    </div>
                    <div className="menu1">
                        <h6 className="tmenu1">SẢN PHẨM</h6>
                        <div className="m1links">
                            <Link to="/Cart/Chuck-Taylor-Classic-1" className="m1link">
                                <img src={image7} alt="image" className="m1img"></img>
                                <div>
                                    <p className="m1p1">Chuck Taylor Classic</p>
                                    <p className="m1p2">1,250,000đ</p>
                                </div>
                            </Link>
                            <Link to="/Cart/Chuck-Taylor-Classic-6" className="m1link">
                                <img src={image8} alt="image" className="m1img"></img>
                                <div>
                                    <p className="m1p1">Chuck Taylor Classic</p>
                                    <p className="m1p2">1,250,000đ</p>
                                </div>
                            </Link>
                            <Link to="/Cart/One-Star-Love-The-Progress-5" className="m1link">
                                <img src={image9} alt="image" className="m1img"></img>
                                <div>
                                    <p className="m1p1">One Star Love The Progress</p>
                                    <p className="m1p2">1,250,000đ</p>
                                </div>
                            </Link>
                            <Link to="/Cart/One-Star-Sunbaked-1" className="m1link">
                                <img src={image10} alt="image" className="m1img"></img>
                                <div>
                                    <p className="m1p1">One Star Sunbaked</p>
                                    <p className="m1p2">1,250,000đ</p>
                                </div>
                            </Link>
                            <Link to="/Cart/One-Star-Sunbaked-2" className="m1link">
                                <img src={image11} alt="image" className="m1img"></img>
                                <div>
                                    <p className="m1p1">One Star Sunbaked</p>
                                    <p className="m1p2">1,250,000đ</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="menu2">
                        <h6 className="tmenu2">BÀI VIẾT MỚI</h6>
                        <div className="m2links">
                            <Link to="/news-1" className="m2link">
                                <img src={image1} alt="image" className="m2img"></img>
                                <p className="m2p">Converse sẽ mang Golf le Fleur*Chuck 70 về Việt Nam?</p>
                            </Link>
                            <Link to="/news-2" className="m2link">
                                <img src={image2} alt="image" className="m2img"></img>
                                <p className="m2p">Xinh xắn nhất những ngày này là những mẫu giày  ...</p>
                            </Link>
                            <Link to="/news-3" className="m2link">
                                <img src={image3} alt="image" className="m2img"></img>
                                <p className="m2p">Fashionista Việt đua nhau sống "ngược" theo trào lưu ...</p>
                            </Link>
                            <Link to="/news-4" className="m2link">
                                <img src={image4} alt="image" className="m2img"></img>
                                <p className="m2p">Comme des Garcons Play x Converse nhá hàng mẫu ...</p>
                            </Link>
                            <Link to="/news-5" className="m2link">
                                <img src={image5} alt="image" className="m2img"></img>
                                <p className="m2p">Hội Thần Kinh Giày xôn xao với hình ảnh 18 ngàn lượt like ...</p>
                            </Link>
                            <Link to="/news-6" className="m2link">
                                <img src={image6} alt="image" className="m2img"></img>
                                <p className="m2p">Đế giày Converse có thiết kế rất đặc biệt nhưng lý do ...</p>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="rightdiv">
                    <div className="rdse">
                        <p>Hiển thị một kết quả duy nhất</p>
                        <select className="selectmenu">
                            <option>Thứ tự mặc định</option>
                            <option>Mới nhất</option>
                            <option>Thứ tự theo giá:thấp đến cao</option>
                            <option>Thứ tự theo giá:cao đến thấp</option>
                        </select>
                    </div>
                    <div className="productco">
                        <div className="productro">
                            <div className="prorow">
                                <img src={product1} alt="product" className="proimg"></img>
                                <p className="pprop1">Chuck Taylor Classic</p>
                                <p className="pprop2">1,250,000</p>
                                <button className="probtn"><Link to="/Cart/Chuck-Taylor-Classic-1" className="btn-link">THÊM VÀO GIỎ</Link></button>
                            </div>
                            <div className="prorow">
                                <img src={product2} alt="product" className="proimg"></img>
                                <p className="pprop1">Chuck Taylor Classic</p>
                                <p className="pprop2">1,250,000</p>
                                <button className="probtn"><Link to="/Cart/Chuck-Taylor-Classic-6" className="btn-link">THÊM VÀO GIỎ</Link></button>
                            </div>
                            <div className="prorow">
                                <img src={product3} alt="product" className="proimg"></img>
                                <p className="pprop1">Chuck Taylor Classic</p>
                                <p className="pprop2">1,250,000</p>
                                <button className="probtn"><Link to="/Cart/Chuck-Taylor-Classic-3" className="btn-link">THÊM VÀO GIỎ</Link></button>
                            </div>
                            <div className="prorow">
                                <img src={product4} alt="product" className="proimg"></img>
                                <p className="pprop1">Chuck Taylor Classic</p>
                                <p className="pprop2">1,250,000</p>
                                <button className="probtn"><Link to="/Cart/Chuck-Taylor-Classic-4" className="btn-link">THÊM VÀO GIỎ</Link></button>
                            </div>
                            <div className="prorow">
                                <img src={product5} alt="product" className="proimg"></img>
                                <p className="pprop1">Chuck Taylor Classic</p>
                                <p className="pprop2">1,250,000</p>
                                <button className="probtn"><Link to="/Cart/Chuck-Taylor-Classic-5" className="btn-link">THÊM VÀO GIỎ</Link></button>
                            </div>
                            <div className="prorow">
                                <img src={product6} alt="product" className="proimg"></img>
                                <p className="pprop1">Chuck Taylor Classic</p>
                                <p className="pprop2">1,250,000</p>
                                <button className="probtn"><Link to="/Cart/Chuck-Taylor-Classic-2" className="btn-link">THÊM VÀO GIỎ</Link></button>
                            </div>
                        </div>
                        <div className="productro">
                            <div className="prorow">
                                <img src={product7} alt="product" className="proimg"></img>
                                <p className="pprop1">Chuck Taylor Classic</p>
                                <p className="pprop2">1,250,000</p>
                                <button className="probtn"><Link to="/Cart/Chuck-Taylor-Classic-7" className="btn-link">THÊM VÀO GIỎ</Link></button>
                            </div>
                            <div className="prorow">
                                <img src={product8} alt="product" className="proimg"></img>
                                <p className="pprop1">Chuck Taylor Classic</p>
                                <p className="pprop2">1,250,000</p>
                                <button className="probtn"><Link to="/Cart/Chuck-Taylor-Classic-8" className="btn-link">THÊM VÀO GIỎ</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Information />
        </>
    )
}

export default Classic;