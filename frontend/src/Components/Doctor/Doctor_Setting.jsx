// src/Components/Doctor/Doctor_Setting.jsx

import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun, FaGlobe, FaChevronDown, FaCog } from 'react-icons/fa';
import axios from 'axios';

function Doctor_Setting() {
  const [loading, setLoading] = useState(true);
  const [settings, setSettings] = useState({
    theme: 'light',
    language: 'en',
    liveOnWebsite: false,
  });
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  // Simulating fetching settings from an API
  useEffect(() => {
    async function fetchSettings() {
      setLoading(true);
      try {
        // Replace this with your actual API call
        // const response = await axios.get('your-settings-api-endpoint');
        // setSettings(response.data.data);

        // Mock data for a successful fetch to demonstrate functionality
        setTimeout(() => {
          setSettings({
            theme: 'light',
            language: 'en',
            liveOnWebsite: true,
          });
          setLoading(false);
        }, 1500); // Simulates a 1.5-second network delay
      } catch (error) {
        console.error('Failed to fetch settings:', error);
        setLoading(false);
      }
    }
    fetchSettings();
  }, []);

  const handleSettingChange = (e) => {
    const { name, checked } = e.target;
    setSettings((prevSettings) => ({
      ...prevSettings,
      [name]: checked,
    }));
  };

  const handleLanguageChange = (lang) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      language: lang,
    }));
    setIsLanguageDropdownOpen(false);
  };

  const toggleTheme = () => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      theme: prevSettings.theme === 'light' ? 'dark' : 'light',
    }));
  };

  const themeClasses = settings.theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-800';

  // Render a loading screen if data is not yet available
  if (loading) {
    return (
      <div className={`flex items-center justify-center min-h-screen ${themeClasses}`}>
        <div className="flex items-center justify-center space-x-2 animate-pulse">
          <FaCog className="animate-spin text-4xl text-[#BD1E51]" />
          <p className="text-xl font-medium">Loading settings...</p>
        </div>
      </div>
    );
  }

  // Render the settings page once data is loaded
  return (
    <div className={`min-h-screen py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${themeClasses}`}>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center mb-10">
          Doctor Settings
        </h1>
        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border dark:border-gray-700">
          
          {/* Theme Settings */}
          <div className="flex items-center justify-between mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center">
              {settings.theme === 'dark' ? (
                <FaMoon className="text-2xl text-gray-400 mr-3" />
              ) : (
                <FaSun className="text-2xl text-yellow-500 mr-3" />
              )}
              <h2 className="text-xl font-semibold">Appearance</h2>
            </div>
            <button
              onClick={toggleTheme}
              className={`flex items-center justify-center px-4 py-2 rounded-full font-semibold transition-all duration-300 ${settings.theme === 'dark' ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
            >
              {settings.theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>

          {/* Language Settings */}
          <div className="flex items-center justify-between mb-6 pb-6 border-b border-gray-200 dark:border-gray-700 relative">
            <div className="flex items-center">
              <FaGlobe className="text-2xl text-blue-500 mr-3" />
              <h2 className="text-xl font-semibold">Language</h2>
            </div>
            <div className="relative">
              <button
                onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                className="flex items-center px-4 py-2 rounded-full font-semibold bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
              >
                {settings.language === 'en' ? 'English' : 'Hindi'}
                <FaChevronDown className={`ml-2 transform transition-transform duration-300 ${isLanguageDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {isLanguageDropdownOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 border dark:border-gray-700 z-10">
                  <button
                    onClick={() => handleLanguageChange('en')}
                    className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    English
                  </button>
                  <button
                    onClick={() => handleLanguageChange('hi')}
                    className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Hindi
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Account Settings */}
          <div>
            <div className="flex items-center mb-6">
              <h2 className="text-xl font-semibold flex items-center">
                <FaCog className="mr-3 text-gray-500 dark:text-gray-400" />
                Account Settings
              </h2>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <span className="text-lg">Set status to Live on Website</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  name="liveOnWebsite"
                  checked={settings.liveOnWebsite}
                  onChange={handleSettingChange}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#BD1E51] rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-500 peer-checked:bg-[#BD1E51]"></div>
              </label>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Doctor_Setting;