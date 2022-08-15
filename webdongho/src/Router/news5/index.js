import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import image1 from "./images/news-1-150x150.jpg";
import image2 from "./images/news-2-150x150.jpg";
import image3 from "./images/news-3-150x150.jpg";
import image4 from "./images/news-4-150x150.jpg";
import image5 from "./images/news-5-150x150.png";
import image6 from "./images/news-6-300x225.jpg";
import image7 from "./images/news-5.png";
import SearchIcon from '@mui/icons-material/Search';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import Information from "../../component/contact";
import "./style.css";

function News5() {
    // Tự động scroll khi chuyển trang
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);
    
    return(
        <div className="app-4.1">
        <div className="newstotal">
            <div className="news-1">
                <div className="sdiv">
                    <input placeholder="Tìm kiếm" className="sinput"></input>
                    <SearchIcon />
                </div>
                <h6 className="stitle">BÀI VIẾT MỚI</h6>
                <div className="snews5">
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
                <Link to="/news" className="datelink">TIN TỨC 10 Th12</Link>
                <p className="con1">Hội Thần Kinh Giày xôn xao với hình ảnh 18 ngàn lượt like của nhóc tì mẫu giáo</p>
                <img src={image7} alt="news" className="imgN"></img>
                <p className="con2">Có vẻ như bức hình của cô nhóc xinh xắn cùng đôi Converse trắng đã trở thành một trong 
                những kỷ lục đáng thèm muốn đối với các “thần kinh giày”.</p>
                <p className="con3">Đã tự nhận là một tín đồ thời trang nói chung và sneakers nói riêng thì ắt, “Thần Kinh 
                Giày” là một Group mà bạn đã từng nghe qua hoặc tham gia. Đây là một tập thể các bạn trẻ mê giày, họ cùng 
                nhau chia sẻ các thông tin và bí quyết về sneakers, hay đơn giản nhất là đăng tải những hình ảnh phong cách 
                thời trang cá nhân với sneakers.</p>
                <p className="con3">Và tất nhiên, lượt like – comment thường là yếu tố để đánh giá xem một bức ảnh thời trang 
                có cuốn hút hay không. Nếu xét trên yếu tố này thì một cô nhóc mẫu giáo ắt khiến kha khá anh chàng cô nàng phải 
                thầm ghen tỵ vì sở hữu tấm hình lên đến… 18 ngàn like!</p>
                <p className="con3">Thường những “cool kid” với phong cách chững chạc như cô bé sẽ nhận được sự hưởng ứng mạnh 
                mẽ từ giới mộ điệu, nên thực ra “ca” này cũng không có gì lạ. Được biết, hình ảnh của cô nhóc do chính người 
                mẹ chia sẻ vào Group “Thần Kinh Giày” nhằm mục đích thỏa mãn đam mê thời trang.</p>
                <p className="con3">Được biết, cô bé có tên thật là Linh Đan, tên thân mật ở nhà là bé Vịt, chỉ mới 6 tuổi. Mẹ 
                của Linh Đan cho biết rằng cô bé thường tự lựa chọn trang phục và tỏ ra rất có khiếu với thời trang. 4 tháng đổ 
                lại đây, bé Linh Đan có tham gia thêm một số hoạt động thời trang như người mẫu nhí. Nhưng khi chia sẻ về tương 
                lai thì mẹ của bé cho biết rằng mọi thứ sẽ để Linh Đan tự lựa chọn thay vì gượng ép. Hiện tại, cô bé rất mê những 
                đôi Converse.</p>
                <Link to="/home" className="solink"><Button startIcon={<FacebookIcon />} style={{backgroundColor: "rgb(65,105,225)", color: "white", marginRight: "1%"}}>Facebook</Button></Link>
                <Link to="/home" className="solink"><Button startIcon={<InstagramIcon />} style={{textDecoration: "none", backgroundColor: "rgb(70,130,180)", color: "white", marginRight: "1%"}}>Intagram</Button></Link>
                <Link to="/home" className="solink"><Button startIcon={<TwitterIcon />} style={{textDecoration: "none", backgroundColor: "rgb(30,144,255)", color: "white", marginRight: "1%"}} >Twitter</Button></Link>
                <Link to="/home" className="solink"><Button startIcon={<PinterestIcon />} style={{textDecoration: "none", backgroundColor: "rgb(178,34,34)", color: "white"}} >Pinterest</Button></Link>
                <div className="cmt">
                    <p className="tcmt">Nhận xét</p>
                    <p>Email của bạn sẽ không được hiển thị công khai. Các trường bắt buộc được đánh dấu *</p>
                    <p className="comment">Bình luận</p>
                    <textarea className="boxcmt"/>
                    <div className="inforcmt">
                        <div className="inforde">
                            <p>Tên</p>
                            <input/>
                        </div>
                        <div className="inforde">
                            <p>Email *</p>
                            <input/>
                        </div>
                        <div className="inforde">
                            <p>Số điện thoại *</p>
                            <input/>
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

export default News5;