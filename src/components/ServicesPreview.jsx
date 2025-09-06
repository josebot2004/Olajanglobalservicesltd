import { PanelsTopLeft, Sun, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const items = [
  { 
    icon: Sun, 
    title: 'Solar-Inverter Solutions', 
    text: 'Design, installation, and maintenance for homes and businesses.', 
    to: '/services' 
  },
  { 
    icon: PanelsTopLeft, 
    title: 'Office Equipment', 
    text: 'Copiers, printers, scanners, and consumables with expert support.', 
    to: '/services' 
  },
  { 
    icon: Shield, 
    title: 'IT Products', 
    text: 'CCTV, networking, servers, and expert IT support to secure your operations.', 
    to: '/services' 
  },
];

export default function ServicesPreview() {
  return (
    <section className="container-max py-16 md:py-20">
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-neutral.DEFAULT">
        What We Do
      </h2>

      {/* Services Grid */}
      <div className="grid md:grid-cols-3 gap-10">
        {items.map(({ icon: Icon, title, text, to }) => (
          <Link
            to={to}
            key={title}
            className="group rounded-2xl border border-gray-200 bg-white p-8 hover:shadow-2xl transition-all transform hover:-translate-y-2"
          >
            {/* Icon */}
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
              <Icon className="w-8 h-8" />
            </div>

            {/* Service Title */}
            <h3 className="font-semibold text-xl mb-3 text-neutral.DEFAULT group-hover:text-primary transition-colors duration-300">
              {title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              {text}
            </p>

            {/* Explore Link */}
            <span className="inline-block mt-6 text-sm font-medium text-primary group-hover:text-secondary group-hover:underline transition-colors duration-300">
              Explore →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
