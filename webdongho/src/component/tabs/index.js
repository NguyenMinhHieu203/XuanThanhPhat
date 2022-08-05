import * as React from 'react';
import { useState } from "react";
import { Button } from "@mui/material";
import { Zoom } from "react-slideshow-image";
import { Link } from 'react-router-dom';
import product1 from "./products/women-classic-1.jpg";
import product2 from "./products/women-classic-2.jpg";
import product3 from "./products/women-classic-3.jpg";
import product4 from "./products/women-classic-4.jpg";
import product5 from "./products/women-classic-5.jpg";
import product6 from "./products/women-classic-6.jpg";
import product7 from "./products/women-classic-7.jpg";
import product8 from "./products/women-classic-8.jpg";
import product9 from "./products/women-onestar-1.jpg";
import product10 from "./products/women-onestar-2.jpg";
import product11 from "./products/women-onestar-3.jpg";
import product12 from "./products/women-onestar-4.jpg";
import product13 from "./products/women-sunbaked-1.jpg";
import product14 from "./products/women-sunbaked-2.jpg";
import product15 from "./products/women-sunbaked-3.jpg";
import product16 from "./products/women-sunbaked-4.jpg";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import "./style.css";

const products1 = [product1, product2, product3, product4, product5, product6, product7, product8];
const products2 = [product9, product10, product11, product12, product13, product14, product15, product16];

const zoomOutProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div {...other}>
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

