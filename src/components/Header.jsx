import { Link, NavLink } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { useState, useEffect } from 'react';
import logo from '../assets/logos/OlajanGlobal-Logo.png';

const nav = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
  { to: '/faq', label: 'FAQ' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-neutral.surface shadow-lg backdrop-blur-md' : 'bg-neutral.background'
      }`}
    >
      <div className="container-max flex items-center justify-between py-3 px-4 md:px-0">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Olajan Global Services Logo" className="h-10 w-auto" />
          <div className="leading-tight">
            <div className="font-bold text-primary">Olajan Global Services LTD</div>
            <div className="text-xs text-neutral.light">Customer Satisfaction is Our Priority</div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {nav.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm transition-colors hover:text-secondary ${
                  isActive ? 'text-primary font-semibold' : 'text-neutral.DEFAULT'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="ml-2 inline-flex items-center rounded-2xl bg-primary px-4 py-2 text-white text-sm font-medium shadow hover:bg-primary-light hover:text-neutral.surface transition-all"
          >
            Get a Quote
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-neutral.DEFAULT hover:text-primary transition-colors"
          onClick={() => setOpen(v => !v)}
          aria-label="Open Menu"
        >
          <Menu />
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="md:hidden border-t border-neutral.lighter bg-neutral.surface">
          <div className="container-max py-2 flex flex-col px-4">
            {nav.map(item => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `py-3 border-b text-sm transition-colors ${
                    isActive
                      ? 'text-primary font-semibold'
                      : 'text-neutral.DEFAULT hover:text-secondary'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="py-3 mt-2 text-center text-sm font-medium text-white bg-secondary rounded-xl shadow hover:bg-secondary.light transition-all"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
