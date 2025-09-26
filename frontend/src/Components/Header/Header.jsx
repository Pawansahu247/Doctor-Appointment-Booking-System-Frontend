import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MedPointLogo from '../../assets/MedPointLogo.svg';
import Badge from '@mui/material/Badge';
import CartForBuyMedicine from './CartForBuyMedicine';
import { useSelector } from 'react-redux';
import { FaUserCircle, FaBars, FaTimes, FaShoppingCart, FaCaretDown, FaSignOutAlt, FaCog } from 'react-icons/fa';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const location = useLocation();
  const cart = useSelector((state) => state.cart.cart);
  const profileRef = useRef(null);

  const cartItemCount = Object.keys(cart).length;
  const isBuyMedicineRoute = location.pathname.startsWith('/buy-medicine');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleCart = () => setIsCartOpen(!isCartOpen);
  const toggleProfileMenu = () => setIsProfileMenuOpen(!isProfileMenuOpen);

  useEffect(() => {
    // Close dropdowns when clicking outside
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const menuItems = [
    { name: 'Home', path: '' },
    { name: 'Book Appointment', path: 'book-appointment' },
    { name: 'Lab Test', path: 'lab-test' },
    { name: 'Buy Medicine', path: 'buy-medicine' },
    { name: 'Video Consult', path: 'video-consult' },
  ];

  return (
    <header className='w-full bg-[#490B3D] px-4 lg:px-8 py-4 border-b flex items-center justify-between text-white font-medium shadow-md relative z-50'>
      {/* Logo */}
      <div className='flex items-center'>
        <Link to="/">
          <img
            className='w-14 h-14 transform transition-transform duration-300 hover:scale-110'
            src={MedPointLogo}
            alt="MedPointLogo"
          />
        </Link>
      </div>

      {/* Desktop Navigation Menu */}
      <nav className={`hidden lg:flex flex-1 items-center justify-center`}>
        <ul className='flex gap-x-8'>
          {menuItems.map((item) => (
            <li key={item.name} className='relative group'>
              <Link to={`/${item.path}`} className='py-2 transition-all duration-300 relative font-semibold hover:text-[#BD1E51]'>
                {item.name}
                <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-[#BD1E51] transition-all duration-300 group-hover:w-full'></span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Right Side Icons and Buttons */}
      <div className='flex items-center gap-x-4'>
        {isBuyMedicineRoute && (
          <div className='relative'>
            <Badge badgeContent={cartItemCount} color="error" overlap="circular">
              <FaShoppingCart
                onClick={toggleCart}
                className={`text-3xl cursor-pointer transition-colors duration-300 ${isCartOpen ? 'text-[#BD1E51]' : 'text-[#490B3D]'}`}
              />
            </Badge>
            {isCartOpen && <CartForBuyMedicine />}
          </div>
        )}

        {/* User Profile Dropdown */}
        <div className='hidden lg:block relative' ref={profileRef}>
          <button
            onClick={toggleProfileMenu}
            className='flex items-center gap-2 p-2 rounded-full hover:bg-red-500 transition-colors duration-300'
          >
            <FaUserCircle className='text-3xl text-[#490B3D]' />
            <span className='font-semibold'>Pawan</span>
            <FaCaretDown className={`transition-transform duration-300 ${isProfileMenuOpen ? 'rotate-180' : ''}`} />
          </button>
          {isProfileMenuOpen && (
            <div className='absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 border border-gray-200 z-50'>
              <Link to="/doctor/setting" className='flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors'>
                <FaCog /> Settings
              </Link>
              <Link to="/doctor/appointments" className='flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors'>
                <FaSignOutAlt /> Appointments
              </Link>
              <Link to="/user/login" className='flex items-center gap-2 px-4 py-2 text-red-500 hover:bg-gray-100 transition-colors'>
                <FaSignOutAlt /> Logout
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className='lg:hidden text-2xl text-[#490B3D] ml-4'
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed inset-y-0 right-0 w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out lg:hidden z-40 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className='flex items-center justify-end p-4'>
          <button className='text-2xl text-[#490B3D]' onClick={toggleMenu}>
            <FaTimes />
          </button>
        </div>
        <nav className='flex flex-col items-center gap-y-4'>
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={`/${item.path}`}
              className='text-xl font-semibold text-[#490B3D] hover:text-[#BD1E51] transition-colors duration-300 w-full text-center py-2'
              onClick={toggleMenu}
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/user/login"
            className='mt-4 w-4/5 text-center text-white py-2 rounded-full bg-[#BD1E51] hover:bg-[#A01D45] transition-colors duration-300'
            onClick={toggleMenu}
          >
            Login/Signup
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;