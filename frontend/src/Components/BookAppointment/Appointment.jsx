import React from 'react'
import Doctor_Card from './Doctor_Card'
import doctors from './Doctor_Data.json'
import FAQ_Chatbot from './FAQ_Chatbot' // Import the new component

function Appointment() {
  return (
    <div className='flex w-full'>
      <div
        className='grid grid-cols-2 gap-10 w-3/4 px-10 h-screen overflow-y-scroll'
      >
        {doctors.map((doctor) => (
          <Doctor_Card key={doctor.id} doctor={doctor} />
        ))}
      </div>
      <div className='w-1/4 h-screen'>
        <FAQ_Chatbot />
      </div>
    </div>
  )
}

export default Appointment