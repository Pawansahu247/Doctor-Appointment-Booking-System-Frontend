// src/components/BuyMedicine.jsx

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FaHeart, FaShoppingCart, FaStar, FaSearch, FaPlus, FaMinus } from 'react-icons/fa';
import './BuyMedicine.css';

function BuyMedicine() {
  const [medicine, setMedicine] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredMedicine, setFilteredMedicine] = useState([]);
  const [cart, setCart] = useState({});

  useEffect(() => {
    fetchMedicines();
  }, []);

  useEffect(() => {
    const results = medicine.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredMedicine(results);
  }, [searchTerm, medicine]);

  async function fetchMedicines() {
    setLoading(true);
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=12`); 
      
      if (response.status === 200) {
        const mockData = response.data.map((item, index) => ({
          medicine_id: item.id,
          name: `Medicine ${index + 1}`,
          product_image: item.thumbnailUrl,
          usage: ['For fever', 'For pain relief', 'Supports immunity'],
          offer_price: (250 - index * 5).toFixed(2),
          mrp: (280 - index * 5).toFixed(2),
          inStock: true,
          rating: (4.5 + Math.random() * 0.5).toFixed(1),
          reviews: Math.floor(Math.random() * 200) + 50,
        }));
        setMedicine(mockData);
      }
    } catch (error) {
      console.error("Failed to fetch medicine data:", error);
    } finally {
      setLoading(false);
    }
  }

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleAddToCart = (item) => {
    setCart(prevCart => {
      const newCart = { ...prevCart };
      newCart[item.medicine_id] = (newCart[item.medicine_id] || 0) + 1;
      return newCart;
    });
  };

  const handleRemoveFromCart = (item) => {
    setCart(prevCart => {
      const newCart = { ...prevCart };
      if (newCart[item.medicine_id] > 1) {
        newCart[item.medicine_id] -= 1;
      } else {
        delete newCart[item.medicine_id];
      }
      return newCart;
    });
  };

  const isItemInCart = (id) => {
    return cart.hasOwnProperty(id);
  };

  if (loading) {
    return (
      <div className='flex items-center justify-center min-h-screen text-lg text-gray-600'>
        <p>Loading medicines...</p>
      </div>
    );
  }

  return (
    <div className='bg-gray-50 min-h-screen p-8'>
      <div className='container mx-auto'>
        <h1 className='text-4xl font-extrabold text-[#BD1E51] text-center mb-10'>
          Shop Our Medicines
        </h1>

        <div className='flex items-center justify-center mb-8'>
          <div className='relative w-full max-w-lg'>
            <input
              type='text'
              placeholder='Search for medicines...'
              value={searchTerm}
              onChange={handleSearchChange}
              className='w-full py-3 pl-12 pr-4 text-gray-700 bg-white border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-[#BD1E51] transition duration-300'
            />
            <FaSearch className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400' />
          </div>
        </div>

        {filteredMedicine.length === 0 && !loading ? (
          <div className="text-center text-gray-500 text-lg">
            No medicines found. Please try a different search term.
          </div>
        ) : (
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {filteredMedicine.map(product => (
              <div
                key={product.medicine_id}
                className="relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Product Image and Title Section - now visible directly */}
                <div className="p-4 flex flex-col items-center">
                  <img
                    src={product.product_image}
                    alt={product.name}
                    className="w-full h-40 object-contain mb-4 rounded-md"
                  />
                  <h2 className="text-lg font-semibold text-center text-[#BD1E51]">
                    {product.name}
                  </h2>
                </div>

                {/* Details section - now visible without hover */}
                <div className="bg-white p-6 flex flex-col justify-between">
                  <div className="flex-grow">
                    <h2 className="text-xl font-bold text-[#BD1E51] mb-2">{product.name}</h2>
                    <ul className='mb-4'>
                      {product.usage && product.usage.map((useCase, index) => (
                        <li key={index} className="text-sm text-gray-500 font-medium list-disc ml-4">
                          {useCase}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-col gap-y-3">
                    <div className='flex items-center justify-between'>
                      <div>
                        <span className='text-2xl font-bold text-gray-800'>
                          ₹ {product.offer_price}
                        </span>
                        <span className='ml-2 text-sm text-gray-400 line-through'>
                          ₹ {product.mrp}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex gap-x-3">
                      {isItemInCart(product.medicine_id) ? (
                        <div className="quantity-controls flex items-center justify-center space-x-2">
                          <button onClick={() => handleRemoveFromCart(product)} className="text-white bg-[#BD1E51] rounded-full p-2 hover:bg-[#A01D45] transition-colors"><FaMinus /></button>
                          <span className="quantity font-semibold">{cart[product.medicine_id]}</span>
                          <button onClick={() => handleAddToCart(product)} className="text-white bg-[#BD1E51] rounded-full p-2 hover:bg-[#A01D45] transition-colors"><FaPlus /></button>
                        </div>
                      ) : (
                        <button
                          onClick={() => handleAddToCart(product)}
                          className="flex-1 bg-[#F1B814] text-white py-2 px-4 rounded-full text-center text-sm font-semibold transition-transform duration-300 hover:shadow-lg transform hover:scale-105"
                        >
                          <FaShoppingCart className="inline-block mr-2" /> Add to Cart
                        </button>
                      )}
                      
                      <Link
                        to={`/medicine/details/${product.medicine_id}`}
                        state={{ product }}
                        className='flex-1 border-2 border-[#BD1E51] text-[#BD1E51] py-2 px-4 rounded-full text-center text-sm font-semibold transition-colors duration-300 hover:bg-[#BD1E51] hover:text-white'
                      >
                        Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default BuyMedicine;