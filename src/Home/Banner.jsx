import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

import artifact1 from ".././assets/icon/1.jpg";
import artifact2 from ".././assets/icon/2.jpg";
import artifact3 from ".././assets/icon/3.jpg";
import Slide from "./Slide";

function Banner() {
  return (
    <div className="container pt-16 px-6 py-10 mx-auto ">
      <Swiper
        spaceBetween={25}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slide
            image={artifact1}
            text="Preserve History, Build the Future: Showcase Historical Artifacts Seamlessly in Minutes."
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={artifact2}
            text="Bring Historical Artifacts to Life in Minutes: Showcase the Past with Modern Precision"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={artifact3}
            text="Uncover the Stories of the Past: Display Historical Artifacts with Ease and Elegance."
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Banner;
