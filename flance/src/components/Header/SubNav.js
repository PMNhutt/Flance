import React, { useEffect, useState } from 'react'

function SubNav() {

    // //scroll nav
    // const [scroll, setScroll] = useState(false);
    // useEffect(() => {
    //     window.addEventListener('scroll', () => {
    //         if (window.scrollY > 50) {
    //             setScroll(true);
    //         } else {
    //             setScroll(false);
    //         }
    //     });

    //     return () => {
    //         window.removeEventListener('scroll', null)
    //     }
    // }, [])

    return (
        <div className="subnav">
            <div className="subnav-container">
                <ul className="subnav-root-items">
                    <li className="subnav-root-item">
                        <a href="#">Thiết Kế</a>
                    </li>
                    <li className="subnav-root-item">
                        <a href="#">Digital Marketing</a>
                    </li>
                    <li className="subnav-root-item">
                        <a href="#">Video & Đồ họa</a>
                    </li>
                    <li className="subnav-root-item">
                        <a href="#">Lập trình & Công nghệ</a>
                    </li>
                    <li className="subnav-root-item">
                        <a href="#">Kinh Doanh</a>
                    </li>
                    <li className="subnav-root-item">
                        <a href="#">Viết & Dịch thuật</a>
                    </li>
                    <li className="subnav-root-item">
                        <a href="#">Đời Sống</a>
                    </li>
                    <li className="subnav-root-item">
                        <a href="#">Phổ Biến</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SubNav