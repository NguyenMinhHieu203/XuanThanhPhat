import React from "react";
import Slide from "D:/XuanThanhPhat/XuanThanhPhat/webdongho/src/component/slideshow";
import Products from "D:/XuanThanhPhat/XuanThanhPhat/webdongho/src/component/tabs";
import SaleProduct from "D:/XuanThanhPhat/XuanThanhPhat/webdongho/src/component/saleproduct";
import Accessories from "D:/XuanThanhPhat/XuanThanhPhat/webdongho/src/component/accessories";
import Shoe from "D:/XuanThanhPhat/XuanThanhPhat/webdongho/src/component/shoeproduct";
import Information from "D:/XuanThanhPhat/XuanThanhPhat/webdongho/src/component/contact";

function Home() {
    return(
        <div className="app-1">
            <Slide />
            <Products />
            <SaleProduct />
            <Accessories />
            <Shoe />
            <Information />
        </div>
    );
}

export default Home;