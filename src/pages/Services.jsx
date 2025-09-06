import { useState } from 'react';
import data from '../data/services.js';

export default function Services() {
  const [activeCat, setActiveCat] = useState(data.categories[0].key);
  const [activeItem, setActiveItem] = useState(data.categories[0].items[0]);

  const currentCat = data.categories.find((c) => c.key === activeCat);

  return (
    <div className="container mx-auto px-4 py-20">
      {/* Page Header */}
      <h1 className="text-3xl md:text-5xl font-extrabold text-primary text-center">
        Our Services
      </h1>
      <p className="mt-4 text-gray-700 max-w-3xl mx-auto text-center text-lg leading-relaxed">
        Explore our core offerings. Click a category to view available services, then select a service for more details.
      </p>

      <div className="mt-12 grid md:grid-cols-3 gap-8">
        {/* Categories + Services List */}
        <div className="md:col-span-1 space-y-6">
          {data.categories.map((cat) => (
            <div
              key={cat.key}
              className={`rounded-2xl border shadow-sm bg-white overflow-hidden transition hover:shadow-md ${
                activeCat === cat.key ? 'border-primary' : 'border-gray-200'
              }`}
            >
              <button
                className={`w-full text-left px-5 py-4 font-semibold text-lg transition-colors duration-300 ${
                  activeCat === cat.key ? 'bg-primary text-white' : 'bg-gray-50 hover:bg-gray-100'
                }`}
                onClick={() => {
                  setActiveCat(cat.key);
                  setActiveItem(cat.items[0]);
                }}
              >
                {cat.title}
              </button>

              {activeCat === cat.key && (
                <div className="px-4 pb-4 mt-2 space-y-2">
                  {cat.items.map((item) => (
                    <button
                      key={item.key}
                      className={`w-full text-left text-sm px-3 py-2 rounded-xl transition-colors duration-300 ${
                        activeItem.key === item.key
                          ? 'bg-primary text-white shadow'
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                      }`}
                      onClick={() => setActiveItem(item)}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Service Details */}
        <div className="md:col-span-2 rounded-2xl bg-white border shadow-md p-8 transition hover:shadow-lg">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <img
              src={activeItem.img}
              alt={activeItem.name}
              className="w-full h-64 object-cover rounded-xl border border-gray-200 shadow-sm transition-transform duration-300 hover:scale-105"
            />
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-primary">
                {activeItem.name}
              </h3>
              <p className="text-gray-700 mt-3 leading-relaxed">{activeItem.description}</p>
              <ul className="mt-5 list-disc list-inside text-gray-700 space-y-2">
                {activeItem.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
              <button className="mt-6 inline-block px-6 py-3 rounded-lg bg-secondary text-white font-medium hover:bg-secondary-light transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
