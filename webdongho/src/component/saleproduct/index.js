import React, { useState } from "react";
import { Button } from "@mui/material";
import image1 from "./sale/T-shirt-300x225.jpg";
import image2 from "./sale/T-shirt-1-300x225.jpg";
import image3 from "./sale/T-shirt-2-300x225.jpg";
import image4 from "./sale/jogger-300x225.jpg";
import image5 from "./sale/balo-1-300x225.jpg";
import image6 from "./sale/balo-2-300x225.jpg";
import image7 from "./sale/balo-3-300x225.jpg";
import image9 from "./sale/balo-4-300x225.jpg";
import "./style.css";

function Sale() {
    const [color, setColor] = useState("gray");
    const [backgroundColor, setBackgroundColor] = useState("white");
    const handleEnterBtn = () => {
        setColor("white");
        setBackgroundColor("red");
    }
    const handleLeaveBtn = () => {
        setColor("gray");
        setBackgroundColor("white");
    }
    // Set hover cho button thêm vào giỏ
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
    return(
        <div className="app3">
            <div>
                <h4 style={{textAlign: "center"}}>SẢN PHẨM GIẢM GIÁ</h4>
                <hr />
            </div>
            <div className="partOne">
                <div className="product" onMouseEnter={handleEnterProduct1} onMouseLeave={handleLeaveProduct1}>
                    <img src={image2} alt="product"></img>
                    <p>Converse X Suicidal Tendencies Long</p>
                    <p style={{color: "red"}}>100,000đ</p>
                    <Button style={{backgroundColor: "red", color: "white", fontWeight: "bold", visibility: `${button1}`}}>Thêm vào giỏ</Button>
                </div>
                <div className="product" onMouseEnter={handleEnterProduct2} onMouseLeave={handleLeaveProduct2}>
                    <img src={image3} alt="product"></img>
                    <p>Converse Metal Cons Pull Over Hoodie</p>
                    <p style={{color: "red"}}>100,000đ</p>
                    <Button style={{backgroundColor: "red", color: "white", fontWeight: "bold", visibility: `${button2}`}}>Thêm vào giỏ</Button>
                </div>
                <div className="product" onMouseEnter={handleEnterProduct3} onMouseLeave={handleLeaveProduct3}>
                    <img src={image4} alt="product"></img>
                    <p>Converse Star Chevron Jogger</p>
                    <p style={{color: "red"}}>100,000đ</p>
                    <Button style={{backgroundColor: "red", color: "white", fontWeight: "bold", visibility: `${button3}`}}>Thêm vào giỏ</Button>
                </div>
                <div className="product" onMouseEnter={handleEnterProduct4} onMouseLeave={handleLeaveProduct4}>
                    <img src={image1} alt="product"></img>
                    <p>Converse Collegiate Text SS Tee</p>
                    <p style={{color: "red"}}>100,000đ</p>
                    <Button style={{backgroundColor: "red", color: "white", fontWeight: "bold", visibility: `${button4}`}}>Thêm vào giỏ</Button>
                </div>
                <div className="product" onMouseEnter={handleEnterProduct5} onMouseLeave={handleLeaveProduct5}>
                    <img src={image5} alt="product"></img>
                    <p>CSport Duffel</p>
                    <p style={{color: "red"}}>100,000đ</p>
                    <Button style={{backgroundColor: "red", color: "white", fontWeight: "bold", visibility: `${button5}`}}>Thêm vào giỏ</Button>
                </div>
                <div className="product" onMouseEnter={handleEnterProduct6} onMouseLeave={handleLeaveProduct6}>
                    <img src={image6} alt="product"></img>
                    <p>Lil Duffel</p>
                    <p style={{color: "red"}}>100,000đ</p>
                    <Button style={{backgroundColor: "red", color: "white", fontWeight: "bold", visibility: `${button6}`}}>Thêm vào giỏ</Button>
                </div>
            </div>
            <div className="partTwo">
                <div className="product" onMouseEnter={handleEnterProduct7} onMouseLeave={handleLeaveProduct7}>
                    <img src={image7} alt="product"></img>
                    <p>Speed 2 Backpack</p>
                    <p style={{color: "red"}}>100,000đ</p>
                    <Button style={{backgroundColor: "red", color: "white", fontWeight: "bold", visibility: `${button7}`}}>Thêm vào giỏ</Button>
                </div>
                <div className="product" onMouseEnter={handleEnterProduct8} onMouseLeave={handleLeaveProduct8}>
                    <img src={image9} alt="product"></img>
                    <p>Poly Chuck Plus 1.0</p>
                    <p style={{color: "red"}}>100,000đ</p>
                    <Button style={{backgroundColor: "red", color: "white", fontWeight: "bold", visibility: `${button8}`}}>Thêm vào giỏ</Button>
                </div>
            </div>
            <Button style={{backgroundColor: `${backgroundColor}`, color: `${color}`, fontWeight: "bold", display: "flex", marginLeft: "50%", marginBottom: "1%", marginTop: "1%"}} onMouseEnter={handleEnterBtn} onMouseLeave={handleLeaveBtn}>XEM TẤT CẢ</Button>
        </div>
    );
}

export default Sale;