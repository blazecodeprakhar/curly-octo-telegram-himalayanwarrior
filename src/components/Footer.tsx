import Link from "next/link";
import { Mountain, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0b0c10] text-gray-400 border-t border-gray-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-primary-foreground shadow-md shadow-primary/30">
                <Mountain className="h-5.5 w-5.5" />
              </div>
              <div>
                <span className="text-lg font-black tracking-wider uppercase text-white">
                  Himalayan<span className="text-primary">Warrior</span>
                </span>
                <span className="block text-[8px] font-bold tracking-widest text-gray-500 uppercase -mt-1.5">
                  Trusted & Safest Treks
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              Himalayan Warrior is a premier mountain expedition company based in Dehradun, Uttarakhand. We specialize in winter summits, glacier crossings, and alpine lake treks under certified local guidance and strict safety systems.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/himalayanwarrior1/"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051C.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/Himalayan-Warrior-103684332397357"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://wa.me/+919456582262"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                aria-label="WhatsApp"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.731-1.456L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.019-5.115-2.877-6.974-1.858-1.859-4.331-2.88-6.967-2.881-5.441 0-9.866 4.425-9.87 9.868-.002 1.8.473 3.558 1.38 5.11l-.997 3.643 3.738-.981l-.103.027z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-l-2 border-primary pl-2">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/treks" className="hover:text-primary transition-colors">
                  Treks & Expedition
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-primary transition-colors">
                  Media Gallery
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-primary transition-colors">
                  Travel Blogs
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Policy Links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-l-2 border-primary pl-2">
              Booking Policy
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/terms-conditions" className="hover:text-primary transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cancellation-policy" className="hover:text-primary transition-colors">
                  Cancellation Policy
                </Link>
              </li>
              <li>
                <Link href="/admin" className="hover:text-primary transition-colors">
                  Admin Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-l-2 border-primary pl-2">
              Contact Coordinates
            </h4>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+917249936622" className="hover:text-primary transition-colors block text-white font-semibold">
                    +91-7249936622
                  </a>
                  <a href="tel:+919456582262" className="hover:text-primary transition-colors block text-white font-semibold">
                    +91-9456582262
                  </a>
                  <span className="text-xs text-gray-500">Support Helpline (8am - 10pm)</span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a href="mailto:himalayanwarrior1@gmail.com" className="hover:text-primary transition-colors block text-xs truncate">
                  himalayanwarrior1@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed">
                  Preet Vihar Phase - 2, 96/48, Indira Gandhi Marg, Niranjanpur, Majra, Dehradun, Uttarakhand 248171
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {currentYear} Himalayan Warrior. All rights reserved.</p>
          <p>
            Designed & Rebuilt with ❤️ using Next.js & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
