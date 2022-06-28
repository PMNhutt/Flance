import React from 'react';
import '../../styles/Header.scss';

function Header() {
  return (
    <div className="header">
      <div className="header-container">
        <div className="left-navigation">
          <a href="/" className="Logo">Flance</a>
          <a href="/" className="nav-item active">Trang Chủ</a>
          <a href="/" className="nav-item">Tìm Việc</a>
          <a href="/" className="nav-item">Tìm Freelancers</a>
        </div>
        <div className="right-navigation">
          <button className="sign-in-btn">Đăng nhập</button>
          <button className="sign-up-btn">Đăng ký</button>
        </div>
      </div>

    </div>
  )
}

export default Header