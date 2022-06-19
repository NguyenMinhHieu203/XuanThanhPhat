import React from 'react';
import Todo from 'features/Todo';
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import CongTy from 'features/Home';
import NhanSu from 'features/NhanSu';
import CauHinh from 'features/CauHinh';
import Header from 'components/Header';

import './styles/index.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/home" element={<CongTy />} />
        {/*<Route path="todos/*" element={<Todo />} />*/}
        <Route path="/nhansu/*" element={<NhanSu />} />
        <Route path="/cauhinh/*" element={<CauHinh />}/>
        <Route path="*" element={<Navigate to="home" replace />} />
      </Routes>
    </div>
  );
}

export default App;
