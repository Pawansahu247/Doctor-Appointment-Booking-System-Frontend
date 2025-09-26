import React from 'react';

function HealthTips() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen flex flex-col">
      <section id="posts" className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-extrabold mb-10 text-center text-gray-800">Your Guide to a Healthier Life</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Card 1: Mindfulness & Meditation */}
            <div className="relative bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
              <div
                className="absolute inset-0 bg-cover bg-center rounded-2xl transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544367520-2c700936081e?q=80&w=2600&auto=format&fit=crop')" }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-transparent to-transparent opacity-80 rounded-2xl"></div>
              <div className="relative z-10 text-gray-800 pt-24">
                <h3 className="text-2xl font-bold mb-2 drop-shadow-lg">Mindfulness & Meditation</h3>
                <p className="mb-4 text-gray-700 text-sm">Discover simple breathing techniques to reduce stress and improve focus in your daily routine.</p>
                <a href="#post1" className="inline-block px-4 py-2 text-sm font-semibold rounded-full bg-white text-blue-700 hover:bg-gray-200 transition-colors duration-200">Read More &rarr;</a>
              </div>
            </div>

            {/* Card 2: Healthy Eating Habits */}
            <div className="relative bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
              <div
                className="absolute inset-0 bg-cover bg-center rounded-2xl transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1571019613454-1cb669a8bb6b?q=80&w=2600&auto=format&fit=crop')" }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-green-900 via-transparent to-transparent opacity-80 rounded-2xl"></div>
              <div className="relative z-10 text-gray-800 pt-24">
                <h3 className="text-2xl font-bold mb-2 drop-shadow-lg">Healthy Eating Habits</h3>
                <p className="mb-4 text-gray-700 text-sm">Learn about a balanced diet and superfoods that can boost your energy and overall well-being.</p>
                <a href="#post2" className="inline-block px-4 py-2 text-sm font-semibold rounded-full bg-white text-green-700 hover:bg-gray-200 transition-colors duration-200">Read More &rarr;</a>
              </div>
            </div>
            
            {/* Card 3: Fitness and Movement */}
            <div className="relative bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
              <div
                className="absolute inset-0 bg-cover bg-center rounded-2xl transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1571757767119-9a181d57b494?q=80&w=2600&auto=format&fit=crop')" }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900 via-transparent to-transparent opacity-80 rounded-2xl"></div>
              <div className="relative z-10 text-gray-800 pt-24">
                <h3 className="text-2xl font-bold mb-2 drop-shadow-lg">Fitness and Movement</h3>
                <p className="mb-4 text-gray-700 text-sm">Simple and effective home workouts you can do to stay fit and active without needing a gym.</p>
                <a href="#post3" className="inline-block px-4 py-2 text-sm font-semibold rounded-full bg-white text-purple-700 hover:bg-gray-200 transition-colors duration-200">Read More &rarr;</a>
              </div>
            </div>

            {/* Card 4: Gut Health */}
            <div className="relative bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
              <div
                className="absolute inset-0 bg-cover bg-center rounded-2xl transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1540420773420-3366772f4993?q=80&w=2600&auto=format&fit=crop')" }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-orange-900 via-transparent to-transparent opacity-80 rounded-2xl"></div>
              <div className="relative z-10 text-gray-800 pt-24">
                <h3 className="text-2xl font-bold mb-2 drop-shadow-lg">The Gut-Health Connection</h3>
                <p className="mb-4 text-gray-700 text-sm">Discover how a healthy gut microbiome can impact your digestion, mood, and overall immunity.</p>
                <a href="#post4" className="inline-block px-4 py-2 text-sm font-semibold rounded-full bg-white text-orange-700 hover:bg-gray-200 transition-colors duration-200">Read More &rarr;</a>
              </div>
            </div>

            {/* Card 5: Digital Detox */}
            <div className="relative bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
              <div
                className="absolute inset-0 bg-cover bg-center rounded-2xl transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1505324021200-a35978a3c8e4?q=80&w=2600&auto=format&fit=crop')" }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-red-900 via-transparent to-transparent opacity-80 rounded-2xl"></div>
              <div className="relative z-10 text-gray-800 pt-24">
                <h3 className="text-2xl font-bold mb-2 drop-shadow-lg">Taking a Digital Detox</h3>
                <p className="mb-4 text-gray-700 text-sm">Tips on how to unplug and reduce screen time for improved focus and mental well-being.</p>
                <a href="#post5" className="inline-block px-4 py-2 text-sm font-semibold rounded-full bg-white text-red-700 hover:bg-gray-200 transition-colors duration-200">Read More &rarr;</a>
              </div>
            </div>

            {/* Card 6: The Power of Sleep */}
            <div className="relative bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
              <div
                className="absolute inset-0 bg-cover bg-center rounded-2xl transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1578857474447-926c045b8ed4?q=80&w=2600&auto=format&fit=crop')" }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80 rounded-2xl"></div>
              <div className="relative z-10 text-gray-800 pt-24">
                <h3 className="text-2xl font-bold mb-2 drop-shadow-lg">The Power of Sleep</h3>
                <p className="mb-4 text-gray-700 text-sm">Discover essential sleep hygiene tips to improve your rest and boost your mental clarity.</p>
                <a href="#post6" className="inline-block px-4 py-2 text-sm font-semibold rounded-full bg-white text-gray-700 hover:bg-gray-200 transition-colors duration-200">Read More &rarr;</a>
              </div>
            </div>
            
            {/* Card 7: Soaking Up Sunlight */}
            <div className="relative bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
              <div
                className="absolute inset-0 bg-cover bg-center rounded-2xl transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517406450-ac87b212891f?q=80&w=2600&auto=format&fit=crop')" }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-yellow-900 via-transparent to-transparent opacity-80 rounded-2xl"></div>
              <div className="relative z-10 text-gray-800 pt-24">
                <h3 className="text-2xl font-bold mb-2 drop-shadow-lg">Soaking Up Sunlight</h3>
                <p className="mb-4 text-gray-700 text-sm">Learn how a few minutes of safe sun exposure can boost your mood and vitamin D levels.</p>
                <a href="#post7" className="inline-block px-4 py-2 text-sm font-semibold rounded-full bg-white text-yellow-700 hover:bg-gray-200 transition-colors duration-200">Read More &rarr;</a>
              </div>
            </div>
            
            {/* Card 8: The Value of Community */}
            <div className="relative bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
              <div
                className="absolute inset-0 bg-cover bg-center rounded-2xl transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1552581234-2e65d2109849?q=80&w=2600&auto=format&fit=crop')" }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-pink-900 via-transparent to-transparent opacity-80 rounded-2xl"></div>
              <div className="relative z-10 text-gray-800 pt-24">
                <h3 className="text-2xl font-bold mb-2 drop-shadow-lg">The Value of Community</h3>
                <p className="mb-4 text-gray-700 text-sm">Explore why strong social connections are vital for your mental and physical health.</p>
                <a href="#post8" className="inline-block px-4 py-2 text-sm font-semibold rounded-full bg-white text-pink-700 hover:bg-gray-200 transition-colors duration-200">Read More &rarr;</a>
              </div>
            </div>

            {/* Card 9: Hydration */}
            <div className="relative bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
              <div
                className="absolute inset-0 bg-cover bg-center rounded-2xl transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1594953331828-d70377f06d2c?q=80&w=2600&auto=format&fit=crop')" }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-sky-900 via-transparent to-transparent opacity-80 rounded-2xl"></div>
              <div className="relative z-10 text-gray-800 pt-24">
                <h3 className="text-2xl font-bold mb-2 drop-shadow-lg">Mastering Hydration</h3>
                <p className="mb-4 text-gray-700 text-sm">Simple ways to ensure you're drinking enough water throughout the day for better health.</p>
                <a href="#post9" className="inline-block px-4 py-2 text-sm font-semibold rounded-full bg-white text-sky-700 hover:bg-gray-200 transition-colors duration-200">Read More &rarr;</a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default HealthTips;