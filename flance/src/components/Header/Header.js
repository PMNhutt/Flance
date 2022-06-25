import React from 'react';
import '../../styles/Header.scss';

function Header() {
  return (
    <div className="header">
        <div className="left-navigation">
          <a href="#" className="Logo">Flance</a>
          <a href="#" className="nav-item active">Trang Chủ</a>
          <a href="#" className="nav-item">Tìm Việc</a>
          <a href="#" className="nav-item">Tìm Freelancers</a>
        </div>
    </div>
  )
}

export default Header