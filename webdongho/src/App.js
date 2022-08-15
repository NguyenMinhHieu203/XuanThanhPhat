import * as React from 'react';
import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './Router/Home';
import InforPage from './Router/Introduce';
import MenPage from './Router/Men';
import WomenPage from './Router/Women';
import ChildPage from './Router/Child';
import ChildShoe1 from './Router/ChildSlideShow/product1';
import ChildShoe2 from './Router/ChildSlideShow/product2';
import ChildShoe3 from './Router/ChildSlideShow/product3';
import ChildShoe4 from './Router/ChildSlideShow/product4';
import ChildShoe5 from './Router/ChildSlideShow/product5';
import ChildShoe6 from './Router/ChildSlideShow/product6';
import ProductShoes1 from './Router/ProductShow/shoes1';
import ProductShoes2 from './Router/ProductShow/shoes2';
import ProductShoes3 from './Router/ProductShow/shoes3';
import ProductShoes4 from './Router/ProductShow/shoes4';
import ProductShoes5 from './Router/ProductShow/shoes5';
import AccessoriesPage from './Router/Accessory';
import Accesories1 from './Router/AccessorySlideShow/product1';
import Accesories2 from './Router/AccessorySlideShow/product2';
import Accesories3 from './Router/AccessorySlideShow/product3';
import Accesories4 from './Router/AccessorySlideShow/product4';
import Accesories5 from './Router/AccessorySlideShow/product5';
import Accesories6 from './Router/AccessorySlideShow/product6';
import Accesories7 from './Router/AccessorySlideShow/product7';
import Accesories8 from './Router/AccessorySlideShow/product8';
import NewsPage from './Router/News';
import ContactPage from './Router/Contact';
import Title from "./component/title";
import News1 from "./Router/news1";
import News2 from "./Router/news2";
import News3 from "./Router/news3";
import News4 from "./Router/news4";
import News5 from "./Router/news5";
import News6 from "./Router/news6";
import Class from "./Router/classic";
import Class1 from "./Router/ClassicDetails/product3";
import Class2 from "./Router/ClassicDetails/product4";
import Class3 from "./Router/ClassicDetails/product5";
import Class4 from "./Router/ClassicDetails/product2";
import Class5 from "./Router/ClassicDetails/product7";
import Class6 from "./Router/ClassicDetails/product8";
import Sun from "./Router/sunbaked";
import Sun1 from "./Router/SunbakedDetails/product3";
import Sun2 from "./Router/SunbakedDetails/product4";
import Chuck from "./Router/chuck07s";
import Chuck1 from "./Router/Chuck07sDetails/product1";
import Chuck2 from "./Router/Chuck07sDetails/product2";
import Chuck3 from "./Router/Chuck07sDetails/product3";
import Chuck4 from "./Router/Chuck07sDetails/product4";
import Ones from "./Router/onestar";
import One1 from "./Router/OneStarDetails/product2";
import One2 from "./Router/OneStarDetails/product3";
import One3 from "./Router/OneStarDetails/product4";
import Psyk from "./Router/psy";
import Psy1 from "./Router/PSYDetails/product1";
import Psy2 from "./Router/PSYDetails/product2";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ViewCart from "./Router/ViewCart";
import './App.css';

