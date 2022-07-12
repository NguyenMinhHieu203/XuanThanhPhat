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
import News1 from "./Router/news1";
import News2 from "./Router/news2";
import News3 from "./Router/news3";
import News4 from "./Router/news4";
import News5 from "./Router/news5";
import News6 from "./Router/news6";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './App.css';

function App() {
  return (
    <div className='app'>
      <Title />
      <div className='menu'>
        <Link to="/home" className="link">TRANG CHỦ</Link>
        <Link to="/infor" className="link">GIỚI THIỆU</Link>
        <Link to="/women" className="dropdown1">NỮ<KeyboardArrowDownIcon /></Link>
        <Link to="/men" className="dropdown2">NAM<KeyboardArrowDownIcon /></Link>
        <Link to="/child" className="link">TRẺ EM</Link>
        <Link to="/accessories" className="link">PHỤ KIỆN KHÁC</Link>
        <Link to="/news" className="link">TIN TỨC</Link>
        <Link to="/contact" className="link">LIÊN HỆ</Link>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/home" element={<HomePage />}></Route>
          <Route path="/infor" element={<InforPage />}></Route>
          <Route path="/women" element={<WomenPage />}></Route>
          <Route path="/men" element={<MenPage />}></Route>
          <Route path="/child" element={<ChildPage />}></Route>
          <Route path="/accessories" element={<AccessoriesPage />}></Route>
          <Route path="/news" element={<NewsPage />}></Route>
          <Route path="news-1" element={<News1 />}></Route>
          <Route path="news-2" element={<News2 />}></Route>
          <Route path="news-3" element={<News3 />}></Route>
          <Route path="news-4" element={<News4 />}></Route>
          <Route path="news-5" element={<News5 />}></Route>
          <Route path="news-6" element={<News6 />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
