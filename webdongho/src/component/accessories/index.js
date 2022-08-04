import React from "react";
import { useState } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import "./style.css";

function Another() {
    const [backgroundColor, setBackgroundColor] = useState("");
    const handleEnterBtn = () => {
        setBackgroundColor("black");
    } 
    const handleLeaveBtn = () => {
        setBackgroundColor("");
    }
    return(
        <div className="app1">
            <div>
                <div className="banner1">
                    <p className="text1">MONA SNE<StarBorderIcon className="icon"/>KER</p>
                    <div className="banner2">
                        <p className="text2">KHUYẾN MÃI</p>
                        <p className="text3">GIẢM GIÁ 50%</p>
                    </div>
                    <Button style={{color: "white", backgroundColor: `${backgroundColor}`, fontSize: "150%"}} onMouseEnter={handleEnterBtn} onMouseLeave={handleLeaveBtn}><Link to="/accessories" style={{textDecoration: 'none', color: 'white'}}>XEM TẤT CẢ</Link></Button>
                </div>
            </div>
        </div>
    );
}

export default Another;