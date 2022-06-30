/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


function SubNav() {

    //hover
    const [rootNavHover, setRootNavHover] = useState({
        isHover: false,
        navID: 0,
    });
    const handleMouseEnter = (id) => {
        setRootNavHover({
            isHover: true,
            navID: id,
        });
    }

    const handleMouseLeave = (id) => {
        setRootNavHover({
            isHover: false,
            navID: id,
        });
    }

    return (
        <div className="subnav">
            <div className="subnav-container">
                <ul className="subnav-root-items">
                    <li className="subnav-root-item">
                        <a href="#" className="root-nav"
                            onMouseEnter={() => handleMouseEnter(1)}
                            onMouseLeave={() => handleMouseLeave(1)}>Thiết Kế</a>
                        <AnimatePresence>
                            {(rootNavHover.isHover && rootNavHover.navID === 1) && (<>
                                <motion.ul className="item-menus"
                                    onMouseEnter={() => handleMouseEnter(1)}
                                    onMouseLeave={() => handleMouseLeave(1)}
                                >
                                    <ul className="menu">
                                        <li className="submenu-title">
                                            Thiết Kế Web & App
                                        </li>
                                        <li className="submenu-item">
                                            <a href="#">Thiết Kế Web</a>
                                        </li>
                                        <li className="submenu-item">
                                            <a href="#">Thiết Kế App</a>
                                        </li>
                                        <li className="submenu-item">
                                            <a href="#">Thiết Kế UX</a>
                                        </li>
                                        <li className="submenu-item">
                                            <a href="#">Thiết Kế UX</a>
                                        </li>
                                        <li className="submenu-item">
                                            <a href="#">Thiết Kế Icon</a>
                                        </li>
                                    </ul>
                                    <ul className="menu">
                                        <li className="submenu-title">
                                            Thiết Kế Đồ Họa
                                        </li>
                                        <li className="submenu-item">
                                            <a href="#">Vẽ Tranh 2D</a>
                                        </li>
                                        <li className="submenu-item">
                                            <a href="#">Vẽ Tranh 3D</a>
                                        </li>
                                        <li className="submenu-item">
                                            <a href="#">Vẽ Minh Họa</a>
                                        </li>
                                    </ul>
                                    <ul className="menu">
                                        <li className="submenu-title">
                                            Thiết Kế In Ấn
                                        </li>
                                        <li className="submenu-item">
                                            <a href="#">Thiết Kế Áo Phông</a>
                                        </li>
                                        <li className="submenu-item">
                                            <a href="#">Thiết Kế Posters</a>
                                        </li>
                                        <li className="submenu-item">
                                            <a href="#">Thiết Kế Menu</a>
                                        </li>
                                    </ul>
                                    <ul className="menu">
                                        <li className="submenu-title">
                                            Thiết Kế Thời Trang
                                        </li>
                                        <li className="submenu-item">
                                            <a href="#">Vẽ Bản Thảo</a>
                                        </li>
                                        <li className="submenu-item">
                                            <a href="#">Vẽ Chi Tiết Thời Trang</a>
                                        </li>
                                        <li className="submenu-item">
                                            <a href="#">Khác</a>
                                        </li>
                                    </ul>
                                </motion.ul>
                            </>)}
                        </AnimatePresence>

                    </li>
                    <li className="subnav-root-item">
                        <a href="#" className="root-nav"
                            onMouseEnter={() => handleMouseEnter(2)}
                            onMouseLeave={() => handleMouseLeave(2)}>Truyền Thông</a>
                        <AnimatePresence>
                            {(rootNavHover.isHover && rootNavHover.navID === 2) && (<>
                                <motion.ul className="item-menus"
                                    onMouseEnter={() => handleMouseEnter(2)}
                                    onMouseLeave={() => handleMouseLeave(2)}
                                >
                                    <ul className="menu">
                                        <li className="submenu-item">
                                            <a href="#">Truyền Thông Đa Phương Tiện</a>
                                        </li>
                                        <li className="submenu-item">
                                            <a href="#">Quảng Bá Tiếp Thị</a>
                                        </li>
                                        <li className="submenu-item">
                                            <a href="#">Tối Ưu SEO</a>
                                        </li>
                                        <li className="submenu-item">
                                            <a href="#">Phương Pháp Tiếp Thị</a>
                                        </li>
                                        <li className="submenu-item">
                                            <a href="#">Video Truyền Thông</a>
                                        </li>
                                        <li className="submenu-item">
                                            <a href="#">Ý Tưởng Truyền Thông</a>
                                        </li>
                                        <li className="submenu-item">
                                            <a href="#">Quảng Cáo Dịch Vụ</a>
                                        </li>
                                    </ul>
                                    <ul className="menu">
                                        <li className="submenu-item">
                                            <a href="#">Đa Cấp</a>
                                        </li>
                                        <li className="submenu-item">
                                            <a href="#">Phân Tích Thị Trường</a>
                                        </li>
                                        <li className="submenu-item">
                                            <a href="#">Quảng Bá App Mobile</a>
                                        </li>
                                        <li className="submenu-item">
                                            <a href="#">Khác</a>
                                        </li>
                                    </ul>
                                </motion.ul>
                            </>)}

                        </AnimatePresence>
                    </li>
                    <li className="subnav-root-item">
                        <a href="#" className="root-nav"
                            onMouseEnter={() => handleMouseEnter(3)}
                            onMouseLeave={() => handleMouseLeave(3)}>Video & Đồ họa</a>
                        <AnimatePresence>
                            {(rootNavHover.isHover && rootNavHover.navID === 3) && (<>
                                <motion.ul className="item-menus"
                                    onMouseEnter={() => handleMouseEnter(3)}
                                    onMouseLeave={() => handleMouseLeave(3)}
                                >
                                    <ul className="menu">
                                        <li className="submenu-item">
                                            <a href="#">Chỉnh Sửa Video</a>
                                        </li>
                                        <li className="submenu-item">
                                            <a href="#">Làm Video Quảng Cáo</a>
                                        </li>
                                        <li className="submenu-item">
                                            <a href="#">Thiết Kế Nhân Vật</a>
                                        </li>
                                        <li className="submenu-item">
                                            <a href="#">Vẽ Logo</a>
                                        </li>
                                        <li className="submenu-item">
                                            <a href="#">Làm Intro & Outro Video</a>
                                        </li>
                                        <li className="submenu-item">
                                            <a href="#">Chỉnh Sửa Hiệu Ứng</a>
                                        </li>
                                        <li className="submenu-item">
                                            <a href="#">Chỉnh Sửa Hình Ảnh</a>
                                        </li>
                                    </ul>
                                    <ul className="menu">
                                        <li className="submenu-item">
                                            <a href="#">Quay Video PR</a>
                                        </li>
                                        <li className="submenu-item">
                                            <a href="#">Đồ Họa 2D</a>
                                        </li>
                                        <li className="submenu-item">
                                            <a href="#">Đồ Họa 3D</a>
                                        </li>
                                        <li className="submenu-item">
                                            <a href="#">Quay Video Review</a>
                                        </li>
                                        <li className="submenu-item">
                                            <a href="#">Làm Hoạt Hình 2D</a>
                                        </li>
                                        <li className="submenu-item">
                                            <a href="#">Thiết Kế Trailer Game</a>
                                        </li>
                                        <li className="submenu-item">
                                            <a href="#">Khác</a>
                                        </li>
                                    </ul>
                                </motion.ul>
                            </>)}

                        </AnimatePresence>
                    </li>
                    <li className="subnav-root-item">
                        <a href="#" className="root-nav"
                            onMouseEnter={() => handleMouseEnter(4)}
                            onMouseLeave={() => handleMouseLeave(4)}>Lập trình & Công nghệ</a>
                        <AnimatePresence>
                            {(rootNavHover.isHover && rootNavHover.navID === 4) && (<>
                                <motion.ul className="item-menus"
                                    onMouseEnter={() => handleMouseEnter(4)}
                                    onMouseLeave={() => handleMouseLeave(4)}
                                >
                                    <ul className="menu">
                                        <li className="submenu-item">
                                            <a href="#">WordPress</a>
                                        </li>
                                        <li className="submenu-item">
                                            <a href="#">Xây Dựng Website</a>
                                        </li>
                                        <li className="submenu-item">
                                            <a href="#">Lập Trình Game 2D</a>
                                        </li>
                                        <li className="submenu-item">
                                            <a href="#">Lập Trình Game 3D</a>
                                        </li>
                                        <li className="submenu-item">
                                            <a href="#">Lập Trình Web E-commerce</a>
                                        </li>
                                        <li className="submenu-item">
                                            <a href="#">Lập Trình Mobile</a>
                                        </li>
                                        <li className="submenu-item">
                                            <a href="#">AI</a>
                                        </li>
                                    </ul>
                                    <ul className="menu">
                                        <li className="submenu-item">
                                            <a href="#">Chatbots</a>
                                        </li>
                                        <li className="submenu-item">
                                            <a href="#">Đổi Định Dạng File</a>
                                        </li>
                                        <li className="submenu-item">
                                            <a href="#">Tester</a>
                                        </li>
                                        <li className="submenu-item">
                                            <a href="#">Blockchain & Cryptocurrency</a>
                                        </li>
                                        <li className="submenu-item">
                                            <a href="#">Cơ Sở Dữ Liệu</a>
                                        </li>
                                        <li className="submenu-item">
                                            <a href="#">Khoa Học Dữ Liệu</a>
                                        </li>
                                        <li className="submenu-item">
                                            <a href="#">Khác</a>
                                        </li>
                                    </ul>
                                </motion.ul>
                            </>)}

                        </AnimatePresence>
                    </li>
                    <li className="subnav-root-item">
                        <a href="#" className="root-nav"
                            onMouseEnter={() => handleMouseEnter(5)}
                            onMouseLeave={() => handleMouseLeave(5)}>Kinh Doanh</a>
                        <AnimatePresence>
                            {(rootNavHover.isHover && rootNavHover.navID === 5) && (<>
                                <motion.ul className="item-menus"
                                    onMouseEnter={() => handleMouseEnter(5)}
                                    onMouseLeave={() => handleMouseLeave(5)}
                                >
                                    <ul className="menu">
                                        <li className="submenu-item">
                                            <a href="#">Dịch Vụ Thủ Tục Doanh Nghiệp</a>
                                        </li>
                                        <li className="submenu-item">
                                            <a href="#">Hành Chính Kế Toán</a>
                                        </li>
                                        <li className="submenu-item">
                                            <a href="#">Nhân Sự Bảo Hiểm</a>
                                        </li>
                                        <li className="submenu-item">
                                            <a href="#">Phát Tờ Rơi</a>
                                        </li>
                                        <li className="submenu-item">
                                            <a href="#">Tư Vấn Luật</a>
                                        </li>
                                        <li className="submenu-item">
                                            <a href="#">Tư Vấn Quảng Trị</a>
                                        </li>
                                    </ul>
                                    <ul className="menu">
                                        <li className="submenu-item">
                                            <a href="#">Nghiên Cứu Thị Trường</a>
                                        </li>
                                        <li className="submenu-item">
                                            <a href="#">Đào Tạo Nhân Sự</a>
                                        </li>
                                        <li className="submenu-item">
                                            <a href="#">Khác</a>
                                        </li>
                                    </ul>
                                </motion.ul>
                            </>)}

                        </AnimatePresence>
                    </li>
                    <li className="subnav-root-item">
                        <a href="#" className="root-nav"
                            onMouseEnter={() => handleMouseEnter(6)}
                            onMouseLeave={() => handleMouseLeave(6)}>Viết & Dịch thuật</a>
                        <AnimatePresence>
                            {(rootNavHover.isHover && rootNavHover.navID === 6) && (<>
                                <motion.ul className="item-menus"
                                    onMouseEnter={() => handleMouseEnter(6)}
                                    onMouseLeave={() => handleMouseLeave(6)}
                                >
                                    <ul className="menu">
                                        <li className="submenu-item">
                                            <a href="#">Viết Bài Blog</a>
                                        </li>
                                        <li className="submenu-item">
                                            <a href="#">Viết Bài Website</a>
                                        </li>
                                        <li className="submenu-item">
                                            <a href="#">Viết Bài Báo Chí</a>
                                        </li>
                                        <li className="submenu-item">
                                            <a href="#">Viết Bài Quảng Cáo Sản Phẩm</a>
                                        </li>
                                        <li className="submenu-item">
                                            <a href="#">Viết Sách</a>
                                        </li>
                                        <li className="submenu-item">
                                            <a href="#">Sáng Tác Truyện</a>
                                        </li>
                                        <li className="submenu-item">
                                            <a href="#">Nhập Liệu & Đánh Máy</a>
                                        </li>
                                    </ul>
                                    <ul className="menu">
                                        <li className="submenu-item">
                                            <a href="#">Dịch Anh-Việt, Việt-Anh</a>
                                        </li>
                                        <li className="submenu-item">
                                            <a href="#">Dịch Nhật-Việt, Việt-Nhật</a>
                                        </li>
                                        <li className="submenu-item">
                                            <a href="#">Dịch Các Ngôn Ngữ Khác</a>
                                        </li>
                                        <li className="submenu-item">
                                            <a href="#">Dịch Video, Bài Hát</a>
                                        </li>
                                        <li className="submenu-item">
                                            <a href="#">Phiên Dịch</a>
                                        </li>
                                        <li className="submenu-item">
                                            <a href="#">Khác</a>
                                        </li>
                                    </ul>
                                </motion.ul>
                            </>)}

                        </AnimatePresence>
                    </li>
                    <li className="subnav-root-item">
                        <a href="#" className="root-nav"
                            onMouseEnter={() => handleMouseEnter(7)}
                            onMouseLeave={() => handleMouseLeave(7)}>Đời Sống</a>
                        <AnimatePresence>
                            {(rootNavHover.isHover && rootNavHover.navID === 7) && (<>
                                <motion.ul className="item-menus"
                                    onMouseEnter={() => handleMouseEnter(7)}
                                    onMouseLeave={() => handleMouseLeave(7)}
                                >
                                    <ul className="menu">
                                        <li className="submenu-item">
                                            <a href="#">Video Giải Thích</a>
                                        </li>
                                        <li className="submenu-item">
                                            <a href="#">Gaming</a>
                                        </li>
                                        <li className="submenu-item">
                                            <a href="#">Du Lịch</a>
                                        </li>
                                        <li className="submenu-item">
                                            <a href="#">Học Thể Dục</a>
                                        </li>
                                        <li className="submenu-item">
                                            <a href="#">Học Nhảy</a>
                                        </li>
                                    </ul>
                                    <ul className="menu">
                                        <li className="submenu-item">
                                            <a href="#">Dạy Nấu Ăn</a>
                                        </li>
                                        <li className="submenu-item">
                                            <a href="#">Dạy Nói Chuyện</a>
                                        </li>
                                        <li className="submenu-item">
                                            <a href="#">Dạy Nặn Tượng</a>
                                        </li>
                                        <li className="submenu-item">
                                            <a href="#">Khác</a>
                                        </li>
                                    </ul>
                                </motion.ul>
                            </>)}

                        </AnimatePresence>
                    </li>
                    <li className="subnav-root-item">
                        <a href="#" className="root-nav"
                            onMouseEnter={() => handleMouseEnter(8)}
                            onMouseLeave={() => handleMouseLeave(8)}>Phổ Biến</a>
                        <AnimatePresence>
                            {(rootNavHover.isHover && rootNavHover.navID === 8) && (<>
                                <motion.ul className="item-menus"
                                    onMouseEnter={() => handleMouseEnter(8)}
                                    onMouseLeave={() => handleMouseLeave(8)}
                                >
                                    <ul className="menu">
                                        <li className="submenu-item">
                                            <a href="#">Tranh NFT</a>
                                        </li>
                                        <li className="submenu-item">
                                            <a href="#">Dịch Vụ NFT</a>
                                        </li>
                                        <li className="submenu-item">
                                            <a href="#">Phát Triển NFT</a>
                                        </li>
                                        <li className="submenu-item">
                                            <a href="#">Lập Trình Game</a>
                                        </li>
                                        <li className="submenu-item">
                                            <a href="#">Lập Trình Web E-commerce</a>
                                        </li>
                                        <li className="submenu-item">
                                            <a href="#">Tối Ưu SEO</a>
                                        </li>
                                        <li className="submenu-item">
                                            <a href="#">AI</a>
                                        </li>
                                    </ul>
                                    <ul className="menu">
                                        <li className="submenu-item">
                                            <a href="#">Dữ Liệu</a>
                                        </li>
                                        <li className="submenu-item">
                                            <a href="#">Viết Hồ Sơ</a>
                                        </li>
                                        <li className="submenu-item">
                                            <a href="#">Phát Triển Dịch Vụ Discord</a>
                                        </li>
                                        <li className="submenu-item">
                                            <a href="#">Khác</a>
                                        </li>
                                    </ul>
                                </motion.ul>
                            </>)}

                        </AnimatePresence>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SubNav