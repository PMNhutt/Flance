import React, { useEffect, useState } from 'react';
import '../../styles/Header.scss';
import SubNav from './SubNav';
import { motion, AnimatePresence } from 'framer-motion';


function Header() {

  //scroll nav
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });

    return () => {
      window.removeEventListener('scroll', null)
    }
  }, [])

  //show SubNav
  const subnav = {
    visible: {
      opacity: 1, transition: {
        ease: "easeOut",
        duration: 0.2
      }, 
      y: 0,
    },
    hidden: {
      opacity: 0, transition: {
        duration: 0.2,
        ease: "easeOut",
      },
      y: -10,
    }
  }

  return (
    <div className="header">
      <div className="header-container">
        <div className="left-navigation">
          <a href="#" className="Logo">Flance</a>
          <a href="#" className="nav-item active">Trang Chủ</a>
          <a href="/" className="nav-item">Tìm Việc</a>
          <a href="/" className="nav-item">Tìm Freelancers</a>
        </div>
        <div className="right-navigation">
          <button className="sign-in-btn">Đăng nhập</button>
          <button className="sign-up-btn">Đăng ký</button>
        </div>
      </div>

      <AnimatePresence>
        {scroll && (
          <motion.div
            variants={subnav}
            initial="hidden"
            animate="visible"
            exit="hidden">
            <SubNav />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Header
