import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { Zoom } from "react-slideshow-image";
import { Link } from "react-router-dom";
import { Button } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import StarIcon from '@mui/icons-material/Star';
import cshoe1 from "./images/kid-1-600x384.jpg";
import cshoe2 from "./images/kid-5-1-600x384.jpg";
import cshoe3 from "./images/kid-5-2-600x384.jpg";
import cshoe4 from "./images/kid-5-3-600x384.jpg";
import cshoe5 from "./images/kid-5-4-600x384.jpg";
import cshoe6 from "./images/kid-2-600x384.jpg";
import cshoe7 from "./images/kid-3-600x384.jpg";
import cshoe8 from "./images/kid-4-600x384.jpg";
import cshoe9 from "./images/kid-6-600x384.jpg";
import cshoe10 from "./images/kid-5-600x384.jpg";
import transport1 from "./images/logo-ghn.jpg";
import transport2 from "./images/logo-ghtk.jpg";
import transport3 from "./images/logo-ninja-van.jpg";
import transport4 from "./images/logo-shipchung.jpg";
import transport5 from "./images/logo-viettle-post.jpg";
import transport6 from "./images/logo-vn-post.jpg";
import banking1 from "./images/logo-acb.jpg";
import banking2 from "./images/logo-techcombank.jpg";
import banking3 from "./images/logo-vib.jpg";
import banking4 from "./images/logo-vcb.jpg";
import banking5 from "./images/logo-paypal.jpg";
import banking6 from "./images/logo-mastercard.jpg";
import Information from "../../../component/contact";
import "./style.css";

const images = [cshoe10, cshoe2, cshoe3, cshoe4, cshoe5];

const slide = [cshoe1, cshoe6, cshoe7, cshoe8, cshoe9];

const zoomOutProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    scale: 0.4,
    arrows: true
};

const Slideshow = () => {
    return (
        <div className="shoeshow">
            <Zoom {...zoomOutProperties}>
                <img key={0} src={images[0]} />
                <img key={1} src={images[3]} />
                <img key={2} src={images[1]} />
                <img key={3} src={images[2]} />
                <img key={4} src={images[4]} />
            </Zoom>
        </div>
    );
};

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
};

