import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';
import hero from '../assets/images/here-image.jpg';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] grid place-items-center overflow-hidden">
      {/* Background Image */}
      <img
        src={hero}
        alt="Technician working on solar panel"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="container-max relative z-10 py-24 text-center px-4">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-lg">
          Powering Your Future with{' '}
          <span className="text-primary">
            <Typewriter
              words={['Innovative Solutions', 'Reliable Energy', 'Smart Technology']}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={60}
              delaySpeed={1500}
            />
          </span>
        </h1>

        <p className="mt-6 text-gray-200 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
          <Typewriter
            words={[
              'Solar • Office Equipment • IT Products — dependable technology that grows with your business.',
              'Affordable, reliable, and sustainable solutions tailored for you.'
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={50}
            deleteSpeed={40}
            delaySpeed={2000}
          />
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <Link
            to="/services"
            className="bg-primary text-white px-6 py-3 rounded-2xl shadow-lg hover:shadow-xl hover:bg-primary-light transition-all duration-300"
          >
            Our Services
          </Link>
          <Link
            to="/contact"
            className="border-2 border-secondary text-secondary px-6 py-3 rounded-2xl hover:bg-secondary hover:text-white transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 w-full flex justify-center z-10">
        <ChevronDown className="w-8 h-8 text-secondary animate-bounce" />
      </div>
    </section>
  );
}
