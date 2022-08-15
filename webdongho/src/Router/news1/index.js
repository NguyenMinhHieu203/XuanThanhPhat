import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import image1 from "./images/news-1-150x150.jpg";
import image2 from "./images/news-2-150x150.jpg";
import image3 from "./images/news-3-150x150.jpg";
import image4 from "./images/news-4-150x150.jpg";
import image5 from "./images/news-5-150x150.png";
import image6 from "./images/news-6-300x225.jpg";
import image7 from "./images/news-1.jpg";
import image8 from "./images/img20181109113243192.jpg";
import SearchIcon from '@mui/icons-material/Search';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import Information from "../../component/contact";
import "./style.css";

function News1() {
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
                <div className="snews1">
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
                <Link to="/news" className="datelink">TIN TỨC 10 Th4</Link>
                <p className="con1">Converse sẽ mang Golf le Fleur* Chuck 70 về Việt Nam?</p>
                <img src={image7} alt="news" className="imgN"></img>
                <p className="con2">Nhờ cú leak vừa rồi từ nơi sản sinh ra các thành phẩm của Converse – nhà máy Converse 
                và ngay sau đó là màn đính chính từ tài khoản IG hãng thời trang danh tiếng của rapper Tyler 
                huyền thoại @golfwang với cái nhìn tận mắt qua các hình ảnh items thuộc BST và chỉ vài tiếng 
                sau đã nhận được hơn 10.000 lượt like.</p>
                <p className="con3">Không cần nói quá nhiều về kẻ lắm tài Tyler nữa và hẳn ai cũng đã biết mối thâm giao giữa 
                “Flower Boy” và Converse với vô số lần release BST Converse GLF được thiết kế độc quyền trên 
                dòng One Star nổi tiếng và cực kì thành công đến mức chưa đầy 3 ngày đã treo bảng sold out. Nhưng 
                ở lần này, Converse đã giao Chuck 70 cho Tyler để chuẩn bị tạo nên cục diện mới.</p>
                <p className="con3">Chính xác hơn thì đây là một sự mở rộng sứ mệnh của Tyler khi vẫn trên motif hoa đặc trưng nhưng 
                lại trên một nền tảng mới – Chuck 70 cùng loại chất liệu vải đặc biệt thân thiện với môi trường khác 
                – vải bố.</p>
                <p className="con3">Được thiết kế theo tinh thần của Chuck 70 vintage và ngôn ngữ thời trang hiện đại nhà Golfwang, 
                Tyler “offer” vẫn giữ sự cổ điển của Chuck 70 bằng 2 tone màu trung tính: nâu Curry và trắng ngà 
                Parchment kết hợp với chất liệu vải bố được dàn đều ở upper cho riêng phiên bản Curry.</p>
                <img src={image8} alt="news" className="imgN"></img>
                <p className="con3">15/11/2018 là ngày chúng sẽ được lên kệ toàn thế giới và được biết pack Converse GLF* này thuộc 
                dòng Incubate và số lượng nó xuất hiện mặc định là có hạn và chưa chắc bạn có thể mua được vì hễ 
                launch là sold out trong ngày đó.</p>
                <p className="con3">Theo nguồn thì rất có thể Converse VN sẽ mang pack đầy fame này về thị trường sneaker năm nay. 
                Chưa bao giờ Việt Nam có được cơ hội mua trực tiếp Golf le Fleur* nên nếu có sẽ là một cú sang chấn 
                rất thú vị cho các sneakerhead/reseller Sđây. Thông tin chính thức sẽ sớm được cập nhật sau.</p>
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

export default News1;