import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import kartel from '../assets/logos/kartel-logo.png';
import genex from '../assets/logos/genex-logo.jpeg';
import lithion from '../assets/logos/growatt.png';

const logos = [kartel, genex, lithion, kartel, genex, lithion];

export default function PartnersCarousel() {
  return (
    <section className="container-max py-16">
      {/* Title */}
      <h3 className="text-2xl md:text-3xl font-bold mb-10 text-center text-neutral.DEFAULT">
        Trusted <span className="text-secondary">Partners</span>
      </h3>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 0, disableOnInteraction: false }}
        speed={4000} // smooth continuous flow
        loop
        slidesPerView={3}
        spaceBetween={30}
        breakpoints={{
          640: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        }}
        allowTouchMove={false}
      >
        {logos.map((src, i) => (
          <SwiperSlide key={i}>
            <div className="h-24 flex items-center justify-center px-4">
              <img
                src={src}
                alt="Partner logo"
                className="max-h-16 w-auto opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition duration-300"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
