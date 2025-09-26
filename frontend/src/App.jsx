import React, { useState } from 'react';
import Home from './Components/Home/Home';
import LoadingScreen from './Components/Header/LoadingScreen'; // LoadingScreen ko import karein

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Yeh function loading animation ke baad call hoga
  const handleLoadingEnd = () => {
    setIsLoading(false);
  };

  return (
    <div className="App">
      {isLoading ? (
        // Agar isLoading true hai, toh loading screen dikhao
        <LoadingScreen onAnimationEnd={handleLoadingEnd} />
      ) : (
        // Agar isLoading false hai, toh Home page dikhao
        <Home />
      )}
    </div>
  );
}

export default App;