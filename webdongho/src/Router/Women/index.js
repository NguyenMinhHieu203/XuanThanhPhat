import React from "react";
import { Link } from "react-router-dom";
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
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
import product1 from "./images/T-shirt-1-300x225.jpg";
import product2 from "./images/T-shirt-2-300x225.jpg";
import product3 from "./images/jogger-300x225.jpg";
import product4 from "./images/T-shirt-300x225.jpg";
import product5 from "./images/balo-1-300x225.jpg";
import product6 from "./images/balo-2-300x225.jpg";
import product7 from "./images/balo-3-300x225.jpg";
import product8 from "./images/balo-4-300x225.jpg";
import product9 from "./images/kid-1-600x384.jpg";
import product10 from "./images/kid-2-600x384.jpg";
import product11 from "./images/kid-3-600x384.jpg";
import product12 from "./images/kid-4-600x384.jpg";
import Information from "../../component/contact";
import "./style.css";

function Woman() {
    const [page, setPage] = React.useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };
    return (
        <>
            <div className="app-6">
                <div className="leftdiv">
                    <div className="plink">
                        <Link to="/home" className="tohome">TRANG CHỦ</Link>
                        <p className="phome"> / Nữ</p>
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
                        <Stack spacing={2}>
                            <Typography style={{ marginBottom: "9%" }}>Hiển thị kết quả trang số {page}</Typography>
                        </Stack>
                        <select className="selectmenu">
                            <option>Thứ tự mặc định</option>
                            <option>Mới nhất</option>
                            <option>Thứ tự theo giá:thấp đến cao</option>
                            <option>Thứ tự theo giá:cao đến thấp</option>
                        </select>
                    </div>
                    <div className="producttotal">
                        <div className="productw1">
                            <div className="productlu">
                                <img src={product1} className="productimg"></img>
                                <p className="productp1">Converse X Suicidal...</p>
                                <p className="productp2">800,000</p>
                                <button className="productbtn"><Link to="/Cart/Converse-X-Suicidal-Tendencies-Long" className="btn-link">THÊM VÀO GIỎ</Link></button>
                            </div>
                            <div className="productlu">
                                <img src={product2} className="productimg"></img>
                                <p className="productp1">Converse Metal Cons...</p>
                                <p className="productp2">900,000</p>
                                <button className="productbtn"><Link to="/Cart/Converse-Metal-Cons-Pull-Over-Hoodie" className="btn-link">THÊM VÀO GIỎ</Link></button>
                            </div>
                            <div className="productlu">
                                <img src={product3} className="productimg"></img>
                                <p className="productp1">Converse Star Chevron...</p>
                                <p className="productp2">850,000</p>
                                <button className="productbtn"><Link to="/Cart/Converse-Star-Chevron-Jogger" className="btn-link">THÊM VÀO GIỎ</Link></button>
                            </div>
                            <div className="productlu">
                                <img src={product4} className="productimg"></img>
                                <p className="productp1">Converse Collegiate Te...</p>
                                <p className="productp2">750,000</p>
                                <button className="productbtn"><Link to="/Cart/Converse-Collegiate-Text-SS-Tee" className="btn-link">THÊM VÀO GIỎ</Link></button>
                            </div>
                            <div className="productlu">
                                <img src={product5} className="productimg"></img>
                                <p className="productp1">CSport Duffel</p>
                                <p className="productp2">750,000</p>
                                <button className="productbtn"><Link to="/Cart/CSport-Duffel" className="btn-link">THÊM VÀO GIỎ</Link></button>
                            </div>
                            <div className="productlu">
                                <img src={product6} className="productimg"></img>
                                <p className="productp1">Lil Duffel</p>
                                <p className="productp2">900,000</p>
                                <button className="productbtn"><Link to="/Cart/Lil-Duffel" className="btn-link">THÊM VÀO GIỎ</Link></button>
                            </div>
                        </div>
                        <div className="productw1">
                            <div className="productlu">
                                <img src={product7} className="productimg"></img>
                                <p className="productp1">Speed 2 Backpack</p>
                                <p className="productp2">800,000</p>
                                <button className="productbtn"><Link to="/Cart/Speed-2-Backpack" className="btn-link">THÊM VÀO GIỎ</Link></button>
                            </div>
                            <div className="productlu">
                                <img src={product8} className="productimg"></img>
                                <p className="productp1">Poly Chuck Plus 1.0</p>
                                <p className="productp2">900,000</p>
                                <button className="productbtn"><Link to="/Cart/Poly-Chuck-Plus-1.0" className="btn-link">THÊM VÀO GIỎ</Link></button>
                            </div>
                            <div className="productlu">
                                <img src={product9} className="productimg_1"></img>
                                <p className="productp1">Chuck Taylor All Star...</p>
                                <p className="productp2">850,000</p>
                                <button className="productbtn"><Link to="/Cart/Chuck-Taylor-All-Star-Creatures-Boston-x-London-Transport" className="btn-link">THÊM VÀO GIỎ</Link></button>
                            </div>
                            <div className="productlu">
                                <img src={product10} className="productimg_1"></img>
                                <p className="productp1">Chuck Taylor All Star...</p>
                                <p className="productp2">750,000</p>
                                <button className="productbtn"><Link to="/Cart/Chuck-Taylor-All-Star-Simple-Step-Boston-x-London-Transport" className="btn-link">THÊM VÀO GIỎ</Link></button>
                            </div>
                            <div className="productlu">
                                <img src={product11} className="productimg_1"></img>
                                <p className="productp1">Chuck Taylor All Star...</p>
                                <p className="productp2">750,000</p>
                                <button className="productbtn"><Link to="/Cart/Chuck-Taylor-All-Star-Simple-Step-Gaming-Camo" className="btn-link">THÊM VÀO GIỎ</Link></button>
                            </div>
                            <div className="productlu">
                                <img src={product12} className="productimg_1"></img>
                                <p className="productp1">Chuck Taylor All Star...</p>
                                <p className="productp2">900,000</p>
                                <button className="productbtn"><Link to="/Cart/Chuck-Taylor-All-Star-Simple-Step-Summer-Fundamentals" className="btn-link">THÊM VÀO GIỎ</Link></button>
                            </div>
                        </div>
                    </div>
                    <Pagination count={3} page={page} onChange={handleChange} className="pagination" />
                </div>
            </div>
            <Information />
        </>
    );
}

export default Woman;