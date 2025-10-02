import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { GoVerified } from "react-icons/go";
import { MdSecurity } from "react-icons/md";
import HealthivoLogo from '../../assets/MedPointLogo.svg'; // Using your existing logo import

export default function Footer() {

  // Data for links to keep the code clean
  const quickLinks = [
    { to: '/book-appointment', text: 'Book Appointment' },
    { to: '/buy-medicine', text: 'Buy Medicine' },
    { to: '/lab-test', text: 'Lab Tests' },
    { to: '/tips', text: 'Health Tips' },
    { to: '/faqs', text: 'FAQs' },
    { to: '/careers', text: 'Careers' },
    { to: '/blog', text: 'Blog / Articles' },
  ];

  return (
    <footer className="w-full text-white mt-10">
      {/* Main Footer Content */}
      <div className="w-full bg-[#c83262] px-6 py-12">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Column 1: Brand Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src={HealthivoLogo} alt="Healthivo Logo" className="w-14 h-14 rounded-full bg-yellow-400 p-1 shadow-md" />
              <h3 className="text-3xl font-bold">Healthivo</h3>
            </div>
            <p className="text-gray-200 text-sm max-w-sm">
              Healthivo connects patients with trusted doctors, making healthcare more accessible and affordable.
            </p>
            <div className="flex gap-4 text-2xl mt-6">
              <a href="https://facebook.com" aria-label="Facebook" className="hover:scale-110 transition-transform"><FaFacebook /></a>
              <a href="https://twitter.com" aria-label="Twitter" className="hover:scale-110 transition-transform"><FaTwitter /></a>
              <a href="https://instagram.com" aria-label="Instagram" className="hover:scale-110 transition-transform"><FaInstagram /></a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="flex flex-col gap-2">
              {quickLinks.map(link => (
                <li key={link.text}>
                  <Link to={link.to} className="hover:underline hover:text-gray-200 transition-colors text-sm">{link.text}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Support */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact & Support</h4>
            <div className="flex flex-col gap-2 text-sm">
              <p>Email: info@healthivo.com</p>
              <p>Phone: +91 12345 67890</p>
              <p>123, Doctor Plaza, Mumbai</p>
              <div className="mt-4">
                <h5 className="font-bold">Support Hours:</h5>
                <p>Mon–Sat: 9 AM – 8 PM</p>
                <p>Sun: Closed</p>
              </div>
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Newsletter</h4>
            <p className="text-sm text-gray-200 mb-4">Subscribe for health tips, offers, and doctor updates.</p>
            <form className="flex flex-col gap-3">
              <div className="relative w-full">
                <FaEnvelope className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-500" />
                <input type="email" placeholder="Your email" className="pl-11 pr-4 py-3 rounded-full w-full focus:outline-none focus:ring-2 focus:ring-[#d72660] text-gray-800" />
              </div>
              <button type="submit" className="bg-white text-[#d72660] font-bold px-6 py-3 rounded-full hover:bg-gray-100 transition-colors w-full">
                Sign Up
              </button>
            </form>
          </div>

          {/* Column 5: Trust & Security */}
          <div className="text-center sm:text-left">
            <h4 className="text-xl font-semibold mb-4">Trust & Security</h4>
            <div className="flex flex-col items-center sm:items-start gap-3 text-sm">
              <div className="flex items-center gap-2">
                <MdSecurity className="text-2xl" />
                <span>100% Secure Payments</span>
              </div>
              <div className="flex items-center gap-2">
                <GoVerified className="text-xl" />
                <span>Verified Doctors</span>
              </div>
              <p className="mt-4 font-bold text-lg">Trusted by 10,000+ Patients</p>
            </div>
          </div>

        </div>
      </div>

      {/* Footer Bottom */}
      <div className="w-full bg-[#33072E] py-4">
        <div className="container mx-auto text-center">
          <p className="text-sm opacity-80">
            &copy; {new Date().getFullYear()} Healthivo | <Link to="/privacy" className="hover:underline">Privacy Policy</Link> | <Link to="/terms" className="hover:underline">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}