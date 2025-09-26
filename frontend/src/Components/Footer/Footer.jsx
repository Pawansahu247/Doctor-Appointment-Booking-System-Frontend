import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLock, FaCheckCircle, FaEnvelope } from 'react-icons/fa';
import MedPointLogo from '../../assets/MedPointLogo.svg';

// Corrected image imports based on your file structure
import isoCertifiedBadge from '../../assets/iso-certified-badge.png';
import googlePlayBadge from '../../assets/google-play-badge.png';
import appStoreBadge from '../../assets/app-store-badge.png';
import securePaymentsBadge from '../../assets/secure-payments.png';
import trustedByBadge from '../../assets/trusted-by.png';

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-[#d72660] to-[#ffaf7b] text-white px-4 py-10 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row flex-wrap justify-between items-start gap-10">
        
        {/* Brand Info & Mini About Section */}
        <div className="flex flex-col items-start gap-4">
          <img 
            src={MedPointLogo} 
            alt="Healthivo Logo" 
            className="w-16 h-16 rounded-full bg-white shadow-lg" 
          />
          <h3 className="text-3xl font-bold">Healthivo.</h3>
          <p className="text-gray-100 max-w-sm mt-2">
            Healthivo connects patients with trusted doctors, making healthcare more accessible and affordable.
          </p>
          <div className="flex gap-4 text-2xl mt-2">
            <a href="https://facebook.com" aria-label="Facebook" className="hover:scale-110 transition-transform"><FaFacebook /></a>
            <a href="https://twitter.com" aria-label="Twitter" className="hover:scale-110 transition-transform"><FaTwitter /></a>
            <a href="https://instagram.com" aria-label="Instagram" className="hover:scale-110 transition-transform"><FaInstagram /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-start gap-4">
          <h4 className="text-xl font-semibold mb-2">Quick Links</h4>
          <ul className="flex flex-col gap-2">
            <li><a href="/book-appointment" className="hover:underline hover:text-gray-200 transition-colors">Book Appointment</a></li>
            <li><a href="/buy-medicine" className="hover:underline hover:text-gray-200 transition-colors">Buy Medicine</a></li>
            <li><a href="/lab-test" className="hover:underline hover:text-gray-200 transition-colors">Lab Tests</a></li>
            <li><a href="/tips" className="hover:underline hover:text-gray-200 transition-colors">Health Tips</a></li>
            <li><a href="/faqs" className="hover:underline hover:text-gray-200 transition-colors">FAQs</a></li>
            <li><a href="/careers" className="hover:underline hover:text-gray-200 transition-colors">Careers</a></li>
            <li><a href="/blog" className="hover:underline hover:text-gray-200 transition-colors">Blog / Articles</a></li>
          </ul>
        </div>

        {/* Contact & Support Hours */}
        <div className="flex flex-col items-start gap-4">
          <h4 className="text-xl font-semibold mb-2">Contact & Support</h4>
          <p>Email: info@healthivo.com</p>
          <p>Phone: +91 12345 67890</p>
          <p className="mb-2">123, Doctor Plaza, Mumbai</p>
          
          <div className="mt-2">
            <h5 className="font-bold text-lg mb-1">Support Hours:</h5>
            <p>Mon–Sat: 9 AM – 8 PM</p>
            <p>Sun: Closed</p>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="flex flex-col items-start gap-4 max-w-xs w-full">
          <h4 className="text-xl font-semibold">Newsletter</h4>
          <p className="text-sm">Subscribe for health tips, offers, and doctor updates.</p>
          <form className="flex flex-col gap-4 w-full">
            <div className="relative w-full">
              <FaEnvelope className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500" />
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-10 py-3 rounded-full w-full focus:outline-none text-gray-800" 
              />
            </div>
            <button 
              type="submit" 
              className="bg-white text-[#d72660] font-bold px-6 py-3 rounded-full hover:bg-gray-100 transition-colors w-full"
            >
              Sign Up
            </button>
          </form>
        </div>

        {/* Trust & Security */}
        <div className="flex flex-col items-start gap-4 w-full md:w-auto">
          <h4 className="text-xl font-semibold">Trust & Security</h4>
          <div className="flex flex-col gap-2 text-sm">
            <div className="flex items-center gap-2">
              <img 
                src={securePaymentsBadge} 
                alt="100% Secure Payments" 
                className="w-6 h-6" 
              />
              <span>100% Secure Payments</span>
            </div>
            <div className="flex items-center gap-2">
              <img 
                src={trustedByBadge} 
                alt="Verified Doctors" 
                className="w-6 h-6" 
              />
              <span>Verified Doctors</span>
            </div>
            <p className="mt-4 font-bold text-lg">Trusted by 10,000+ Patients</p>
          </div>
        </div>
        
        
        
      </div>

      {/* Footer Bottom */}
      <div className="container mx-auto text-center mt-16 pt-6 border-t border-white border-opacity-30">
        <p className="text-sm opacity-80">
          &copy; {new Date().getFullYear()} Healthivo | 
          <a href="/privacy" className="hover:underline transition-colors">Privacy Policy</a> | 
          <a href="/terms" className="hover:underline transition-colors">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
}