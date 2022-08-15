import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import image1 from "./images/news-1-150x150.jpg";
import image2 from "./images/news-2-150x150.jpg";
import image3 from "./images/news-3-150x150.jpg";
import image4 from "./images/news-4-150x150.jpg";
import image5 from "./images/news-5-150x150.png";
import image6 from "./images/news-6-300x225.jpg";
import image7 from "./images/news-3-1024x489.jpg";
import image8 from "./images/img20180712184137203.jpg";
import image9 from "./images/img20180712184137504.jpg";
import image10 from "./images/img20180712184137795.jpg";
import image11 from "./images/img20180712184138289.jpg";
import image12 from "./images/img20180712184138690.jpg";
import image13 from "./images/img20180712184138998.jpg";
import image14 from "./images/img20180712184139307.jpg";
import SearchIcon from '@mui/icons-material/Search';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import Information from "../../component/contact";
import "./style.css";

function News3() {
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
                    <div className="snews3">
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
                    <Link to="/news" className="datelink">TIN TỨC 27 Th4</Link>
                    <p className="con1">Fashionista Việt đua nhau sống “ngược” theo trào lưu “ChucksFirst? Bạn dám không?</p>
                    <img src={image7} alt="news" className="imgN"></img>
                    <p className="con2">Trước lời thách thức của Kaylee và Brian, giới trẻ Việt Nam nói chung hay còn được gọi 
                    là gen Z hiện nay và nhất là các đầu giày cũng như các fashionista/model mới nổi nói riêng đã đáp trả tích 
                    cực: #ChucksFirst?! Tôi dám!</p>
                    <p className="con3">#ChucksFirst? Bạn dám không? là câu thách thức được gửi đến giới trẻ/fashionista và cả 
                    sneakerhead, câu hỏi này được viral trên Instagram và Facebook gần đây từ hot model Brian Trần và VJ tài năng 
                    Kaylee.</p>
                    <img src={image8} alt="news" className="imgN"></img>
                    <p className="con3">Họ đưa ra thách thức này nhằm mục đích khuyến khích sự thay đổi tích cực và giơ cao tinh 
                    thần sống khác biệt không nhàm chán, có chút dị và ngược đời, cụ thể đó là sống “ngược” Start From The Bottom. 
                    Có ai dám thử đổi thói quen của mình mang giày trước rồi mới lên outfit sau?</p>
                    <img src={image9} alt="news" className="imgN"></img>
                    <p className="con3">Sau vài ngày đưa ra thử thách, có thể thấy được thử thách #ChucksFirst theo concept Start 
                    From The Bottom đến từ Converse này có vẻ “chạm” đúng đối tượng và dường như họ chẳng hề e dè để “say yes”</p>
                    <img src={image10} alt="news" className="imgN"></img> 
                    <p className="con3">@huy.ka cậu bạn vừa mới nổi trong cộng đồng giày và cách cậu chơi game “ngược”.</p>
                    <img src={image11} alt="news" className="imgN"></img> 
                    <p className="con3">Hay soái ca giới trẻ ngàn view @hoangtrung087 chọn cách on game bằng clip stop-motion</p>
                    <img src={image12} alt="news" className="imgN"></img> 
                    <p className="con3">@maikyhan – 1 trong các hot face lookbook hay nhắc đến cũng không ngoại lệ với thử thách này</p>
                    <img src={image13} alt="news" className="imgN"></img> 
                    <p className="con3">Ngoài ra, đối tượng gen Z như bạn @tranthutrangtrang cũng sở hữu độ chịu chơi không kém</p>
                    <p className="con3">Có vẻ như chiến dịch đến từ Converse – Start From The Bottom đã khiến các fahsionista hay các 
                    bạn thuộc gen Z hoàn toàn thích thú vì bằng chứng là những cú gật đầu “say yes” dám thể hiện thử thách sống ngược 
                    của mình trên mạng xã hội.</p>
                    <img src={image14} alt="news" className="imgN"></img> 
                    <p className="con3">Xem thêm thông tin chi tiết tại Instagram: @Converse.vn và Facebook: @Converse.vietnam cho các 
                    sản phẩm Chuck Taylor All Star.</p>
                    <Link to="/home" className="solink"><Button startIcon={<FacebookIcon />} style={{ backgroundColor: "rgb(65,105,225)", color: "white", marginRight: "1%" }}>Facebook</Button></Link>
                    <Link to="/home" className="solink"><Button startIcon={<InstagramIcon />} style={{ textDecoration: "none", backgroundColor: "rgb(70,130,180)", color: "white", marginRight: "1%" }}>Intagram</Button></Link>
                    <Link to="/home" className="solink"><Button startIcon={<TwitterIcon />} style={{ textDecoration: "none", backgroundColor: "rgb(30,144,255)", color: "white", marginRight: "1%" }} >Twitter</Button></Link>
                    <Link to="/home" className="solink"><Button startIcon={<PinterestIcon />} style={{ textDecoration: "none", backgroundColor: "rgb(178,34,34)", color: "white" }} >Pinterest</Button></Link>
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

export default News3;