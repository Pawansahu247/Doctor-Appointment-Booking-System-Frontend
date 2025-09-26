// src/components/VideoConsult.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { FaVideo } from 'react-icons/fa';

function VideoConsult() {
  return (
    <div className='flex flex-col items-center justify-center min-h-[calc(100vh-200px)] p-8'>
      <div className='text-center p-8 bg-white rounded-lg shadow-xl max-w-xl mx-auto'>
        <FaVideo className='text-6xl text-[#BD1E51] mx-auto mb-4' />
        <h1 className='text-4xl font-extrabold text-[#333] mb-4'>
          Start a Video Consultation
        </h1>
        <p className='text-gray-600 mb-6'>
          Connect with a doctor from the comfort of your home. It's secure, fast, and easy.
        </p>
        <Link 
          to="/video-room"
          className='inline-block bg-[#BD1E51] text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-[#A01D45] transition-colors duration-300'
        >
          Start Consultation Now
        </Link>
      </div>
    </div>
  );
}

export default VideoConsult;