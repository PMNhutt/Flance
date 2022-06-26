import React from 'react';
import Grid from '@mui/material/Grid';


function Categories() {
  return (
    <div className="categories">
      <div className="title-container">
        <div className="title-bar"></div>
        <p className="title">Danh mục đa dạng</p>
        <div className="handraw-misc1"></div>
      </div>

      <div className="content">
        <Grid container spacing={12} className="grid-container">
          <Grid item sx={3} className="grid-item">
            <div className="graphic-des svg-img"></div>
            <p>Thiết kế đồ họa</p>
          </Grid>
          <Grid item sx={3} className="grid-item">
            <div className="marketing svg-img"></div>
            <p>Marketing</p>
          </Grid>
          <Grid item sx={3} className="grid-item">
            <div className="writing svg-img"></div>
            <p>Viết bài</p>
          </Grid>
          <Grid item sx={3} className="grid-item">  
            <div className="video svg-img"></div>
            <p>Video & Đồ họa</p>
          </Grid>
          <Grid item sx={3} className="grid-item">
            <div className="programming svg-img"></div>
            <p>Kiến trúc phần mềm</p>
          </Grid>
          <Grid item sx={3} className="grid-item">
            <div className="business svg-img"></div>
            <p>Kinh doanh</p>
          </Grid>
          <Grid item sx={3} className="grid-item">
            <div className="logo-des svg-img"></div>
            <p>Thiết kế Logo</p>
          </Grid>
          <Grid item sx={3} className="grid-item">
            <div className="web-des svg-img"></div>
            <p>Thiết kế web</p>
          </Grid>
        </Grid>
      </div>

      <div className="and-more">
        <p>Và nhiều hơn nữa...</p>
        <div className="handraw-underline3"></div>
      </div>
    </div>
  )
}

export default Categories