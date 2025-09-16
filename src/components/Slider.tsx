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
    <div className="bg-gray-100 w-full p-3 rounded-3xl">
      <Swiper
        modules={[Autoplay, Thumbs]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        loop={true}
        thumbs={{ swiper: thumbsSwiper }}
        className="w-full h-full"
      >
        {carImages.map((img, i) => (
          <SwiperSlide key={i}>
            {/* Rounded container */}
            <div className="w-full h-[550px] rounded-3xl overflow-hidden relative">
              <img
                src={`./images/${img}.webp`}
                alt={`Car ${i}`}
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnails */}
      <div className="mt-3 flex justify-center">
        <Swiper
          modules={[Thumbs]}
          onSwiper={setThumbsSwiper}
          slidesPerView={5}
          spaceBetween={12}
          watchSlidesProgress
          className="max-w-2xl"
        >
          {carImages.map((img, i) => (
            <SwiperSlide key={i} className="!w-32 flex-shrink-0">
              <div className="w-32 h-24 rounded-xl overflow-hidden border hover:border-orange-600 transition cursor-pointer">
                <img
                  src={`./images/${img}.webp`}
                  alt={`Thumbnail ${i}`}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Slider;
