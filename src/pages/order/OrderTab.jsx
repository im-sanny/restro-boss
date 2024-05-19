import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import FoodCard from "../../components/foodCard/FoodCard";

const OrderTab = ({ items }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <div>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <div className="grid md:grid-cols-3 gap-5">
          {items.map((item) => (
            <FoodCard key={item._id} item={item}></FoodCard>
          ))}
          <SwiperSlide>Slide 1</SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
};

export default OrderTab;
