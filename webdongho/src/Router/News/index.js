import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import image1 from "./images/news-1-150x150.jpg";
import image2 from "./images/news-2-150x150.jpg";
import image3 from "./images/news-3-150x150.jpg";
import image4 from "./images/news-4-150x150.jpg";
import image5 from "./images/news-5-150x150.png";
import image6 from "./images/news-6-300x225.jpg";
import image7 from "./images/news-1-300x225.jpg";
import image8 from "./images/news-2-300x229.jpg";
import image9 from "./images/news-3-300x143.jpg";
import image10 from "./images/news-4-300x200.jpg";
import image11 from "./images/news-5-300x203.png";
import image12 from "./images/news-6.jpg";
import SearchIcon from '@mui/icons-material/Search';
import Information from "../../component/contact";
import "./style.css";

function News() {
    // Tự động scroll khi chuyển trang
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);
    
    return(
        <div className="app-4">
            <h5 className="tt-1">TIN TỨC</h5>
            <div className="bd">
                <div className="bd1">
                    <div className="sr">
                        <input placeholder="Tìm kiếm" className="ip"></input>
                        <SearchIcon/>
                    </div>
                    <h6 className="tt-2">BÀI VIẾT MỚI</h6>
                    <div className="parent1">
                        <Link to="/news-1" className="child1">
                            <img src={image1} alt="image" className="i1"></img>
                            <p className="tx1">Converse sẽ mang Golf le Fleur*Chuck 70 về Việt Nam?</p>
                        </Link>
                        <Link to="/news-2" className="child1">
                            <img src={image2} alt="image" className="i1"></img>
                            <p className="tx1">Xinh xắn nhất những ngày này là những mẫu giày  ...</p>
                        </Link>
                        <Link to="/news-3" className="child1">
                            <img src={image3} alt="image" className="i1"></img>
                            <p className="tx1">Fashionista Việt đua nhau sống "ngược" theo trào lưu ...</p>
                        </Link>
                        <Link to="/news-4" className="child1">
                            <img src={image4} alt="image" className="i1"></img>
                            <p className="tx1">Comme des Garcons Play x Converse nhá hàng mẫu ...</p>
                        </Link>
                        <Link to="/news-5" className="child1">
                            <img src={image5} alt="image" className="i1"></img>
                            <p className="tx1">Hội Thần Kinh Giày xôn xao với hình ảnh 18 ngàn lượt like ...</p>
                        </Link>
                        <Link to="/news-6" className="child1">
                            <img src={image6} alt="image" className="i1"></img>
                            <p className="tx1">Đế giày Converse có thiết kế rất đặc biệt nhưng lý do ...</p>
                        </Link>
                    </div>
                </div>
                <div className="sl"></div>
                <div>
                    <div className="bd2">
                        <div className="parent2">
                            <div className="ldiv">
                                <Link to="/news-1" className="child2">
                                    <img src={image7} alt="image" className="i2"></img>
                                    <p className="tx2">Converse sẽ mang Gold le Fleur*Chuck 70 về Việt Nam?</p>
                                    <p className="tx3">Nhờ cú leak vừa rồi từ nơi sản sinh ra các thành phẩm của Converse - nhà...</p>
                                </Link>
                                <p className="date">10<br/>Th4</p>
                            </div>
                            <div className="ldiv">
                                <Link to="/news-2" className="child2">
                                    <img src={image8} alt="image" className="i2"></img>
                                    <p className="tx2">Xin xắn nhất những ngày này là những mẫu giày của các chàng...</p>
                                    <p className="tx3">Phải tới ngày 27 tới, BST này mới chính thức ra mắt nhưng giờ nó đã được rấ...</p>
                                </Link>
                                <p className="date">10<br/>Th2</p>
                            </div>
                            <div className="ldiv">
                                <Link to="/news-3" className="child2">
                                    <img src={image9} alt="image" className="i2"></img>
                                    <p className="tx2">Fashionista Việt đua nhau sống "ngược" theo trào lưu...</p>
                                    <p className="tx3">Trước lời thách thức của Kaylee và Brian, giới trẻ Việt Nam nó chung ha...</p>
                                </Link>
                                <p className="date">27<br/>Th4</p>
                            </div>
                            <div className="ldiv">
                                <Link to="/news-4" className="child2">
                                    <img src={image10} alt="image" className="i2"></img>
                                    <p className="tx2">Comme des Garcons Play x Converse nhá hàng mẫu giày m...</p>
                                    <p className="tx3">Không phụ lòng mong đợi của các fan, Comme des Garcons Play x Converse...</p>
                                </Link>
                                <p className="date">4<br/>Th8</p>
                            </div>
                        </div>
                        <div className="parent2">
                            <div className="ldiv">
                                <Link to="/news-5" className="child2">
                                    <img src={image11} alt="image" className="i2"></img>
                                    <p className="tx2">Hội Thần Kinh Giày xôn xao với hình ảnh 18 ngàn lượt like của...</p>
                                    <p className="tx3">Có vẻ như bức hình của cô nhóc xinh xắn cùng đôi Converse trắng đã trở...</p>
                                </Link>
                                <p className="date">10<br/>Th12</p>
                            </div>
                            <div className="ldiv">
                                <Link to="/news-6" className="child2">
                                    <img src={image12} alt="image" className="i2"></img>
                                    <p className="tx2">Đế giày Converse có thiết kế rất đặc biệt, nhưng lý do thì chắc...</p>
                                    <p className="tx3">Nếu chú ý, bạn sẽ thấy đế giày Converse có một lớp nỉ cao su sọc m...</p>
                                </Link>
                                <p className="date">22<br/>Th3</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Information />
        </div>
    );
}

export default News;