import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import image1 from "./images/news-1-150x150.jpg";
import image2 from "./images/news-2-150x150.jpg";
import image3 from "./images/news-3-150x150.jpg";
import image4 from "./images/news-4-150x150.jpg";
import image5 from "./images/news-5-150x150.png";
import image6 from "./images/news-6-300x225.jpg";
import image7 from "./images/news-4.jpg";
import SearchIcon from '@mui/icons-material/Search';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import Information from "../../component/contact";
import "./style.css";

function News4() {
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
                <div className="snews4">
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
                <Link to="/news" className="datelink">TIN TỨC 4 Th8</Link>
                <p className="con1">Comme des Garçons Play x Converse nhá hàng mẫu giày mới, dự kiến ra mắt vào cuối tháng này</p>
                <img src={image7} alt="news" className="imgN"></img>
                <p className="con2">Không phụ lòng mong đợi của các fan, Comme des Garçons Play x Converse sẽ chính thức tung ra 
                mẫu giày mới cực chất.</p>
                <p className="con3">Nếu là fan trung thành của mẫu giày canvas có logo trái tim của COMME des GARÇONS (CDG) PLAY 
                x Converse thì chắc chắn đây sẽ là tin vui cho bạn. Sau thành công của những BST trước đó, họ đã chính thức quay 
                trở lại với mẫu giày hoàn toàn mới, đủ để khiến trái tim bạn ngất lịm ngay từ cái nhìn đầu tiên.</p>
                <p className="con3">Khác với những serie trước đó, đứa con cưng lần này của CDG Play và Converse sẽ xuất hiện với 
                bản phối màu nâu ngọt ngào và màu trắng cơ bản thay vì màu đen và trắng như bình thường. Phần logo hình trái tim 
                sẽ xuất hiện ở dọc hai bên thân giày. Như thường lệ, đường kẻ đen ở phần đế giày Converse cổ điển cũng sẽ biến mất, 
                thay vào đó là phần đế trắng tinh khôi. Tất nhiên, nhà sản xuất cũng sẽ tung ra hai phiên bản cao cổ và thấp cổ cho 
                khách hàng dễ dàng lựa chọn.</p>
                <p className="con3">Hiện ngày ra mắt chính thức lẫn giá thành của mẫu giày này vẫn được CDG Play giữ kín hoàn toàn, 
                họ mới chỉ “nhá hàng” một hình ảnh duy nhất mà thôi. Dù vậy, theo tin hành lang, rất có thể, nó sẽ được bày bán vào 
                cuối tháng 3 này.</p>
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

export default News4;