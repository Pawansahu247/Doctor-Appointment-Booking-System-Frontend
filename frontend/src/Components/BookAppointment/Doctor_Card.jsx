import React from 'react';
import { Link } from 'react-router-dom';


function Doctor_Card({ doctor }) {
  const isHighlyRated = doctor.ratings >= 4.2;
  const ratingBgColor = isHighlyRated ? 'bg-green-500' : 'bg-orange-500';

  return (
    <div className='py-4 px-6 w-full max-h-max flex flex-col sm:flex-row gap-4 rounded-xl border border-gray-200 shadow-md hover:shadow-xl duration-200'>
      
      {/* Profile Section */}
      <div className='flex flex-col items-center justify-start sm:justify-center'>
        <div className='w-32 h-32 md:w-40 md:h-40 flex-shrink-0'>
          <img
            className='rounded-full w-full h-full object-cover'
            src={doctor.profilePicture}
            alt="Doctor Profile"
          />
        </div>
        <Link to={`/doctor/${doctor.id}`} className='mt-2 text-base font-light text-blue-600 hover:font-semibold hover:underline duration-200'>
          View Profile &gt;&gt;
        </Link>
      </div>

      {/* Details Section */}
      <div className='flex-grow flex flex-col justify-between'>
        <div className='mb-4'>
          <h1 className='text-2xl font-bold text-indigo-900'>Dr. {doctor.firstName} {doctor.lastName}</h1>
          <p className='text-lg font-medium text-pink-600 mt-1'>{doctor.specialization}</p>
          <p className='text-base text-gray-600'>{doctor.experience} of Experience</p>
          <p className='text-sm text-gray-500 mt-1'>{doctor.clinicAddress.fullAddress}</p>
        </div>
        
        {/* Ratings and Fees */}
        <div className='flex flex-col gap-2 md:flex-row md:items-center md:justify-between'>
          <div className='flex items-center'>
            <div className={`${ratingBgColor} p-1 flex text-white gap-1 rounded-lg`}>
              <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#FFFFFF">
                <path d="M720-120H280v-520l280-280 50 50q7 7 11.5 19t4.5 23v14l-44 174h258q32 0 56 24t24 56v80q0 7-2 15t-4 15L794-168q-9 20-30 34t-44 14Zm-360-80h360l120-280v-80H480l54-220-174 174v406Zm0-406v406-406Zm-80-34v80H160v360h120v80H80v-520h200Z" />
              </svg>
              <p className='text-sm'>{doctor.ratings}</p>
            </div>
          </div>
          <div className='text-right md:text-left'>
            <h1 className='text-lg font-bold text-green-700'>
              ₹{doctor.appointmentFee} <span className='font-normal text-gray-500'>consultation fee</span>
            </h1>
          </div>
        </div>

        {/* Action Buttons */}
        <div className='mt-5 flex flex-col md:flex-row items-center justify-end gap-2'>
          <button className='w-full md:w-auto px-4 py-2 text-base font-medium text-white rounded-lg bg-pink-600 hover:bg-pink-700 duration-100'>
            Consult Online
          </button>
          <button className='w-full md:w-auto px-4 py-2 text-base font-medium text-pink-600 rounded-lg border border-pink-600 hover:bg-pink-100 duration-100'>
            Book Clinic Visit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Doctor_Card;