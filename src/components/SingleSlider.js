import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Row, Col } from 'react-bootstrap';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../components/SwiperCustom.css';

export default function App(prop) {
  return (
    <>
      <Swiper
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
        }}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="item">
            <Row className=" align-items-center">
              <Col lg={8} md={8} sm={12}>
                <div className="BannerContent">
                  <h1>
                    Best Way To Buy And Sell <br /> Your Trades
                  </h1>
                  <p>
                    We will show you the best way to be an option in selling and
                    buying Forex assets
                  </p>
                  <div className="theme-btn">
                    <a className="vc_general" href="#">
                      See Details <img src="assets/images/btn-bf.png" />
                    </a>
                  </div>
                </div>
              </Col>
              <Col lg={4} md={4} sm={12}>
                <div className="BannerImage">
                  <img src="assets/images/platform-img.png" />
                </div>
              </Col>
            </Row>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item">
            <Row className=" align-items-center">
              <Col lg={8} md={8} sm={12}>
                <div className="BannerContent">
                  <h1>
                    Best Way To Buy And Sell <br /> Your Trades
                  </h1>
                  <p>
                    We will show you the best way to be an option in selling and
                    buying Forex assets
                  </p>
                  <div className="theme-btn">
                    <a className="vc_general" href="#">
                      See Details <img src="assets/images/btn-bf.png" />
                    </a>
                  </div>
                </div>
              </Col>
              <Col lg={4} md={4} sm={12}>
                <div className="BannerImage">
                  <img src="assets/images/platform-img.png" />
                </div>
              </Col>
            </Row>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item">
            <div className="row align-items-center">
              <div className="col-lg-8 col-md-8 col-sm-12">
                <div className="BannerContent">
                  <h1>
                    Best Way To Buy And Sell <br /> Your Trades
                  </h1>
                  <p>
                    We will show you the best way to be an option in selling and
                    buying Forex assets
                  </p>
                  <div className="theme-btn">
                    <a className="vc_general" href="#">
                      See Details <img src="assets/images/btn-bf.png" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="BannerImage">
                  <img src="assets/images/banner-img.png" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
