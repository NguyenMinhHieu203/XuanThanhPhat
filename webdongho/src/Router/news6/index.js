import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import image1 from "./images/news-1-150x150.jpg";
import image2 from "./images/news-2-150x150.jpg";
import image3 from "./images/news-3-150x150.jpg";
import image4 from "./images/news-4-150x150.jpg";
import image5 from "./images/news-5-150x150.png";
import image6 from "./images/news-6-300x225.jpg";
import image7 from "./images/news-6.jpg";
import image8 from "./images/us06430844-20020813-d00002-1512448941539.webp";
import SearchIcon from '@mui/icons-material/Search';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import Information from "../../component/contact";
import "./style.css";

function News6() {
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
                <div className="snews6">
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
                <Link to="/news" className="datelink">TIN TỨC 22 Th3</Link>
                <p className="con1">Đế giày Converse có thiết kế rất đặc biệt, nhưng lý do thì chắc chắn bạn không tưởng tượng ra</p>
                <img src={image7} alt="news" className="imgN"></img>
                <p className="con2">Nếu chú ý, bạn sẽ thấy đế giày Converse có một lớp nỉ cao su sọc mờ, sần sùi. Nó để làm gì? 
                Chống trơn trượt? Ồ không đâu.</p>
                <p className="con3">Converse – hay “con vớt” theo cách đọc quen thuộc của chúng ta – từ lâu đã là một “must-have item” 
                trong tủ giày của những người đam mê sneaker. Thiết kế cơ bản, khỏe khoắn, thời trang, nhưng không kém phần… dã chiến, 
                đó là những ưu điểm làm nên tên tuổi cho hãng giày nổi tiếng đến từ Hoa Kỳ.</p>
                <p className="con3">Hôm nay chúng ta sẽ bàn đến một chi tiết trong thiết kế của Converse. Nếu đang mang một đôi, bạn 
                hãy thử lật lên và kiểm tra đế giày xem. Bạn sẽ thấy đế giày có 2 phần thiết kế: hoa văn vuông góc cạnh, và kèm theo 
                một lớp nỉ cao su (felt) sọc mờ bao quanh.</p>
                <p className="con3">Phần hoa văn vuông góc cạnh nhằm mục đích tăng cường ma sát. Nhưng tại sao họ không làm đồng bộ, 
                mà phải thêm một lớp nỉ sọc mờ kia? Phải chăng cũng để chống trơn trượt cho người đi?</p>
                <p className="con3">Nếu như bất chợt hỏi câu này, ai cũng sẽ nghĩ đến tác dụng như vậy thôi. Tuy nhiên, sự thật thì 
                lớp nỉ ấy… chẳng có tác dụng gì cho đôi giày cả. Mục đích duy nhất của nó có phần “xôi thịt” hơn, đó là vì TIỀN.</p>
                <p className="con4">Đế giày Converse – ví dụ chân thực nhất cho việc “thiết kế để né thuế”</p>
                <p className="con3">Converse là hãng của Mỹ, nhưng hầu như chẳng có đôi giày nào do Mỹ sản xuất cả. Họ tìm đến một 
                nước thứ 3, kí kết hợp đồng sản xuất rồi nhập khẩu lại. Khi nhập khẩu, họ phải chịu thuế, và đây là khởi nguồn của
                mọi chuyện.</p>
                <p className="con3">Trước tiên, theo như quy định của Mỹ, giày nhập khẩu sẽ phải chịu thuế rất cao, có thể lên tới 
                37,5%. Nhưng nếu là dép – slipper – thì khác, mức thuế giảm chỉ còn 3%.</p>
                <p className="con3">Vấn đề ở đây là để được phân loại vào danh sách slipper, các đôi giày của Converse chỉ cần có 
                một lớp nỉ bên dưới chiếm trên 50% đế giày là được. Với doanh số của Converse, mức thuế 3% rõ ràng đã giúp họ tiết 
                kiệm được một con số khổng lồ.</p>
                <p className="con3">Trang GazEtc là nơi đầu tiên “khai quật” được bí mật này vào năm 2010. Họ đã kiểm tra mã nhập 
                khẩu loại đế giày với chất liệu của Converse (cụ thể là 6,430,844). Và họ tìm thấy một sản phẩm chẳng có một chút 
                gì liên quan đến giày cả.</p>
                <img src={image8} alt="news" className="imgN"></img>
                <p className="con3">Đây đích thị là một đôi dép…</p>
                <p className="con3">Nhưng cũng thật may mắn, vì đế giày lót nỉ của Converse chẳng gây cản trở gì cho trải nghiệm 
                của người dùng. Tuy vậy, cũng có nhiều trường hợp phàn nàn rằng sau một thời gian sử dụng, phần đế mờ bắt đầu có 
                dấu hiệu bong tróc và đòi hỏi sửa chữa.</p>
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

export default News6;