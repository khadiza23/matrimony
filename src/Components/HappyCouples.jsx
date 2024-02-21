import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./common/title.css";

// import required modules
import { Navigation } from "swiper/modules";

import "@smastrom/react-rating/style.css";
import Testimonial from "./common/Testimonial";
const HappyCouples = () => {
  return (
    <div id="testimonial" className="w-2/3 mx-auto">
      <h1 className="title mt-5">Our Successful Couples</h1>
      <p className="subtitle">-----About 50 people-----</p>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <Testimonial />
        </SwiperSlide>
        <SwiperSlide>
          <Testimonial />
        </SwiperSlide>
        <SwiperSlide>
          <Testimonial />
        </SwiperSlide>
        <SwiperSlide>
          <Testimonial />
        </SwiperSlide>
        <SwiperSlide>
          <Testimonial />
        </SwiperSlide>
        <SwiperSlide>
          <Testimonial />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HappyCouples;
