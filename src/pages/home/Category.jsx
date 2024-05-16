import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import slide1 from "../../assets/home/slide1.jpg";
import slide2 from "../../assets/home/slide2.jpg";
import slide3 from "../../assets/home/slide3.jpg";
import slide4 from "../../assets/home/slide4.jpg";
import slide5 from "../../assets/home/slide5.jpg";
import SectionTitle from "../../components/sectionTitle/SectionTitle";

const Category = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto px-1">
        <section>
            <SectionTitle
                subHeading={'From 11.00am to 10pm'}
                heading={'Order Online'}
            >
            </SectionTitle>
        </section>
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          // centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper my-10"
        >
          <c>
            <SwiperSlide>
              <img src={slide1} alt="" />
              <h3 className="lg:text-3xl uppercase lg:-mt-16 -mt-7 text-white text-center">Salad</h3>
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide2} alt="" />
              <div>

              <h3 className="lg:text-3xl uppercase lg:-mt-16 -mt-7 pb-16 text-white text-center">Pizza</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide3} alt="" />
              <h3 className="lg:text-3xl uppercase lg:-mt-16 -mt-7 text-white text-center">Soup</h3>
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide4} alt="" />
              <h3 className="lg:text-3xl uppercase lg:-mt-16 -mt-7 text-white text-center">Desserts</h3>
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide5} alt="" className="h-full"/>
              <h3 className="lg:text-3xl uppercase lg:-mt-16 -mt-7 text-white text-center">Salad</h3>
            </SwiperSlide>
          </c>
        </Swiper>
      </div>
    </>
  );
};

export default Category;