function Product() {
    // Set hover cho từng sản phẩm
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

    const [button6, setButton6] = useState("hidden");
    
    const handleEnterProduct6 = () => {
        setButton6("visible");  
    }
    const handleLeaveProduct6 = () => {
        setButton6("hidden");
    }
    const [button7, setButton7] = useState("hidden");
    
    const handleEnterProduct7 = () => {  
        setButton7("visible");
    }
    const handleLeaveProduct7 = () => {
        setButton7("hidden");
    }
    const [button8, setButton8] = useState("hidden");
    
    const handleEnterProduct8 = () => {
        setButton8("visible");  
    }
    const handleLeaveProduct8 = () => {
        setButton8("hidden");
    }

    const [button9, setButton9] = useState("hidden");
    
    const handleEnterProduct9 = () => {
        setButton9("visible");  
    }
    const handleLeaveProduct9 = () => {
        setButton9("hidden");
    }
    const [button10, setButton10] = useState("hidden");
    
    const handleEnterProduct10 = () => {  
        setButton10("visible");
    }
    const handleLeaveProduct10 = () => {
        setButton10("hidden");
    }
    const [button11, setButton11] = useState("hidden");
    
    const handleEnterProduct11 = () => {
        setButton11("visible");  
    }
    const handleLeaveProduct11 = () => {
        setButton11("hidden");
    }

    const [button12, setButton12] = useState("hidden");
    
    const handleEnterProduct12 = () => {
        setButton12("visible");  
    }
    const handleLeaveProduct12 = () => {
        setButton12("hidden");
    }
    const [button13, setButton13] = useState("hidden");
    
    const handleEnterProduct13 = () => {  
        setButton13("visible");
    }
    const handleLeaveProduct13 = () => {
        setButton13("hidden");
    }
    const [button14, setButton14] = useState("hidden");
    
    const handleEnterProduct14 = () => {
        setButton14("visible");  
    }
    const handleLeaveProduct14 = () => {
        setButton14("hidden");
    }

    const [button15, setButton15] = useState("hidden");
    
    const handleEnterProduct15 = () => {
        setButton15("visible");  
    }
    const handleLeaveProduct15 = () => {
        setButton15("hidden");
    }
    const [button16, setButton16] = useState("hidden");
    
    const handleEnterProduct16 = () => {  
        setButton16("visible");
    }
    const handleLeaveProduct16 = () => {
        setButton16("hidden");
    }
    const [button17, setButton17] = useState("hidden");
    
    const handleEnterProduct17 = () => {
        setButton17("visible");  
    }
    const handleLeaveProduct17 = () => {
        setButton17("hidden");
    }

    const [button18, setButton18] = useState("hidden");
    
    const handleEnterProduct18 = () => {
        setButton18("visible");  
    }
    const handleLeaveProduct18 = () => {
        setButton18("hidden");
    }
    const [button19, setButton19] = useState("hidden");
    
    const handleEnterProduct19 = () => {  
        setButton19("visible");
    }
    const handleLeaveProduct19 = () => {
        setButton19("hidden");
    }
    const [button20, setButton20] = useState("hidden");
    
    const handleEnterProduct20 = () => {
        setButton20("visible");  
    }
    const handleLeaveProduct20 = () => {
        setButton20("hidden");
    }

    const [button21, setButton21] = useState("hidden");
    
    const handleEnterProduct21 = () => {
        setButton21("visible");  
    }
    const handleLeaveProduct21 = () => {
        setButton21("hidden");
    }
    const [button22, setButton22] = useState("hidden");
    
    const handleEnterProduct22 = () => {  
        setButton22("visible");
    }
    const handleLeaveProduct22 = () => {
        setButton22("hidden");
    }
    const [button23, setButton23] = useState("hidden");
    
    const handleEnterProduct23 = () => {
        setButton23("visible");  
    }
    const handleLeaveProduct23 = () => {
        setButton23("hidden");
    }

    const [button24, setButton24] = useState("hidden");
    
    const handleEnterProduct24 = () => {
        setButton24("visible");  
    }
    const handleLeaveProduct24 = () => {
        setButton24("hidden");
    }


    // Set tabs
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className="app6">
            <Box sx={{ width: '100%', bgcolor: 'background.paper', borderBottom: 1, borderColor: 'divider' }} style={{marginTop: "5%"}}>
                <Tabs value={value} onChange={handleChange} centered>
                    <Tab label="SẢN PHẨM MỚI" />
                    <Tab label="SẢN PHẨM BÁN CHẠY" />
                    <Tab label="SẢN PHẨM PHỔ BIẾN" />
                </Tabs>
            </Box>    
            <TabPanel value={value} index={0}>
                <div className="slide-product">
                    <Zoom {...zoomOutProperties}>
                        <div className="tab">
                        <div className="shoe1" onMouseEnter={handleEnterProduct1} onMouseLeave={handleLeaveProduct1}>
                            <img key={0} style={{ width: "50%" }} src={products1[0]} />
                            <p className="nameShoe1">Chuck Taylor Classic</p>
                            <p className="priceShoe1">1,250,000đ</p>
                            <Button style={{backgroundColor: "red", color: "white", visibility: `${button1}`}}>
                                <Link to="/Cart/Chuck-Taylor-Classic-1" style={{textDecoration: 'none', color: 'white'}}>Thêm vào giỏ</Link>
                            </Button>
                        </div>
                        <div className="shoe1" onMouseEnter={handleEnterProduct2} onMouseLeave={handleLeaveProduct2}>
                            <img key={1} style={{ width: "50%" }} src={products1[1]} />
                            <p className="nameShoe1">Chuck Taylor Classic</p>
                            <p className="priceShoe1">1,250,000đ</p>
                            <Button style={{backgroundColor: "red", color: "white", visibility: `${button2}`}}>
                                <Link to="/Cart/Chuck-Taylor-Classic-6" style={{textDecoration: 'none', color: 'white'}}>Thêm vào giỏ</Link>
                            </Button>
                        </div>
                        <div className="shoe1" onMouseEnter={handleEnterProduct3} onMouseLeave={handleLeaveProduct3}>
                            <img key={2} style={{ width: "50%" }} src={products1[2]} />
                            <p className="nameShoe1">Chuck Taylor Classic</p>
                            <p className="priceShoe1">1,250,000đ</p>
                            <Button style={{backgroundColor: "red", color: "white", visibility: `${button3}`}}>
                                <Link to="/Cart/Chuck-Taylor-Classic-3" style={{textDecoration: 'none', color: 'white'}}>Thêm vào giỏ</Link>
                            </Button>
                        </div>
                        <div className="shoe1" onMouseEnter={handleEnterProduct4} onMouseLeave={handleLeaveProduct4}>
                            <img key={3} style={{ width: "50%" }} src={products1[3]} />
                            <p className="nameShoe1">Chuck Taylor Classic</p>
                            <p className="priceShoe1">1,250,000đ</p>
                            <Button style={{backgroundColor: "red", color: "white", visibility: `${button4}`}}>
                                <Link to="/Cart/Chuck-Taylor-Classic-4" style={{textDecoration: 'none', color: 'white'}}>Thêm vào giỏ</Link>
                            </Button>
                        </div>
                        </div>
                        <div className="tab">
                        <div className="shoe1" onMouseEnter={handleEnterProduct5} onMouseLeave={handleLeaveProduct5}>
                            <img key={4} style={{ width: "50%" }} src={products1[4]} />
                            <p className="nameShoe1">Chuck Taylor Classic</p>
                            <p className="priceShoe1">1,250,000đ</p>
                            <Button style={{backgroundColor: "red", color: "white", visibility: `${button5}`}}>
                                <Link to="/Cart/Chuck-Taylor-Classic-5" style={{textDecoration: 'none', color: 'white'}}>Thêm vào giỏ</Link>
                            </Button>
                        </div>
                        <div className="shoe1" onMouseEnter={handleEnterProduct6} onMouseLeave={handleLeaveProduct6}>
                            <img key={5} style={{ width: "50%" }} src={products1[5]} />
                            <p className="nameShoe1">Chuck Taylor Classic</p>
                            <p className="priceShoe1">1,250,000đ</p>
                            <Button style={{backgroundColor: "red", color: "white", visibility: `${button6}`}}>
                                <Link to="/Cart/Chuck-Taylor-Classic-2" style={{textDecoration: 'none', color: 'white'}}>Thêm vào giỏ</Link>
                            </Button>
                        </div>
                        <div className="shoe1" onMouseEnter={handleEnterProduct7} onMouseLeave={handleLeaveProduct7}>
                            <img key={6} style={{ width: "50%" }} src={products1[6]} />
                            <p className="nameShoe1">Chuck Taylor Classic</p>
                            <p className="priceShoe1">1,250,000đ</p>
                            <Button style={{backgroundColor: "red", color: "white", visibility: `${button7}`}}>
                                <Link to="/Cart/Chuck-Taylor-Classic-7" style={{textDecoration: 'none', color: 'white'}}>Thêm vào giỏ</Link>
                            </Button>
                        </div>
                        <div className="shoe1" onMouseEnter={handleEnterProduct8} onMouseLeave={handleLeaveProduct8}>
                            <img key={7} style={{ width: "50%" }} src={products1[7]} />
                            <p className="nameShoe1">Chuck Taylor Classic</p>
                            <p className="priceShoe1">1,250,000đ</p>
                            <Button style={{backgroundColor: "red", color: "white", visibility: `${button8}`}}>
                                <Link to="/Cart/Chuck-Taylor-Classic-8" style={{textDecoration: 'none', color: 'white'}}>Thêm vào giỏ</Link>
                            </Button>
                        </div>
                        </div>
                    </Zoom>
                </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <div className="slide-product">
                    <Zoom {...zoomOutProperties}>
                        <div className="tab">
                        <div className="shoe1" onMouseEnter={handleEnterProduct9} onMouseLeave={handleLeaveProduct9}>
                            <img key={0} style={{ width: "50%" }} src={products2[0]} />
                            <p className="nameShoe1">Chuck Taylor Classic</p>
                            <p className="priceShoe1">1,250,000đ</p>
                            <Button style={{backgroundColor: "red", color: "white", visibility: `${button9}`}}>
                                <Link to="/Cart/One-Star-Love-The-Progress-5" style={{textDecoration: 'none', color: 'white'}}>Thêm vào giỏ</Link>
                            </Button>
                        </div>
                        <div className="shoe1" onMouseEnter={handleEnterProduct10} onMouseLeave={handleLeaveProduct10}>
                            <img key={1} style={{ width: "50%" }} src={products2[1]} />
                            <p className="nameShoe1">Chuck Taylor Classic</p>
                            <p className="priceShoe1">1,250,000đ</p>
                            <Button style={{backgroundColor: "red", color: "white", visibility: `${button10}`}}>
                                <Link to="/Cart/One-Star-Love-The-Progress-6" style={{textDecoration: 'none', color: 'white'}}>Thêm vào giỏ</Link>
                            </Button>
                        </div>
                        <div className="shoe1" onMouseEnter={handleEnterProduct11} onMouseLeave={handleLeaveProduct11}>
                            <img key={2} style={{ width: "50%" }} src={products2[2]} />
                            <p className="nameShoe1">Chuck Taylor Classic</p>
                            <p className="priceShoe1">1,250,000đ</p>
                            <Button style={{backgroundColor: "red", color: "white", visibility: `${button11}`}}>
                                <Link to="/Cart/One-Star-Love-The-Progress-7" style={{textDecoration: 'none', color: 'white'}}>Thêm vào giỏ</Link>
                            </Button>
                        </div>
                        <div className="shoe1" onMouseEnter={handleEnterProduct12} onMouseLeave={handleLeaveProduct12}>
                            <img key={3} style={{ width: "50%" }} src={products2[3]} />
                            <p className="nameShoe1">Chuck Taylor Classic</p>
                            <p className="priceShoe1">1,250,000đ</p>
                            <Button style={{backgroundColor: "red", color: "white", visibility: `${button12}`}}>
                                <Link to="/Cart/One-Star-Love-The-Progress-8" style={{textDecoration: 'none', color: 'white'}}>Thêm vào giỏ</Link>
                            </Button>
                        </div>
                        </div>
                        <div className="tab">
                        <div className="shoe1" onMouseEnter={handleEnterProduct13} onMouseLeave={handleLeaveProduct13}>
                            <img key={4} style={{ width: "50%" }} src={products2[4]} />
                            <p className="nameShoe1">Chuck Taylor Classic</p>
                            <p className="priceShoe1">1,250,000đ</p>
                            <Button style={{backgroundColor: "red", color: "white", visibility: `${button13}`}}>
                                <Link to="/Cart/One-Star-Sunbaked-1" style={{textDecoration: 'none', color: 'white'}}>Thêm vào giỏ</Link>
                            </Button>
                        </div>
                        <div className="shoe1" onMouseEnter={handleEnterProduct14} onMouseLeave={handleLeaveProduct14}>
                            <img key={5} style={{ width: "50%" }} src={products2[5]} />
                            <p className="nameShoe1">Chuck Taylor Classic</p>
                            <p className="priceShoe1">1,250,000đ</p>
                            <Button style={{backgroundColor: "red", color: "white", visibility: `${button14}`}}>
                                <Link to="/Cart/One-Star-Sunbaked-2" style={{textDecoration: 'none', color: 'white'}}>Thêm vào giỏ</Link>
                            </Button>
                        </div>
                        <div className="shoe1" onMouseEnter={handleEnterProduct15} onMouseLeave={handleLeaveProduct15}>
                            <img key={6} style={{ width: "50%" }} src={products2[6]} />
                            <p className="nameShoe1">Chuck Taylor Classic</p>
                            <p className="priceShoe1">1,250,000đ</p>
                            <Button style={{backgroundColor: "red", color: "white", visibility: `${button15}`}}>
                            <Link to="/Cart/One-Star-Sunbaked-3" style={{textDecoration: 'none', color: 'white'}}>Thêm vào giỏ</Link>
                            </Button>
                        </div>
                        <div className="shoe1" onMouseEnter={handleEnterProduct16} onMouseLeave={handleLeaveProduct16}>
                            <img key={7} style={{ width: "50%" }} src={products2[7]} />
                            <p className="nameShoe1">Chuck Taylor Classic</p>
                            <p className="priceShoe1">1,250,000đ</p>
                            <Button style={{backgroundColor: "red", color: "white", visibility: `${button16}`}}>
                                <Link to="/Cart/One-Star-Sunbaked-4" style={{textDecoration: 'none', color: 'white'}}>Thêm vào giỏ</Link>
                            </Button>
                        </div>
                        </div>
                    </Zoom>
                </div>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <div className="slide-product">
                    <Zoom {...zoomOutProperties}>
                        <div className="tab">
                        <div className="shoe1" onMouseEnter={handleEnterProduct17} onMouseLeave={handleLeaveProduct17}>
                            <img key={0} style={{ width: "50%" }} src={products1[0]} />
                            <p className="nameShoe1">Chuck Taylor Classic</p>
                            <p className="priceShoe1">1,250,000đ</p>
                            <Button style={{backgroundColor: "red", color: "white", visibility: `${button17}`}}>Thêm vào giỏ</Button>
                        </div>
                        <div className="shoe1" onMouseEnter={handleEnterProduct18} onMouseLeave={handleLeaveProduct18}>
                            <img key={1} style={{ width: "50%" }} src={products1[1]} />
                            <p className="nameShoe1">Chuck Taylor Classic</p>
                            <p className="priceShoe1">1,250,000đ</p>
                            <Button style={{backgroundColor: "red", color: "white", visibility: `${button18}`}}>Thêm vào giỏ</Button>
                        </div>
                        <div className="shoe1" onMouseEnter={handleEnterProduct19} onMouseLeave={handleLeaveProduct19}>
                            <img key={2} style={{ width: "50%" }} src={products1[2]} />
                            <p className="nameShoe1">Chuck Taylor Classic</p>
                            <p className="priceShoe1">1,250,000đ</p>
                            <Button style={{backgroundColor: "red", color: "white", visibility: `${button19}`}}>Thêm vào giỏ</Button>
                        </div>
                        <div className="shoe1" onMouseEnter={handleEnterProduct20} onMouseLeave={handleLeaveProduct20}>
                            <img key={3} style={{ width: "50%" }} src={products1[3]} />
                            <p className="nameShoe1">Chuck Taylor Classic</p>
                            <p className="priceShoe1">1,250,000đ</p>
                            <Button style={{backgroundColor: "red", color: "white", visibility: `${button20}`}}>Thêm vào giỏ</Button>
                        </div>
                        </div>
                        <div className="tab">
                        <div className="shoe1" onMouseEnter={handleEnterProduct21} onMouseLeave={handleLeaveProduct21}>
                            <img key={4} style={{ width: "50%" }} src={products1[4]} />
                            <p className="nameShoe1">Chuck Taylor Classic</p>
                            <p className="priceShoe1">1,250,000đ</p>
                            <Button style={{backgroundColor: "red", color: "white", visibility: `${button21}`}}>Thêm vào giỏ</Button>
                        </div>
                        <div className="shoe1" onMouseEnter={handleEnterProduct22} onMouseLeave={handleLeaveProduct22}>
                            <img key={5} style={{ width: "50%" }} src={products1[5]} />
                            <p className="nameShoe1">Chuck Taylor Classic</p>
                            <p className="priceShoe1">1,250,000đ</p>
                            <Button style={{backgroundColor: "red", color: "white", visibility: `${button22}`}}>Thêm vào giỏ</Button>
                        </div>
                        <div className="shoe1" onMouseEnter={handleEnterProduct23} onMouseLeave={handleLeaveProduct23}>
                            <img key={6} style={{ width: "50%" }} src={products1[6]} />
                            <p className="nameShoe1">Chuck Taylor Classic</p>
                            <p className="priceShoe1">1,250,000đ</p>
                            <Button style={{backgroundColor: "red", color: "white", visibility: `${button23}`}}>Thêm vào giỏ</Button>
                        </div>
                        <div className="shoe1" onMouseEnter={handleEnterProduct24} onMouseLeave={handleLeaveProduct24}>
                            <img key={7} style={{ width: "50%" }} src={products1[7]} />
                            <p className="nameShoe1">Chuck Taylor Classic</p>
                            <p className="priceShoe1">1,250,000đ</p>
                            <Button style={{backgroundColor: "red", color: "white", visibility: `${button24}`}}>Thêm vào giỏ</Button>
                        </div>
                        </div>
                    </Zoom>
                </div>
            </TabPanel>
        </div>
    );
}

export default Product;