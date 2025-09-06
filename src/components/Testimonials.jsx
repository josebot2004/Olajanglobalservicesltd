import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Quote } from 'lucide-react';
import testimonials from '../data/testimonials.js';

export default function Testimonials() {
  return (
    <section className="container-max py-16">
      {/* Section Title */}
      <h3 className="text-2xl md:text-3xl font-bold text-center mb-10 relative inline-block text-neutral.DEFAULT">
        What Customers Say
        <span className="block w-20 h-1 bg-primary mx-auto mt-2 rounded-full"></span>
      </h3>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{ 768: { slidesPerView: 2 } }}
        loop
      >
        {testimonials.map((t) => (
          <SwiperSlide key={t.id}>
            <div className="h-full rounded-2xl border border-gray-200 bg-white p-6 shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 text-primary/20 w-10 h-10" />

              {/* Profile */}
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-secondary"
                />
                <div>
                  <div className="font-semibold text-neutral.DEFAULT">{t.name}</div>
                  <div className="text-yellow-500 text-xs">
                    {"★".repeat(t.rating || 5)}
                  </div>
                </div>
              </div>

              {/* Review Text */}
              <p className="mt-4 text-gray-700 text-sm leading-relaxed">{t.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
