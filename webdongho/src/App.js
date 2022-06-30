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
import './App.css';

function App() {
  return (
    <div className='app'>
      <Title />
      <div className='menu'>
        <Link to="/home" className="link">TRANG CHỦ</Link>
        <Link to="/infor" className="link">GIỚI THIỆU</Link>
        <Link to="/women" className="link">NỮ</Link>
        <Link to="/men" className="link">NAM</Link>
        <Link to="/child" className="link">TRẺ EM</Link>
        <Link to="/accessories" className="link">PHỤ KIỆN KHÁC</Link>
        <Link to="/news" className="link">TIN TỨC</Link>
        <Link to="/contact" className="link">LIÊN HỆ</Link>
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
