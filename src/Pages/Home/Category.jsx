import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import slide1 from "../../assets/home/slide1.jpg";
import slide2 from "../../assets/home/slide2.jpg";
import slide3 from "../../assets/home/slide3.jpg";
import slide4 from "../../assets/home/slide4.jpg";
import slide5 from "../../assets/home/slide5.jpg";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section>
      <SectionTitle
        heading={"From 11.00am to 10.00pm"}
        headingTitle={"Order Online"}
      ></SectionTitle>

      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={false}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper my-14 "
      >
        <SwiperSlide className="mb-12">
          <img src={slide1} alt="" />
          <h3 className="sm:text-2xl  md:text-4xl font-serif text-white uppercase text-center text-wh -mt-9 md:-mt-12">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <h3 className="sm:text-2xl  md:text-4xl font-serif text-white uppercase text-center text-wh -mt-9 md:-mt-12">
            Pizza
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h3 className=" sm:text-2xl  md:text-4xl font-serif text-white uppercase text-center text-wh -mt-9 md:-mt-12">
            Soups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <h3 className="sm:text-2xl  md:text-4xl font-serif text-white uppercase text-center text-wh -mt-9 md:-mt-12">
            Desert
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <h3 className="sm:text-2xl  md:text-4xl font-serif text-white uppercase text-center text-wh -mt-9 md:-mt-12">
            Salads
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
