import React ,{ useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import image1 from "./images/news-1-150x150.jpg";
import image2 from "./images/news-2-150x150.jpg";
import image3 from "./images/news-3-150x150.jpg";
import image4 from "./images/news-4-150x150.jpg";
import image5 from "./images/news-5-150x150.png";
import image6 from "./images/news-6-300x225.jpg";
import image7 from "./images/news-2.jpg";
import image8 from "./images/photo-1-15324227709141718067154.webp";
import image9 from "./images/photo-1-15324228659441179122291.webp";
import image10 from "./images/photo-1-15324227886761963887619.webp";
import image11 from "./images/photo-1-15324228481081971707833.webp";
import SearchIcon from '@mui/icons-material/Search';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import Information from "../../component/contact";
import "./style.css";

function News2() {
    // Tự động scroll khi chuyển trang
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);
    
    return (
        <div className="app-4.1">
            <div className="newstotal">
                <div className="news-1">
                    <div className="sdiv">
                        <input placeholder="Tìm kiếm" className="sinput"></input>
                        <SearchIcon />
                    </div>
                    <h6 className="stitle">BÀI VIẾT MỚI</h6>
                    <div className="snews2">
                        <Link to="*" className="slink">
                            <img src={image1} alt="image" className="si"></img>
                            <p className="st">Converse sẽ mang Golf le Fleur*Chuck 70 về Việt Nam?</p>
                        </Link>
                        <Link to="*" className="slink">
                            <img src={image2} alt="image" className="si"></img>
                            <p className="st">Xinh xắn nhất những ngày này là những mẫu giày  ...</p>
                        </Link>
                        <Link to="*" className="slink">
                            <img src={image3} alt="image" className="si"></img>
                            <p className="st">Fashionista Việt đua nhau sống "ngược" theo trào lưu ...</p>
                        </Link>
                        <Link to="*" className="slink">
                            <img src={image4} alt="image" className="si"></img>
                            <p className="st">Comme des Garcons Play x Converse nhá hàng mẫu ...</p>
                        </Link>
                        <Link to="*" className="slink">
                            <img src={image5} alt="image" className="si"></img>
                            <p className="st">Hội Thần Kinh Giày xôn xao với hình ảnh 18 ngàn lượt like ...</p>
                        </Link>
                        <Link to="*" className="slink">
                            <img src={image6} alt="image" className="si"></img>
                            <p className="st">Đế giày Converse có thiết kế rất đặc biệt nhưng lý do ...</p>
                        </Link>
                    </div>
                </div>
                <div className="strline" />
                <div className="news-2">
                    <Link to="/news" className="datelink">TIN TỨC 10 Th2</Link>
                    <p className="con1">Xinh xắn nhất những ngày này là những mẫu giày của các chàng trai BTS hợp tác cùng Converse</p>
                    <img src={image7} alt="news" className="imgN1"></img> 
                    <p className="con2">Phải tới ngày 27 tới, BST này mới chính thức ra mắt nhưng giờ nó đã được rất nhiều Army nhăm nhe đặt mua.</p>
                    <p className="con3">Không chỉ trong địa hạt âm nhạc và cả trong thời trang, tầm ảnh hưởng của BTS cũng không thể xem thường được. 
                    Theo giới thạo tin, những item được BTS mặc hay quảng bá, thường là những món hết hàng trong nháy mắt. Họ, giờ đây có “quyền năng” 
                    khiến mọi sản phẩm trở thành best seller.</p>
                    <p className="con3">Cũng bởi thế, 7 chàng trai vàng của Big Hit Entertainment luôn được các nhãn hàng săn đón nhiệt tình. Ngoài 
                    việc tài trợ đồ, họ còn cùng nhau hợp tác sản xuất ra những item có số lượng giới hạn. Gần đây nhất là BT21, cú collab không thể 
                    dễ thương hơn của BTS và Converse – đại diện sneaker đã quá quen thuộc với các bạn trẻ yêu thời trang.</p>
                    <p className="con3">Về mặt thiết kế, BT21 vẫn có phom dáng giống dòng giày Chuck Taylor All Star kinh điển của Converse. Vải vẫn 
                    là vải canvas, phần mũi vẫn được cắt gọn gàng, không có quá nhiều thay đổi lớn. Điểm khác biệt nhất chính là loạt họa tiết đáng 
                    yêu, cũng chính là các sticker quen thuộc với người dùng Facebook Messenger. Ngoài ra, phần dây buộc chấm bi màu mè cũng là điểm 
                    nhấn khá nổi bật.</p>
                    <p className="con3">Một bộ sản phẩm đầy đủ ngoài một đôi giày BT21, còn có túi tote màu đen và 8 chiếc huy hiệu khác nhau, cho 
                    phép bạn tự design, tự biên tự diễn chiếc túi theo ý thích của mình. Theo thông tin ban đầu, phiên bản cổ ngắn sẽ được bán với 
                    giá 84 USD (1,9 triệu VNĐ) còn phiên bản cao cổ có giá 87 USD (hơn 2 triệu VNĐ). Nếu không có gì thay đổi, BST này sẽ được lên 
                    kệ vào ngày 27/7 tới tại Hàn Quốc, Hongkong, Đài Loan và Trung Quốc.</p>
                    <div className="imgN2S">
                        <img src={image8} alt="news" className="imgN2"></img> 
                        <img src={image9} alt="news" className="imgN2"></img> 
                        <img src={image10} alt="news" className="imgN2"></img> 
                        <img src={image11} alt="news" className="imgN2"></img> 
                    </div>
                    <div>
                        <Link to="/home" className="solink"><Button startIcon={<FacebookIcon />} style={{ backgroundColor: "rgb(65,105,225)", color: "white", marginRight: "1%" }}>Facebook</Button></Link>
                        <Link to="/home" className="solink"><Button startIcon={<InstagramIcon />} style={{ textDecoration: "none", backgroundColor: "rgb(70,130,180)", color: "white", marginRight: "1%" }}>Intagram</Button></Link>
                        <Link to="/home" className="solink"><Button startIcon={<TwitterIcon />} style={{ textDecoration: "none", backgroundColor: "rgb(30,144,255)", color: "white", marginRight: "1%" }} >Twitter</Button></Link>
                        <Link to="/home" className="solink"><Button startIcon={<PinterestIcon />} style={{ textDecoration: "none", backgroundColor: "rgb(178,34,34)", color: "white" }} >Pinterest</Button></Link>
                    </div>
                    <div className="cmt">
                        <p className="tcmt">Nhận xét</p>
                        <p>Email của bạn sẽ không được hiển thị công khai. Các trường bắt buộc được đánh dấu *</p>
                        <p className="comment">Bình luận</p>
                        <textarea className="boxcmt" />
                        <div className="inforcmt">
                            <div className="inforde">
                                <p>Tên</p>
                                <input />
                            </div>
                            <div className="inforde">
                                <p>Email *</p>
                                <input />
                            </div>
                            <div className="inforde">
                                <p>Số điện thoại *</p>
                                <input />
                            </div>
                        </div>
                        <button className="btnres">PHẢN HỒI</button>
                    </div>
                </div>
            </div>
            <Information />
        </div>
    );
}

export default News2;