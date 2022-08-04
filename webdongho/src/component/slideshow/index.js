import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Zoom } from "react-slideshow-image";
import { Button } from '@mui/material';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import image1 from "./slide/slide-1.jpg";
import image2 from "./slide/slide-2.jpg";
import image3 from "./slide/slide-3.jpg";
import title1 from "./productandtitle/title_block_03.png";
import title2 from "./productandtitle/title_block_05.png";
import title3 from "./productandtitle/title_block_07.png";
import product1 from "./productandtitle/product_block_03.jpg";
import product2 from "./productandtitle/product_block_05.jpg";
import product3 from "./productandtitle/product_block_07.jpg";
import "./style.css";
import { withTheme } from 'styled-components';

const images = [image1, image2, image3];

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
            <div className="slide-container">
                <Zoom {...zoomOutProperties}>
                    <div>
                    <img key={0} className="img" src={images[0]} />
                    <div className="content1">
                        <div className="title1">MONA SNE<StarOutlineIcon style={{fontSize: "100%", marginBottom: "2%"}}/>KER</div>
                        <p className="para">Chào mừng bạn đến với ngôi nhà Converse!Tại đây mỗi một dòng chữ, mỗi <br /> chi tiết 
                        và hình ảnh đều là những bằng chứng mang dấu ấn lịch sử Converse <br /> 100 năm, và không ngừng phát triển mạnh</p>
                    </div>
                    </div>
                    <div>
                    <img key={1} className="img" src={images[1]} />
                    <div className="content2">
                        <div className="title1">MONA SNE<StarOutlineIcon style={{fontSize: "100%", marginBottom: "2%"}}/>KER</div>
                        <p className="para">Chào mừng bạn đến với ngôi nhà Converse! <br /> Tại đây mỗi một dòng chữ, mỗi chi tiết 
                        và <br /> hình ảnh đều là những bằng chứng mang <br /> dấu ấn lịch sử Converse 100 năm, và không < br />
                        ngừng phát triển mạnh</p>
                    </div>
                    </div>
                    <div>
                    <img key={3} className="img" src={images[2]} />
                    <div className="content3">
                        <div className="title2">MONA SNE<StarOutlineIcon style={{fontSize: "100%", marginBottom: "2%"}}/>KER</div>
                        <p className="para">Chào mừng bạn đến với ngôi nhà Converse! Tại đây mỗi một dòng <br /> chữ, mỗi chi tiết 
                        và hình ảnh đều là những bằng chứng mang dấu <br /> ấn lịch sử Converse 100 năm, và không ngừng phát triển mạnh</p>
                    </div>
                    </div>
                </Zoom>
            </div>
    );
};

function Slide() {
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
    return (
        <div className="app5">
            <div className="slideShow">
            <Slideshow />
            </div>
            <div className="twoProduct">
                <div className="product" onMouseEnter={handleEnterProduct1} onMouseLeave={handleLeaveProduct1}>
                <img src={title1} alt="title1"></img>
                <img src={product1} alt="imageShoe1"></img>
                <Button style={{backgroundColor: "green", color: "white", visibility: `${button1}`}} className="buttonWatch"><Link to="/men" style={{textDecoration: 'none', color: 'white'}}>Xem sản phẩm</Link></Button>
                </div>
                <div className="product" onMouseEnter={handleEnterProduct2} onMouseLeave={handleLeaveProduct2}>
                <img src={title2} alt="title2"></img>
                <img src={product2} alt="imageShoe2"></img>
                <Button style={{backgroundColor: "green", color: "white", visibility: `${button2}`}} className="buttonWatch"><Link to="/women" style={{textDecoration: 'none', color: 'white'}}>Xem sản phẩm</Link></Button>
                </div>
                <div className="product" onMouseEnter={handleEnterProduct3} onMouseLeave={handleLeaveProduct3}>
                <img src={title3} alt="title3"></img>
                <img src={product3} alt="imageShoe3"></img>
                <Button style={{backgroundColor: "green", color: "white", visibility: `${button3}`}} className="buttonWatch"><Link to="/child" style={{textDecoration: 'none', color: 'white'}}>Xem sản phẩm</Link></Button>
                </div>
            </div>
        </div>
    );
}

export default Slide;