function ChildShoe5(props) {
    // Chứa giá trị trong biến để tiện đẩy lên database
    let productName = "Chuck Taylor All Star Simple Step Summer Fundamentals";
    let productPrice = "750,000đ";
    let total = productPrice.slice(0, 3) + productPrice.slice(4, productPrice.length - 1);

    // Đẩy thông tin sản phẩm lên database basket
    const handleBasket = () => {
        if(props.id !== "") {
            const product = {
                id: props.id,
                name: productName,
                price: total,
                amount: number
            }
            axios.post("http://localhost:4020/basket", product);
        }
    }
    // Tự động scroll khi chuyển trang
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);
    
    // Chuyển tab
    const [value, setValue] = React.useState(0);
    const [value3, setValue3] =  React.useState(0);

    // Thay đổi số sao đánh giá
    const [value1, setValue1] = React.useState(2);

    // Set cứng số sao đánh giá
    const value2 = 4;

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    // Tăng giảm số lượng sản phẩm
    const [number, setNumber] = useState(1);
    const handleDecrease = () => {
        setNumber(number - 1);

    }
    const handleIncrease = () => {
        setNumber(number + 1);
    }

    // Hover ẩn hiện button thêm vào giỏ
    const [button1, setButton1] = useState("hidden");

    const handleEnterProduct1 = () => {  
        setButton1("visible");
    }
    const handleLeaveProduct1 = () => {
        setButton1("hidden");
    }
    const [button2, setButton2] = useState("hidden");
    
    const handleEnterProduct2 = () => {
        setButton2("visible");  
    }
    const handleLeaveProduct2 = () => {
        setButton2("hidden");
    }

    const [button3, setButton3] = useState("hidden");
    
    const handleEnterProduct3 = () => {
        setButton3("visible");  
    }
    const handleLeaveProduct3 = () => {
        setButton3("hidden");
    }
    const [button4, setButton4] = useState("hidden");
    
    const handleEnterProduct4 = () => {  
        setButton4("visible");
    }
    const handleLeaveProduct4 = () => {
        setButton4("hidden");
    }
    const [button5, setButton5] = useState("hidden");
    
    const handleEnterProduct5 = () => {
        setButton5("visible");  
    }
    const handleLeaveProduct5 = () => {
        setButton5("hidden");
    }
    return (
        <div className="prcshoe">
            <div className="slideshoe">
                <div className="slide-shoeshow">
                    <Slideshow />
                    <div className="slide-images">
                        <div className="img-row">
                            <img src={cshoe10} className="img-cshoe1"></img>
                            <img src={cshoe4} className="img-cshoe1"></img>
                            <img src={cshoe2} className="img-cshoe1"></img>
                            <img src={cshoe3} className="img-cshoe1"></img>
                        </div>
                        <div className="container-cshoe">
                            <img src={cshoe5} className="img-cshoe2"></img>
                        </div>
                    </div>
                </div>
                <div className="inforcs">
                    <div className="title-link">
                        <Link to="/home" className="link-homes">TRANG CHỦ</Link>
                        <div>/</div>
                        <Link to="/child" className="link-childs">TRẺ EM</Link>
                    </div>
                    <p className="name-product">{productName}</p>
                    <p className="price-product">{productPrice}</p>
                    <div className="three-btn">
                        <div className="btn-amount">
                            <button onClick={handleDecrease} className="btn-decre">-</button>
                            <div className="amount-number">{number}</div>
                            <button onClick={handleIncrease} className="btn-incre">+</button>
                        </div>
                        <Button style={{ color: "white", backgroundColor: "rgb(178,34,34)", fontWeight: "bold" }} onClick={handleBasket}><Link to="/viewcart" style={{ textDecoration: "none", color: "white" }}>THÊM VÀO GIỎ</Link></Button>
                    </div>
                    <div>
                        <div className="payment">
                            <div className="transport">
                                <p className="title-transport">Tính phí ship tự động</p>
                                <div className="icon-container">
                                    <div className="icon-transport1">
                                        <img src={transport1} className="img-transport"></img>
                                        <img src={transport2} className="img-transport"></img>
                                        <img src={transport3} className="img-transport"></img>
                                    </div>
                                    <div className="icon-transport2">
                                        <img src={transport4} className="img-transport"></img>
                                        <img src={transport5} className="img-transport"></img>
                                        <img src={transport6} className="img-transport"></img>
                                    </div>
                                </div>
                            </div>
                            <div className="banking">
                                <p className="title-banking">Thanh toán</p>
                                <div className="icon-container">
                                    <div className="icon-pay1">
                                        <img src={banking1} className="img-banking"></img>
                                        <img src={banking2} className="img-banking"></img>
                                        <img src={banking3} className="img-banking"></img>
                                    </div>
                                    <div className="icon-pay2">
                                        <img src={banking4} className="img-banking"></img>
                                        <img src={banking5} className="img-banking"></img>
                                        <img src={banking6} className="img-banking"></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className="affilicate">"Hãy trở thành Affilicate của chúng tôi để tìm thêm thu nhập thụ động, kiếm tiền online"</p>
                            <Button style={{ color: "white", backgroundColor: "rgb(178,34,34)", fontWeight: "bold" }}>ĐĂNG KÝ AFFILICATE</Button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Box sx={{ width: '85%', margin: '0 6%', border: '0.0625em solid rgb(128,128,128)', marginTop: '4%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="THÔNG TIN BỔ SUNG" {...a11yProps(0)} sx={{ fontWeight: 'bold', color: 'black' }} />
                            <Tab label="ĐÁNH GIÁ SẢN PHẨM" {...a11yProps(1)} sx={{ fontWeight: 'bold', color: 'black' }} />
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                        <div className='add-information'>
                            <p className='text-addition'>SKU</p>
                            <p>1001749500</p>
                        </div>
                        <div className='add-information'>
                            <p className='text-addition'>CHẤT LIỆU</p>
                            <p>Cotton</p>
                        </div>
                        <div className='add-information'>
                            <p className='text-addition'>GIỚI TÍNH</p>
                            <p>Men</p>
                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <div className='product-rating'>
                            <Box
                                sx={{
                                    '& > legend': { mt: 2 },
                                }}
                            >
                                <Typography component="legend" sx={{ fontWeight: 'bold' }}>NHẬP ĐÁNH GIÁ</Typography>
                                <Rating
                                    name="simple-controlled"
                                    value={value1}
                                    onChange={(event, newValue) => {
                                        setValue1(newValue);
                                    }}
                                />
                                <div className='container-rating1'>
                                    <AccountCircleIcon sx={{ fontSize: '300%' }} />
                                    <input placeholder="Nhập đánh giá" className='input-rating' />
                                    <Button variant="contained" style={{ height: "2.4em" }}>GỬI</Button>
                                </div>
                                <div>
                                    <Typography component="legend" sx={{ margin: '1% 0', fontWeight: 'bold' }}>ĐÁNH GIÁ (1)</Typography>
                                    <div className='container-rating2'>
                                        <AccountCircleIcon sx={{ fontSize: '320%', marginRight: '1%' }} />
                                        <div className='container-rating3'>
                                            <p>Phan Văn Hoàng</p>
                                            <Box
                                                sx={{
                                                    width: 200,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                }}
                                            ></Box>
                                            <Rating
                                                name="text-feedback"
                                                value={value2}
                                                readOnly
                                                precision={0.5}
                                                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                            />
                                            <p style={{marginTop: '4%'}}>đẹp</p>
                                        </div>
                                    </div>
                                </div>
                            </Box>
                        </div>
                    </TabPanel>
                </Box>
            </div>
            <p className='product-similar'>SẢN PHẨM TƯƠNG TỰ</p>
            <TabPanel value={value3} index={0}>
                <div className="slide-product">
                    <Zoom {...zoomOutProperties}>
                        <div className="tab">
                            <div className="shoe1" onMouseEnter={handleEnterProduct1} onMouseLeave={handleLeaveProduct1}>
                                <img key={0} style={{ width: "50%" }} src={slide[0]} />
                                <p className="nameShoe1">Chuck Taylor Classic</p>
                                <p className="priceShoe1">800,000 đ</p>
                                <Button style={{ backgroundColor: "red", color: "white", visibility: `${button1}` }}>Thêm vào giỏ</Button>
                            </div>
                            <div className="shoe1" onMouseEnter={handleEnterProduct2} onMouseLeave={handleLeaveProduct2}>
                                <img key={1} style={{ width: "50%" }} src={slide[1]} />
                                <p className="nameShoe1">Chuck Taylor Classic</p>
                                <p className="priceShoe1">900,000 đ</p>
                                <Button style={{ backgroundColor: "red", color: "white", visibility: `${button2}` }}>Thêm vào giỏ</Button>
                            </div>
                            <div className="shoe1" onMouseEnter={handleEnterProduct3} onMouseLeave={handleLeaveProduct3}>
                                <img key={2} style={{ width: "50%" }} src={slide[2]} />
                                <p className="nameShoe1">Chuck Taylor Classic</p>
                                <p className="priceShoe1">850,000 đ</p>
                                <Button style={{ backgroundColor: "red", color: "white", visibility: `${button3}` }}>Thêm vào giỏ</Button>
                            </div>
                            <div className="shoe1" onMouseEnter={handleEnterProduct4} onMouseLeave={handleLeaveProduct4}>
                                <img key={3} style={{ width: "50%" }} src={slide[3]} />
                                <p className="nameShoe1">Chuck Taylor Classic</p>
                                <p className="priceShoe1">750,000 đ</p>
                                <Button style={{ backgroundColor: "red", color: "white", visibility: `${button4}` }}>Thêm vào giỏ</Button>
                            </div>
                            <div className="shoe1" onMouseEnter={handleEnterProduct5} onMouseLeave={handleLeaveProduct5}>
                                <img key={3} style={{ width: "50%" }} src={slide[4]} />
                                <p className="nameShoe1">Chuck Taylor Classic</p>
                                <p className="priceShoe1">900,000 đ</p>
                                <Button style={{ backgroundColor: "red", color: "white", visibility: `${button5}` }}>Thêm vào giỏ</Button>
                            </div>
                        </div>
                        <div className="tab">
                        <div className="shoe1" onMouseEnter={handleEnterProduct1} onMouseLeave={handleLeaveProduct1}>
                                <img key={0} style={{ width: "50%" }} src={slide[0]} />
                                <p className="nameShoe1">Chuck Taylor Classic</p>
                                <p className="priceShoe1">800,000 đ</p>
                                <Button style={{ backgroundColor: "red", color: "white", visibility: `${button1}` }}>Thêm vào giỏ</Button>
                            </div>
                            <div className="shoe1" onMouseEnter={handleEnterProduct2} onMouseLeave={handleLeaveProduct2}>
                                <img key={1} style={{ width: "50%" }} src={slide[1]} />
                                <p className="nameShoe1">Chuck Taylor Classic</p>
                                <p className="priceShoe1">900,000 đ</p>
                                <Button style={{ backgroundColor: "red", color: "white", visibility: `${button2}` }}>Thêm vào giỏ</Button>
                            </div>
                            <div className="shoe1" onMouseEnter={handleEnterProduct3} onMouseLeave={handleLeaveProduct3}>
                                <img key={2} style={{ width: "50%" }} src={slide[2]} />
                                <p className="nameShoe1">Chuck Taylor Classic</p>
                                <p className="priceShoe1">850,000 đ</p>
                                <Button style={{ backgroundColor: "red", color: "white", visibility: `${button3}` }}>Thêm vào giỏ</Button>
                            </div>
                            <div className="shoe1" onMouseEnter={handleEnterProduct4} onMouseLeave={handleLeaveProduct4}>
                                <img key={3} style={{ width: "50%" }} src={slide[3]} />
                                <p className="nameShoe1">Chuck Taylor Classic</p>
                                <p className="priceShoe1">750,000 đ</p>
                                <Button style={{ backgroundColor: "red", color: "white", visibility: `${button4}` }}>Thêm vào giỏ</Button>
                            </div>
                            <div className="shoe1" onMouseEnter={handleEnterProduct5} onMouseLeave={handleLeaveProduct5}>
                                <img key={3} style={{ width: "50%" }} src={slide[4]} />
                                <p className="nameShoe1">Chuck Taylor Classic</p>
                                <p className="priceShoe1">900,000 đ</p>
                                <Button style={{ backgroundColor: "red", color: "white", visibility: `${button5}` }}>Thêm vào giỏ</Button>
                            </div>
                        </div>
                        <div className="tab">
                        <div className="shoe1" onMouseEnter={handleEnterProduct1} onMouseLeave={handleLeaveProduct1}>
                                <img key={0} style={{ width: "50%" }} src={slide[0]} />
                                <p className="nameShoe1">Chuck Taylor Classic</p>
                                <p className="priceShoe1">800,000 đ</p>
                                <Button style={{ backgroundColor: "red", color: "white", visibility: `${button1}` }}>Thêm vào giỏ</Button>
                            </div>
                            <div className="shoe1" onMouseEnter={handleEnterProduct2} onMouseLeave={handleLeaveProduct2}>
                                <img key={1} style={{ width: "50%" }} src={slide[1]} />
                                <p className="nameShoe1">Chuck Taylor Classic</p>
                                <p className="priceShoe1">900,000 đ</p>
                                <Button style={{ backgroundColor: "red", color: "white", visibility: `${button2}` }}>Thêm vào giỏ</Button>
                            </div>
                            <div className="shoe1" onMouseEnter={handleEnterProduct3} onMouseLeave={handleLeaveProduct3}>
                                <img key={2} style={{ width: "50%" }} src={slide[2]} />
                                <p className="nameShoe1">Chuck Taylor Classic</p>
                                <p className="priceShoe1">850,000 đ</p>
                                <Button style={{ backgroundColor: "red", color: "white", visibility: `${button3}` }}>Thêm vào giỏ</Button>
                            </div>
                            <div className="shoe1" onMouseEnter={handleEnterProduct4} onMouseLeave={handleLeaveProduct4}>
                                <img key={3} style={{ width: "50%" }} src={slide[3]} />
                                <p className="nameShoe1">Chuck Taylor Classic</p>
                                <p className="priceShoe1">750,000 đ</p>
                                <Button style={{ backgroundColor: "red", color: "white", visibility: `${button4}` }}>Thêm vào giỏ</Button>
                            </div>
                            <div className="shoe1" onMouseEnter={handleEnterProduct5} onMouseLeave={handleLeaveProduct5}>
                                <img key={3} style={{ width: "50%" }} src={slide[4]} />
                                <p className="nameShoe1">Chuck Taylor Classic</p>
                                <p className="priceShoe1">900,000 đ</p>
                                <Button style={{ backgroundColor: "red", color: "white", visibility: `${button5}` }}>Thêm vào giỏ</Button>
                            </div>
                        </div>
                    </Zoom>
                </div>
            </TabPanel>
            <Information />
        </div>
    );
}

export default ChildShoe5;