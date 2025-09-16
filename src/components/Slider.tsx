import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Thumbs } from "swiper/modules";
import { useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/thumbs";

function Slider() {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const carImages = ["image-1", "image-2", "image-3", "image-4"];

  return (
    <div className="bg-white w-full h-auto p-4 rounded-3xl">
      <Swiper
        modules={[Autoplay, Thumbs]}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        loop={true}
        thumbs={{ swiper: thumbsSwiper }}
        className="w-full h-[300px] sm:h-[400px] md:h-[650px] rounded-3xl"
      >
        {carImages.map((img, i) => (
          <SwiperSlide key={i}>
            <img
              src={`./images/${img}.webp`}
              alt={`Car ${i}`}
              className="w-full h-full object-cover rounded-3xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnails */}
      <div className="mt-3 sm:mt-5 flex justify-center cursor-pointer">
        <Swiper
          modules={[Thumbs]}
          onSwiper={setThumbsSwiper}
          slidesPerView={3}
          breakpoints={{
            640: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
          spaceBetween={8}
          watchSlidesProgress
          className="max-w-full sm:max-w-2xl"
        >
          {carImages.map((img, i) => (
            <SwiperSlide key={i} className="!w-20 sm:!w-32 flex-shrink-0">
              <img
                src={`./images/${img}.webp`}
                alt={`Thumbnail ${i}`}
                className="w-full h-full object-cover rounded-xl"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Slider;
