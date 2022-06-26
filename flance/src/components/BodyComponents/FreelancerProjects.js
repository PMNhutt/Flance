import React from 'react';
import Grid from '@mui/material/Grid';


function FreelancerProjects() {
    return (
        <div className="freelancer-project">
            <div className="title-container">
                <div className="title-bar"></div>
                <p className="title">Sản phẩm nổi bật của freelancer</p>
                <div className="handraw-hightlight3"></div>
            </div>

            <div className="content">
                <Grid container spacing={3}>
                    <Grid item sx={4} className="grid-item">
                        <div className="project project1">
                            <img src={require('../../img/project1.jpg')} alt=""></img>
                            <div className="project-infos-wrap">
                                <div className="project-avatar ava1"></div>
                                <div className="project-info">
                                    <p className="project-title">Thiết kế 3D</p>
                                    <p className="project-owner">Bởi Hà My</p>
                                </div>
                            </div>

                            <div className="bg-black-trans"></div>
                        </div>
                    </Grid>
                    <Grid item sx={4} className="grid-item">
                        <div className="project project2">
                            <img src={require('../../img/project2.png')} alt=""></img>
                            <div className="project-infos-wrap">
                                <div className="project-avatar ava2"></div>
                                <div className="project-info">
                                    <p className="project-title">Thiết kế Giao Diện Website</p>
                                    <p className="project-owner">Bởi Hoàng Huy</p>
                                </div>
                            </div>

                            <div className="bg-black-trans"></div>
                        </div>
                    </Grid>
                    <Grid item sx={4} className="grid-item">
                        <div className="project project1">
                            <img src={require('../../img/project3.jpg')} alt=""></img>
                            <div className="project-infos-wrap">
                                <div className="project-avatar ava3"></div>
                                <div className="project-info">
                                    <p className="project-title">Tranh Kĩ Thuật Số</p>
                                    <p className="project-owner">Bởi Gia Công</p>
                                </div>
                            </div>

                            <div className="bg-black-trans"></div>
                        </div>
                    </Grid>
                    <Grid item sx={4} className="grid-item">
                        <div className="project project1">
                            <img src={require('../../img/project4.jpg')} alt=""></img>
                            <div className="project-infos-wrap">
                                <div className="project-avatar ava4"></div>
                                <div className="project-info">
                                    <p className="project-title">Thiết kế UI Mobile</p>
                                    <p className="project-owner">Bởi Gia Lâm</p>
                                </div>
                            </div>

                            <div className="bg-black-trans"></div>
                        </div>
                    </Grid>
                    <Grid item sx={4} className="grid-item">
                        <div className="project project1">
                            <img src={require('../../img/project5.jpg')} alt=""></img>
                            <div className="project-infos-wrap">
                                <div className="project-avatar ava5"></div>
                                <div className="project-info">
                                    <p className="project-title">Vẽ Tranh 3D</p>
                                    <p className="project-owner">Bởi Thu Thủy</p>
                                </div>
                            </div>

                            <div className="bg-black-trans"></div>
                        </div>
                    </Grid>
                    <Grid item sx={4} className="grid-item">
                        <div className="project project1">
                            <img src={require('../../img/project6.jpg')} alt=""></img>
                            <div className="project-infos-wrap">
                                <div className="project-avatar ava6"></div>
                                <div className="project-info">
                                    <p className="project-title">Thiết kế Logo</p>
                                    <p className="project-owner">Bởi Thùy Chi</p>
                                </div>
                            </div>

                            <div className="bg-black-trans"></div>
                        </div>
                    </Grid>
                </Grid>
            </div>

            <div className="and-more">
                <p>Và nhiều sản phẩm khác...</p>
                <div className="handraw-underline3"></div>
            </div>
        </div>
    )
}

export default FreelancerProjects