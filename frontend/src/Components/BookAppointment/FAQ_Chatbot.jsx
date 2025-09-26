import React, { useState, useEffect, useRef } from 'react';

const FAQ_Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! I'm your Healthivo Assistant. How can I help you today?", sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const chatEndRef = useRef(null);

  const handleSend = () => {
    if (input.trim() === '') return;

    const newMessages = [...messages, { text: input, sender: 'user' }];
    setMessages(newMessages);

    const botResponse = getBotResponse(input);
    setTimeout(() => {
      setMessages(prevMessages => [...prevMessages, { text: botResponse, sender: 'bot' }]);
    }, 500);

    setInput('');
  };

  const getBotResponse = (userMessage) => {
    const lowerCaseMessage = userMessage.toLowerCase();
    
    // Section 1: Appointments
    if (lowerCaseMessage.includes('book') || lowerCaseMessage.includes('how to book')) {
      return "You can book by clicking the “Consult Online” or “Book Appointment” button on the Top of website.";
    }
    if (lowerCaseMessage.includes('reschedule')) {
      return "Yes, you can reschedule through your 'My Appointments' page before the appointment time.";
    }
    if (lowerCaseMessage.includes('cancel')) {
      return "Yes, you can cancel anytime before the appointment. Refunds depend on the doctor’s cancellation policy.";
    }
    if (lowerCaseMessage.includes('miss my appointment') || lowerCaseMessage.includes('missed appointment')) {
      return "If you miss your appointment, it will be marked as “missed”. Please contact support for rebooking or refund options.";
    }

    // Section 2: Fees
    if (lowerCaseMessage.includes('consultation fee') || lowerCaseMessage.includes('what is the fee')) {
      return "The consultation fee is shown on each doctor’s card. It varies based on their experience and specialization.";
    }
    if (lowerCaseMessage.includes('online cheaper') || lowerCaseMessage.includes('cost less')) {
      return "Sometimes online consultations may cost less, but the fee depends on the doctor.";
    }

    // Section 3: Doctors
    if (lowerCaseMessage.includes('choose right doctor') || lowerCaseMessage.includes('how to choose')) {
      return "You can compare doctors by their specialization, years of experience, rating, and consultation fee.";
    }
    if (lowerCaseMessage.includes('doctor profile') || lowerCaseMessage.includes('see profile')) {
      return "Yes, click “View Profile” under the doctor’s name to see their details.";
    }

    // Section 4: Online Consultation
    if (lowerCaseMessage.includes('online consult') || lowerCaseMessage.includes('how to consult online')) {
      return "After booking, you’ll receive a secure video link or chat option for your online consultation.";
    }
    if (lowerCaseMessage.includes('install app') || lowerCaseMessage.includes('need app')) {
      return "No extra app is needed. You can join directly from your browser using the provided link.";
    }

    // Section 5: Other Questions
    if (lowerCaseMessage.includes('prescription')) {
      return "Yes, doctors can provide e-prescriptions after the consultation, which you can download.";
    }
    if (lowerCaseMessage.includes('contact')) {
  return `For further assistance, you can contact our Healthivo support team:support@healthivo.com or +91 12345 67890`;
}

    
    // Default fallback response
    return "I'm sorry, I don't understand that. Please ask a question about appointments, fees, or cancellations.";
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  useEffect(() => {
    if (isOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  return (
    // Fixed position container for the whole chat widget
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        // Full chatbot interface
        <div className='flex flex-col h-[600px] w-[380px] rounded-lg overflow-hidden bg-white shadow-xl transform transition-all duration-300'>
          <div className='p-4 bg-purple-900 text-white font-bold text-lg flex justify-between items-center'>
            Healthivo Assistant
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-300">
              {/* Close icon (e.g., an 'x') */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className='flex-1 p-4 overflow-y-auto space-y-4'>
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`p-3 rounded-xl max-w-[75%] ${msg.sender === 'user' ? 'bg-pink-100 text-gray-800' : 'bg-gray-200 text-gray-800'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>
          <div className='p-4 bg-gray-100 flex items-center gap-2'>
            <input
              type='text'
              className='flex-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500'
              placeholder='Type a message...'
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button
              onClick={handleSend}
              className='bg-pink-600 text-white p-3 rounded-lg hover:bg-pink-700 transition duration-200'
            >
              Send
            </button>
          </div>
        </div>
      ) : (
        // Small, circular logo/button
        <button
          onClick={() => setIsOpen(true)}
          className="bg-purple-900 text-white p-4 rounded-full shadow-lg hover:bg-purple-800 transition duration-300"
        >
          {/* Chat icon */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default FAQ_Chatbot;