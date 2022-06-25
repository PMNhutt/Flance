import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function PopularService() {
    return (
        <div className="popular-service">
            <div className="title-bar"></div>
            <p className="title">Dịch vụ phổ biến</p>
            <div className="services">
                <Swiper
                    slidesPerView={4}
                    spaceBetween={60}
                    slidesPerGroup={4}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide className="item1 item">
                        <p>Thiết kế UI/ UX</p>
                        <div className="bg-black-trans"></div>
                    </SwiperSlide>
                    <SwiperSlide className="item2 item">
                        <p>Truyền thông</p>
                        <div className="bg-black-trans"></div>
                    </SwiperSlide>
                    <SwiperSlide className="item3 item">
                        <p>Lập trình viên</p>
                        <div className="bg-black-trans"></div>
                    </SwiperSlide>
                    <SwiperSlide className="item4 item">
                        <p>Đồ họa 3D</p>
                        <div className="bg-black-trans"></div>
                    </SwiperSlide>
                    <SwiperSlide className="item5 item">
                        <p>Thiết kế logo</p>
                        <div className="bg-black-trans"></div>
                    </SwiperSlide>
                    <SwiperSlide className="item6 item">
                        <p>Dịch thuật</p>
                        <div className="bg-black-trans"></div>
                    </SwiperSlide>
                    <SwiperSlide className="item7 item">
                        <p>Đồ họa</p>
                        <div className="bg-black-trans"></div>
                    </SwiperSlide>
                    <SwiperSlide className="item8 item">
                        <p>Database</p>
                        <div className="bg-black-trans"></div>
                    </SwiperSlide>
                    
                </Swiper>
            </div>

        </div>
    )
}

export default PopularService