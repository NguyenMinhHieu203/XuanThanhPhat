import React, { useState } from "react";
import img1 from "./shoes/sale-off-1.jpg";
import img2 from "./shoes/sale-off-2.jpg";
import img3 from "./shoes/sale-off-3.jpg";
import img4 from "./shoes/sale-off-4.jpg";
import img5 from "./shoes/sale-off-5.jpg";
import img6 from "./shoes/sale-off-6.jpg";
import img7 from "./shoes/sale-off-7.jpg";
import img8 from "./shoes/sale-off-8.jpg";
import { Button } from "@mui/material";
import "./style.css";

function Shoes() {
    const [button1, setButton1] = useState("hidden");
    const handleEnter1 = () => {
        setButton1("visible");
    }
    const handleLeave1 = () => {
        setButton1("hidden");
    }

    const [button2, setButton2] = useState("hidden");
    const handleEnter2 = () => {
        setButton2("visible");
    }
    const handleLeave2 = () => {
        setButton2("hidden");
    }

    const [button3, setButton3] = useState("hidden");
    const handleEnter3 = () => {
        setButton3("visible");
    }
    const handleLeave3 = () => {
        setButton3("hidden");
    }

    const [button4, setButton4] = useState("hidden");
    const handleEnter4 = () => {
        setButton4("visible");
    }
    const handleLeave4 = () => {
        setButton4("hidden");
    }

    const [button5, setButton5] = useState("hidden");
    const handleEnter5 = () => {
        setButton5("visible");
    }
    const handleLeave5 = () => {
        setButton5("hidden");
    }

    const [button6, setButton6] = useState("hidden");
    const handleEnter6 = () => {
        setButton6("visible");
    }
    const handleLeave6 = () => {
        setButton6("hidden");
    }

    const [button7, setButton7] = useState("hidden");
    const handleEnter7 = () => {
        setButton7("visible");
    }
    const handleLeave7 = () => {
        setButton7("hidden");
    }

    const [button8, setButton8] = useState("hidden");
    const handleEnter8 = () => {
        setButton8("visible");
    }
    const handleLeave8 = () => {
        setButton8("hidden");
    }
    return(
        <div className="app4">
            <div>
                <h4 style={{textAlign: "center", marginTop: "2%", paddingBottom: "1%"}}>PHỤ KIỆN KHÁC</h4>
                <hr />
            </div>
            <div className="partOne">
                <div className="product" onMouseEnter={handleEnter1} onMouseLeave={handleLeave1} style={{border: "none"}}>
                    <img src={img1} alt="product" className="image"></img>
                    <p className="sale">-30%</p>
                    <p>Cons PL 76 Foundational Leather</p>
                    <p style={{color: "red", fontWeight: "bold"}}>100,000đ</p>
                    <Button style={{backgroundColor: "red", color: "white", fontWeight: "bold", visibility: `${button1}`}}>Thêm vào giỏ</Button>
                </div>
                <div className="product" onMouseEnter={handleEnter2} onMouseLeave={handleLeave2} style={{border: "none"}}>
                    <img src={img2} alt="product" className="image"></img>
                    <p className="sale">-50%</p>
                    <p>Cons Auckland Ultra</p>
                    <p style={{color: "red", fontWeight: "bold"}}>100,000đ</p>
                    <Button style={{backgroundColor: "red", color: "white", fontWeight: "bold", visibility: `${button2}`}}>Thêm vào giỏ</Button>
                </div>
                <div className="product" onMouseEnter={handleEnter3} onMouseLeave={handleLeave3} style={{border: "none"}}>
                    <img src={img3} alt="product" className="image"></img>
                    <p className="sale">-47%</p>
                    <p>Break Point Foundational Leather</p>
                    <p style={{color: "red", fontWeight: "bold"}}>100,000đ</p>
                    <Button style={{backgroundColor: "red", color: "white", fontWeight: "bold", visibility: `${button3}`}}>Thêm vào giỏ</Button>
                </div>
                <div className="product" onMouseEnter={handleEnter4} onMouseLeave={handleLeave4} style={{border: "none"}}>
                    <img src={img4} alt="product" className="image"></img>
                    <p className="sale">-35%</p>
                    <p>Chuck Taylor All Star Ox x Nike Flyknit Multi</p>
                    <p style={{color: "red", fontWeight: "bold"}}>100,000đ</p>
                    <Button style={{backgroundColor: "red", color: "white", fontWeight: "bold", visibility: `${button4}`}}>Thêm vào giỏ</Button>
                </div>
                <div className="product" onMouseEnter={handleEnter5} onMouseLeave={handleLeave5} style={{border: "none"}}>
                    <img src={img5} alt="product" className="image"></img>
                    <p className="sale">-26%</p>
                    <p>84 Thunderbolt Breathable Mesh</p>
                    <p style={{color: "red", fontWeight: "bold"}}>100,000đ</p>
                    <Button style={{backgroundColor: "red", color: "white", fontWeight: "bold", visibility: `${button5}`}}>Thêm vào giỏ</Button>
                </div>
                <div className="product" onMouseEnter={handleEnter6} onMouseLeave={handleLeave6} style={{border: "none"}}>
                    <img src={img6} alt="product" className="image"></img>
                    <p className="sale">-30%</p>
                    <p>Chuck Taylor All Star 70 Poplin Shirt</p>
                    <p style={{color: "red", fontWeight: "bold"}}>100,000đ</p>
                    <Button style={{backgroundColor: "red", color: "white", fontWeight: "bold", visibility: `${button6}`}}>Thêm vào giỏ</Button>
                </div>
            </div>
            <div className="partTwo">
                    <div className="product" onMouseEnter={handleEnter7} onMouseLeave={handleLeave7} style={{border: "none"}}>
                        <img src={img7} alt="product" className="image"></img>
                        <p className="sale">-70%</p>
                        <p>One Star Pro OG Update</p>
                        <p style={{color: "red", fontWeight: "bold"}}>100,000đ</p>
                        <Button style={{backgroundColor: "red", color: "white", fontWeight: "bold", visibility: `${button7}`}}>Thêm vào giỏ</Button>
                    </div>
                    <div className="product" onMouseEnter={handleEnter8} onMouseLeave={handleLeave8} style={{border: "none"}}>
                        <img src={img8} alt="product" className="image"></img>
                        <p className="sale">-29%</p>
                        <p>Javk Purcell Pro</p>
                        <p style={{color: "red", fontWeight: "bold"}}>100,000đ</p>
                        <Button style={{backgroundColor: "red", color: "white", fontWeight: "bold", visibility: `${button8}`}}>Thêm vào giỏ</Button>
                    </div>
            </div>
        </div>
    );
}

export default Shoes;