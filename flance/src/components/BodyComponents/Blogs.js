import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


function Blogs() {
    return (
        <div className="blog">
            <div className="title-container">
                <div className="title-bar"></div>
                <p className="title">Không gian để chia sẻ!</p>
                <div className="handraw-hightlight3"></div>
            </div>

            <div className="content">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={40}
                    slidesPerGroup={3}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide className=" item">

                        <div className="blog-img item1">
                        </div>
                        <div className="blog-infos">
                            <div className="blog-time"><span>Chia sẻ</span> |  Jun 29</div>
                            <p className="title">Làm sao để có được trải nghiệm công việc tốt?</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=" item">
                        <div className="blog-img item2">
                        </div>
                        <div className="blog-infos">
                            <div className="blog-time"><span>Chia sẻ</span> |  Jun 29</div>
                            <p className="title">Làm sao để có được trải nghiệm công việc tốt?</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=" item">
                        <div className="blog-img item3">
                        </div>
                        <div className="blog-infos">
                            <div className="blog-time"><span>Chia sẻ</span> |  Jun 29</div>
                            <p className="title">Làm sao để có được trải nghiệm công việc tốt?</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=" item">
                        <div className="blog-img item4">
                        </div>
                        <div className="blog-infos">
                            <div className="blog-time"><span>Chia sẻ</span> |  Jun 29</div>
                            <p className="title">Làm sao để có được trải nghiệm công việc tốt?</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=" item">
                        <div className="blog-img item5">
                        </div>
                        <div className="blog-infos">
                            <div className="blog-time"><span>Chia sẻ</span> |  Jun 29</div>
                            <p className="title">Làm sao để có được trải nghiệm công việc tốt?</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=" item">
                        <div className="blog-img item6">
                        </div>
                        <div className="blog-infos">
                            <div className="blog-time"><span>Chia sẻ</span> |  Jun 29</div>
                            <p className="title">Làm sao để có được trải nghiệm công việc tốt?</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=" item">
                        <div className="blog-img item7">
                        </div>
                        <div className="blog-infos">
                            <div className="blog-time"><span>Chia sẻ</span> |  Jun 29</div>
                            <p className="title">Làm sao để có được trải nghiệm công việc tốt?</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=" item">
                        <div className="blog-img item8">
                        </div>
                        <div className="blog-infos">
                            <div className="blog-time"><span>Chia sẻ</span> |  Jun 29</div>
                            <p className="title">Làm sao để có được trải nghiệm công việc tốt?</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=" item">
                        <div className="blog-img item9">
                        </div>
                        <div className="blog-infos">
                            <div className="blog-time"><span>Chia sẻ</span> |  Jun 29</div>
                            <p className="title">Làm sao để có được trải nghiệm công việc tốt?</p>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>

            <div className="and-more">
                <div className="handraw-underline3"></div>
            </div>
        </div>
    )
}

export default Blogs