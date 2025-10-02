import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaPills, FaVial, FaCalendarCheck, FaVideo } from 'react-icons/fa';

function HomeBanner() {
  // Array for buttons to keep the code clean and scalable
  const actionButtons = [
    { text: 'Buy Medicine', to: '/buy-medicine', icon: <FaPills /> },
    { text: 'Book a Lab Test', to: '/lab-test', icon: <FaVial /> },
    { text: 'Book an Appointment', to: '/book-appointment', icon: <FaCalendarCheck /> },
    { text: 'Consult Online', to: '/video-consult', icon: <FaVideo /> },
  ];

  return (
    <div className="w-full bg-gradient-to-r from-[#490B3D] via-[#BD1E51] to-[#F1B814] text-white">
      <div className="container mx-auto flex flex-col items-center text-center px-4 py-20 md:py-28">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight tracking-tight">
          Your Health, Our Priority
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mb-10 text-gray-200">
          Buy medicine, book lab tests, consult doctors, and more—all in one place.
        </p>
        
        {/* Responsive Button Group */}
        <div className="flex flex-wrap justify-center gap-4">
          {actionButtons.map((button) => (
            <NavLink
              key={button.text}
              to={button.to}
              className="flex items-center justify-center gap-2 bg-white text-[#BD1E51] px-6 py-3 rounded-full text-base font-bold shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gray-100 hover:shadow-xl"
            >
              {button.icon}
              <span>{button.text}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeBanner;
