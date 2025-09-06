import Hero from '../components/Hero.jsx';
import ServicesPreview from '../components/ServicesPreview.jsx';
import Stats from '../components/Stats.jsx';
import PartnersCarousel from '../components/PartnersCarousel.jsx';
import Testimonials from '../components/Testimonials.jsx';
import CTA from '../components/CTA.jsx';

// ✅ Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const featured = [
  { id: 1, title: 'Clinic 10kW Solar', img: '/images/project-solar-2.svg' },
  { id: 2, title: 'Corporate Copiers', img: '/images/project-office-1.svg' },
  { id: 3, title: 'Mall CCTV Overhaul', img: '/images/project-it-1.svg' },
  { id: 4, title: 'Warehouse Cabling', img: '/images/project-it-2.svg' },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <section className="bg-neutral-background">
        <div className="container mx-auto px-4 py-20">
          <ServicesPreview />
        </div>
      </section>

      {/* Featured Projects */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-12 text-center">
          Featured Projects
        </h2>

        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
        >
          {featured.map((f) => (
            <SwiperSlide key={f.id}>
              <div className="rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <img
                  src={f.img}
                  alt={f.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg md:text-xl font-semibold text-neutral mb-3">
                    {f.title}
                  </h3>
                  <button className="mt-3 inline-block px-5 py-2.5 text-sm md:text-base font-medium text-white bg-primary rounded-xl hover:bg-primary-light transition-all shadow-md hover:shadow-lg">
                    View Details
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Stats Section */}
      <section className="bg-primary-tint py-20">
        <div className="container mx-auto px-4">
          <Stats />
        </div>
      </section>

      {/* Partners Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-12 text-center">
            Our Trusted Partners
          </h2>
          <PartnersCarousel />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-secondary-tint py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-10 text-center">
            What Our Clients Say
          </h2>
          <Testimonials />
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary py-20 text-white text-center">
        <div className="container mx-auto px-4">
          <CTA />
        </div>
      </section>
    </>
  );
}
