import logo from "../assets/logos/OlajanGlobal-Logo.png";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-neutral.surface text-neutral.lighter mt-20">
      {/* Main Footer Grid */}
      <div className="container mx-auto px-6 py-16 grid gap-12 md:grid-cols-4">
        {/* Brand & About */}
        <div>
          <img
            src={logo}
            alt="Olajan Global Services Logo"
            className="h-14 mb-5 drop-shadow-lg"
          />
          <p className="text-sm leading-relaxed text-neutral.light">
            Olajan Global Services LTD delivers reliable Solar, Office
            Equipment, and IT solutions that keep your business running
            efficiently.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            {[
              {
                Icon: Facebook,
                href: "https://facebook.com/OlajanGlobal",
                label: "Facebook",
              },
              {
                Icon: Twitter,
                href: "https://twitter.com/OlajanGlobal",
                label: "Twitter",
              },
              {
                Icon: Linkedin,
                href: "https://linkedin.com/company/OlajanGlobal",
                label: "LinkedIn",
              },
              {
                Icon: Instagram,
                href: "https://instagram.com/OlajanGlobal",
                label: "Instagram",
              },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 rounded-full bg-neutral.DEFAULT hover:bg-primary hover:text-white transition-colors"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-5 text-primary text-lg">
            Quick Links
          </h4>
          <ul className="space-y-3 text-sm">
            {[
              ["Home", "/"],
              ["About Us", "/about"],
              ["Services", "/services"],
              ["Projects", "/projects"],
              ["Blog", "/blog"],
              ["Contact", "/contact"],
              ["FAQ", "/faq"],
            ].map(([label, path]) => (
              <li key={label}>
                <Link
                  to={path}
                  className="hover:text-secondary transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold mb-5 text-primary text-lg">Services</h4>
          <ul className="space-y-3 text-sm">
            {["Solar Solutions", "Office Equipment", "IT Products"].map(
              (service) => (
                <li
                  key={service}
                  className="hover:text-secondary transition-colors"
                >
                  {service}
                </li>
              )
            )}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold mb-5 text-primary text-lg">Contact</h4>
          <ul className="space-y-3 text-sm text-neutral.light">
            <li>
              <a
                href="https://www.google.com/maps?q=Oladimeji+Street,+Ibadan+200113,+Oyo"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
              >
                Oladimeji Street, Ibadan 200113, Oyo
              </a>
            </li>
            <li>
              <a
                href="tel:+2348120000000"
                className="hover:text-secondary transition-colors"
              >
                +234 (0) 812-000-0000
              </a>
            </li>
            <li>
              <a
                href="mailto:hello@olajanglobal.com"
                className="hover:text-secondary transition-colors"
              >
                hello@olajanglobal.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral.lighter">
        <div className="container mx-auto px-6 py-6 text-center text-xs text-neutral.light">
          <p>
            © {year} <span className="text-neutral.lighter">Olajan Global Services LTD</span>. All rights reserved.
          </p>
          <p className="mt-1 text-neutral.light">
            Powered by{" "}
            <a
              href="https://josebot.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline transition-colors"
            >
              Josebot Company
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