function App() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  return (
    <div className='app'>
      <div className='contains'>
        <Title />
        <div className='menu'>
          <Link to="/home" className="link">TRANG CHỦ</Link>
          <Link to="/infor" className="link">GIỚI THIỆU</Link>
          <div class="dropdown">
            <Link to="/women" class="dropbtn">NỮ<KeyboardArrowDownIcon /></Link>
            <div class="dropdown-content">
              <Link to="/women/classic">Classic</Link>
              <Link to="/women/sunbaked">Sunbaked</Link>
              <Link to="/women/chuck07s">Chuck 07 s</Link>
              <Link to="/women/onestar">One Star</Link>
              <Link to="/women/psykicks">PSY - Kicks</Link>
            </div>
          </div>
          <div class="dropdown">
            <Link to="/men" class="dropbtn">NAM<KeyboardArrowDownIcon /></Link>
            <div class="dropdown-content">
              <Link to="/women/classic">Classic</Link>
              <Link to="/women/sunbaked">Sunbaked</Link>
              <Link to="/women/chuck07s">Chuck 07 s</Link>
              <Link to="/women/onestar">One Star</Link>
              <Link to="/women/psykicks">PSY - Kicks</Link>
            </div>
          </div>
          <Link to="/child" className="link">TRẺ EM</Link>
          <Link to="/accessories" className="link">PHỤ KIỆN KHÁC</Link>
          <Link to="/news" className="link">TIN TỨC</Link>
          <Link to="/contact" className="link">LIÊN HỆ</Link>
        </div>
        {/* <div className='btn-contains'>
          <KeyboardArrowUpIcon onClick={scrollToTop} style={{fontSize: "300%", color: "gray", borderRadius: "50%", border: "0.1em solid gray"}}/>
        </div> */}
      </div>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/home" element={<HomePage />}></Route>
          <Route path="/infor" element={<InforPage />}></Route>
          <Route path="/women" element={<WomenPage />}></Route>
          <Route path="/women/classic" element={<Class />}></Route>
          <Route path="/Cart/Chuck-Taylor-Classic-3" element={<Class1 />}></Route>
          <Route path="/Cart/Chuck-Taylor-Classic-4" element={<Class2 />}></Route>
          <Route path="/Cart/Chuck-Taylor-Classic-5" element={<Class3 />}></Route>
          <Route path="/Cart/Chuck-Taylor-Classic-2" element={<Class4 />}></Route>
          <Route path="/Cart/Chuck-Taylor-Classic-7" element={<Class5 />}></Route>
          <Route path="/Cart/Chuck-Taylor-Classic-8" element={<Class6 />}></Route>
          <Route path="/women/sunbaked" element={<Sun />}></Route>
          <Route path="/Cart/One-Star-Sunbaked-3" element={<Sun1 />}></Route>
          <Route path="/Cart/One-Star-Sunbaked-4" element={<Sun2 />}></Route>
          <Route path="/women/chuck07s" element={<Chuck />}></Route>
          <Route path="/Cart/Chuck-70-Archive-Prints" element={<Chuck1 />}></Route>
          <Route path="/Cart/Chuck-Taylor-All-Star-70-Full-Gator" element={<Chuck2 />}></Route>
          <Route path="/Cart/Chuck-Taylor-All-Star-70-Pastel-Leather" element={<Chuck3 />}></Route>
          <Route path="/Cart/Chuck-Taylor-All-Star-70-Poplin-Shirt" element={<Chuck4 />}></Route>
          <Route path="/women/onestar" element={<Ones />}></Route>
          <Route path="/Cart/One-Star-Love-The-Progress-6" element={<One1 />}></Route>
          <Route path="/Cart/One-Star-Love-The-Progress-7" element={<One2 />}></Route>
          <Route path="/Cart/One-Star-Love-The-Progress-8" element={<One3 />}></Route>
          <Route path="/women/psykicks" element={<Psyk />}></Route>
          <Route path="/Cart/Chuck-70-Psy-Kicks-Ox-1" element={<Psy1 />}></Route>
          <Route path="/Cart/Chuck-70-Psy-Kicks-Ox-2" element={<Psy2 />}></Route>
          <Route path="/men" element={<MenPage />}></Route>
          <Route path="/child" element={<ChildPage />}></Route>
          <Route path="/Cart/Chuck-Taylor-All-Star-Creatures-Boston-x-London-Transport" element={<ChildShoe1 />}></Route>
          <Route path="/Cart/Chuck-Taylor-All-Star-Simple-Step-Boston-x-London-Transport" element={<ChildShoe2 />}></Route>
          <Route path="/Cart/Chuck-Taylor-All-Star-Simple-Step-Gaming-Camo" element={<ChildShoe3 />}></Route>
          <Route path="/Cart/Chuck-Taylor-All-Star-Simple-Step-Summer-Fundamentals" element={<ChildShoe4 />}></Route>
          <Route path="/Cart/Chuck-Taylor-All-Star-Simple-Step-Summer-Fundamentals-2" element={<ChildShoe5 />}></Route>
          <Route path="/Cart/Chuck-Taylor-All-Star-Simple-Step-Watermelon" element={<ChildShoe6 />}></Route>
          <Route path="/accessories" element={<AccessoriesPage />}></Route>
          <Route path="/Cart/Converse-X-Suicidal-Tendencies-Long" element={<Accesories1 />}></Route>
          <Route path="/Cart/Converse-Metal-Cons-Pull-Over-Hoodie" element={<Accesories2 />}></Route>
          <Route path="/Cart/Converse-Star-Chevron-Jogger" element={<Accesories3 />}></Route>
          <Route path="/Cart/Converse-Collegiate-Text-SS-Tee" element={<Accesories4 />}></Route>
          <Route path="/Cart/CSport-Duffel" element={<Accesories5 />}></Route>
          <Route path="/Cart/Lil-Duffel" element={<Accesories6 />}></Route>
          <Route path="/Cart/Speed-2-Backpack" element={<Accesories7 />}></Route>
          <Route path="/Cart/Poly-Chuck-Plus-1.0" element={<Accesories8 />}></Route>
          <Route path="/news" element={<NewsPage />}></Route>
          <Route path="/Cart/Chuck-Taylor-Classic-1" element={<ProductShoes1/>}></Route>
          <Route path="/Cart/Chuck-Taylor-Classic-6" element={<ProductShoes2/>}></Route>
          <Route path="/Cart/One-Star-Love-The-Progress-5" element={<ProductShoes3 />}></Route>
          <Route path="/Cart/One-Star-Sunbaked-1" element={<ProductShoes4 />}></Route>
          <Route path="/Cart/One-Star-Sunbaked-2" element={<ProductShoes5 />}></Route>
          <Route path="news-1" element={<News1 />}></Route>
          <Route path="news-2" element={<News2 />}></Route>
          <Route path="news-3" element={<News3 />}></Route>
          <Route path="news-4" element={<News4 />}></Route>
          <Route path="news-5" element={<News5 />}></Route>
          <Route path="news-6" element={<News6 />}></Route>
          <Route path="/viewcart" element={<ViewCart />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
