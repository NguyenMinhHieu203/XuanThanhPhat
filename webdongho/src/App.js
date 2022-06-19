import * as React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './Router/Home';
import InforPage from './Router/Introduce';
import MenPage from './Router/Men';
import WomenPage from './Router/Women';
import ChildPage from './Router/Child';
import AccessoriesPage from './Router/Accessory';
import NewsPage from './Router/News';
import ContactPage from './Router/Contact';
import Title from "./component/title";
import Slide from "./component/slideshow";
import Products from "./component/tabs";
import SaleProduct from "./component/saleproduct";
import Accessories from "./component/accessories";
import './App.css';

function App() {
  return (
    <div className='app'>
      <Title />
      <div className='menu'>
        <Link to="/home" style={{textDecoration: "none", color: "black", fontWeight: "bold", fontSize: "120%"}}>TRANG CHỦ</Link>
        <Link to="/infor" style={{textDecoration: "none", color: "black", fontWeight: "bold", fontSize: "120%"}}>GIỚI THIỆU</Link>
        <Link to="/women" style={{textDecoration: "none", color: "black", fontWeight: "bold", fontSize: "120%"}}>NỮ</Link>
        <Link to="/men" style={{textDecoration: "none", color: "black", fontWeight: "bold", fontSize: "120%"}}>NAM</Link>
        <Link to="/child" style={{textDecoration: "none", color: "black", fontWeight: "bold", fontSize: "120%"}}>TRẺ EM</Link>
        <Link to="/accessories" style={{textDecoration: "none", color: "black", fontWeight: "bold", fontSize: "120%"}}>PHỤ KIỆN KHÁC</Link>
        <Link to="/news" style={{textDecoration: "none", color: "black", fontWeight: "bold", fontSize: "120%"}}>TIN TỨC</Link>
        <Link to="/contact" style={{textDecoration: "none", color: "black", fontWeight: "bold", fontSize: "120%"}}>LIÊN HỆ</Link>
      </div>
      <div>
        <Slide />
        <Products />
        <SaleProduct />
        <Accessories />
      </div>
      <div>
        <Routes>
          <Route path="/home" element={<HomePage />}></Route>
          <Route path="/infor" element={<InforPage />}></Route>
          <Route path="/women" element={<WomenPage />}></Route>
          <Route path="/men" element={<MenPage />}></Route>
          <Route path="/child" element={<ChildPage />}></Route>
          <Route path="/accessories" element={<AccessoriesPage />}></Route>
          <Route path="/news" element={<NewsPage />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
