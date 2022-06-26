import React from 'react';
import '../../styles/Footer.scss';

function Footer() {
  return (
    <div className="footer">
      <div className="content">
        <div className="logo">
          <a href="#" className="Logo">Flance</a>
        </div>
        <div className="about item">
          <h1>Về chúng tôi</h1>
          <ul>
            <li>Điều khoản dịch vụ</li>
            <li>Quy chế hoạt động</li>
            <li>Chính sách bảo mật thông tin</li>
          </ul>
        </div>
        <div className="help item">
          <h1>Hỗ trợ</h1>
          <ul>
            <li>Phản hồi</li>
            <li>Tài khoản</li>
            <li>Tìm mua dịch vụ</li>
          </ul>
        </div>
        <div className="contact item">
          <h1>Liên hệ</h1>
          <ul>
            <li>Lô E2a-7, Đường D1, Đ. D1,
              Long Thạnh Mỹ, Thành Phố Thủ Đức,
              Thành phố Hồ Chí Minh </li>
            <li>(+84) 28 7300 5588</li>
            <li>info@flance.com</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer