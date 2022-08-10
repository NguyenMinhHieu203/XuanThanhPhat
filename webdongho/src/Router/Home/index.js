import React from "react";
import Slide from "../../component/slideshow";
import Products from "../../component/tabs";
import SaleProduct from "../../component/saleproduct";
import Accessories from "../../component/accessories";
import Shoe from "../../component/shoeproduct";
import Information from "../../component/contact";

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