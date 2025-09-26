// src/components/CartForBuyMedicine.jsx

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../../Features/cartSlice';
import { FaPlus, FaMinus } from 'react-icons/fa';

function CartForBuyMedicine() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const [total, setTotal] = useState(0);

  // Correctly calculate total and listen for changes in the cart
  useEffect(() => {
    let calculatedTotal = 0;
    // Iterate over the cart items to sum up the total price
    Object.values(cart).forEach(item => {
      calculatedTotal += item.offer_price * item.quantity;
    });
    setTotal(calculatedTotal.toFixed(2));
  }, [cart]);

  function deleteFromCart(productId) {
    dispatch(removeFromCart(productId));
  }

  function handleIncreaseQuantity(product) {
    dispatch(increaseQuantity(product.medicine_id));
  }

  function handleDecreaseQuantity(product) {
    dispatch(decreaseQuantity(product.medicine_id));
  }

  return (
    <div className="z-50 absolute top-16 right-0 border border-gray-300 bg-white lg:w-96 max-h-max mt-2 rounded-lg shadow-xl text-[#BD1E51]">
      <div className="p-4">
        <h2 className="text-center text-2xl font-bold mb-4">Your Cart</h2>
        {Object.keys(cart).length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        ) : (
          <div>
            <ul>
              {Object.values(cart).map(product => (
                <li key={product.medicine_id} className="flex flex-col sm:flex-row justify-between items-center mb-4 pb-4 border-b border-gray-200 last:border-b-0">
                  <div className='flex items-center gap-4 w-full'>
                    <img src={product.product_image} alt={product.name} className='w-16 h-16 object-cover rounded-md' />
                    <div className='flex-grow'>
                      <span className='font-semibold text-lg'>{product.name}</span>
                      <div className='flex items-center mt-1'>
                        <button
                          onClick={() => handleDecreaseQuantity(product)}
                          className="text-gray-600 hover:text-red-500 transition-colors"
                        >
                          <FaMinus />
                        </button>
                        <span className="mx-2 font-medium">{product.quantity}</span>
                        <button
                          onClick={() => handleIncreaseQuantity(product)}
                          className="text-gray-600 hover:text-green-500 transition-colors"
                        >
                          <FaPlus />
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div className='flex flex-col items-end w-full sm:w-auto mt-2 sm:mt-0'>
                    <span className='text-lg font-bold'>₹{(product.offer_price * product.quantity).toFixed(2)}</span>
                    <button
                      onClick={() => deleteFromCart(product.medicine_id)}
                      className='text-red-500 hover:text-red-700 transition-colors mt-1'
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="currentColor">
                        <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                      </svg>
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-4 border-t-2 border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xl font-bold">Total:</span>
                <span className="text-2xl font-bold text-gray-800">₹{total}</span>
              </div>
              <button className="w-full bg-[#BD1E51] text-white py-3 rounded-lg hover:bg-[#A01D45] transition font-bold">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartForBuyMedicine;