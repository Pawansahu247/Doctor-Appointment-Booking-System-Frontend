import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
// Make sure this path is correct for your project structure
import MedPointLogo from '../../assets/MedPointLogo.svg'; 
import Badge from '@mui/material/Badge';
import CartForBuyMedicine from './CartForBuyMedicine';
import { useSelector } from 'react-redux';
import {
  FaUserCircle,
  FaBars,
  FaTimes,
  FaShoppingCart,
  FaCaretDown,
  FaSignOutAlt,
  FaCog,
  FaUserMd
} from 'react-icons/fa';

// Main Header Component
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  
  const location = useLocation();
  const cart = useSelector((state) => state.cart.cart);
  const profileMenuRef = useRef(null);
  const cartRef = useRef(null);

  const cartItemCount = Object.keys(cart).length;
  const isBuyMedicineRoute = location.pathname.startsWith('/buy-medicine');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleCart = () => setIsCartOpen(!isCartOpen);
  const toggleProfileMenu = () => setIsProfileMenuOpen(!isProfileMenuOpen);

  // Effect to handle closing menus on outside clicks
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target)) {
        setIsProfileMenuOpen(false);
      }
      if (cartRef.current && !cartRef.current.contains(event.target) && !event.target.closest('.cart-toggle-button')) {
          setIsCartOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  
  // Effect to close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);


  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Book Appointment', path: '/book-appointment' },
    { name: 'Lab Test', path: '/lab-test' },
    { name: 'Buy Medicine', path: '/buy-medicine' },
    { name: 'Video Consult', path: '/video-consult' },
  ];

  return (
    <>
      <header className='w-full bg-[#490B3D] text-white px-4 lg:px-8 py-3 flex items-center justify-between shadow-md sticky top-0 z-50'>
        {/* Logo */}
        <Link to="/" className='flex items-center gap-3'>
          <img
            className='w-12 h-12 transform transition-transform duration-300 hover:scale-110'
            src={MedPointLogo} // Using the MedPoint logo as a placeholder
            alt="Healthivo Logo"
          />
           <span className="text-xl font-bold">Healthivo</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className='hidden lg:flex flex-1 items-center justify-center'>
          <ul className='flex gap-x-8'>
            {menuItems.map((item) => (
              <li key={item.name} className="group">
                <Link
                  to={item.path}
                  className={`py-2 transition-colors duration-300 relative font-semibold ${
                    location.pathname === item.path ? 'text-white' : 'text-gray-300'
                  } hover:text-white`}
                >
                  {item.name}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#BD1E51] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out ${location.pathname === item.path ? 'scale-x-100' : ''}`}></span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Side Icons & Actions */}
        <div className='flex items-center gap-x-4'>
          {/* Cart Icon */}
          {isBuyMedicineRoute && (
            <div className='relative' ref={cartRef}>
              <Badge badgeContent={cartItemCount} color="error">
                <button onClick={toggleCart} className='p-2 rounded-full hover:bg-white/10 transition-colors duration-200 cart-toggle-button'>
                  <FaShoppingCart className={`text-2xl cursor-pointer transition-colors duration-300 ${isCartOpen ? 'text-white' : 'text-gray-300'}`} />
                </button>
              </Badge>
              {isCartOpen && <CartForBuyMedicine />}
            </div>
          )}

          {/* User Profile Dropdown */}
          <div className='hidden lg:block relative' ref={profileMenuRef}>
            <button
              onClick={toggleProfileMenu}
              className='flex items-center gap-2 p-2 rounded-full hover:bg-white/10 transition-colors duration-200'
            >
              <FaUserCircle className='text-3xl text-gray-300' />
              <span className='font-semibold'>Pawan</span>
              <FaCaretDown className={`transition-transform duration-300 ${isProfileMenuOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {/* Profile Dropdown Menu - Kept light for readability */}
            <div className={`absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg py-1 border border-gray-200 z-50 transition-all duration-200 ease-out transform ${isProfileMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`} style={{ transformOrigin: 'top right' }}>
                <div className="px-4 py-3 border-b">
                    <p className="text-sm font-semibold text-gray-800">Pawan Prasad Sahu</p>
                    <p className="text-xs text-gray-500 truncate">pawan.sahu@example.com</p>
                </div>
              <Link to="/doctor/setting" className='flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors'>
                <FaCog className="text-gray-500"/> Settings
              </Link>
              <Link to="/doctor/appointments" className='flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors'>
                <FaUserMd className="text-gray-500"/> Appointments
              </Link>
              <div className="border-t my-1"></div>
              <Link to="/user/login" className='flex items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-gray-100 transition-colors'>
                <FaSignOutAlt className="text-red-500"/> Logout
              </Link>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <button className='lg:hidden text-2xl text-white' onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </header>

      {/* Mobile Menu & Overlay (Kept light for best UX) */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 lg:hidden ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" onClick={toggleMenu}></div>
        
        <div
          className={`absolute inset-y-0 right-0 w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className='p-4 border-b flex flex-col items-center text-gray-800'>
            <FaUserCircle className='text-5xl text-gray-500 mb-2'/>
            <p className='font-semibold text-lg'>Pawan Prasad</p>
          </div>
          <nav className='flex flex-col gap-y-2 mt-4'>
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-lg font-medium text-gray-700 hover:bg-[#490B3D] hover:text-white transition-all duration-200 px-6 py-3 ${location.pathname === item.path ? 'bg-[#490B3D] text-white' : ''}`}
                onClick={toggleMenu}
              >
                {item.name}
              </Link>
            ))}
             <div className="border-t mx-4 mt-4"></div>
             <Link to="/user/login" className='flex items-center gap-3 px-6 py-3 text-red-600 hover:bg-red-50 transition-colors' onClick={toggleMenu}>
                <FaSignOutAlt /> Logout
             </Link>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Header;