// src/pages/pricing.tsx
import React from 'react';
import Header from '../components/Header';

const Pricing: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto py-8">
        <h1 className="text-center text-4xl mb-8">Pricing</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Standard Package */}
          <div className="bg-gray-800 border p-4 rounded shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl mb-4">Standard Package (99€)</h2>
            <ul className="list-disc pl-5">
              <li>3 professionally edited photos</li>
            </ul>
          </div>

          {/* Premium Package */}
          <div className="bg-gray-800 border p-4 rounded shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl mb-4">Premium Package (349€)</h2>
            <ul className="list-disc pl-5">
              <li>5 beautifully edited photos</li>
              <li>Choice of a makeup artist or costume designer</li>
            </ul>
            <h3 className="text-xl mt-4">Add-ons:</h3>
            <ul className="list-disc pl-5">
              <li>Printed photos (29€ per photo)</li>
              <li>Extra edited photos (29€ per photo)</li>
            </ul>
          </div>

          {/* Deluxe Package */}
          <div className="bg-gray-800 border p-4 rounded shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl mb-4">Deluxe Package (649€)</h2>
            <ul className="list-disc pl-5">
              <li>8 professionally edited photos</li>
              <li>Makeup artist and costume designer included</li>
              <li>Two stunning locations</li>
              <li>Printed photos included</li>
            </ul>
            <h3 className="text-xl mt-4">Add-ons:</h3>
            <ul className="list-disc pl-5">
              <li>Extra edited photos (29€ per photo)</li>
            </ul>
          </div>
        </div>

        {/* Tailored Experience */}
        <div className="bg-gray-100 border p-4 mt-8 rounded shadow-md hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl mb-4">Tailored Experience (1000€)</h2>
          <ul className="list-disc pl-5">
            <li>16 professionally edited photos</li>
            <li>Makeup artist and costume designer included</li>
            <li>Up to three breathtaking locations</li>
            <li>Two custom costume changes</li>
            <li>Printed photos included</li>
          </ul>
          <h3 className="text-xl mt-4">Add-ons:</h3>
          <ul className="list-disc pl-5">
            <li>Extra edited photos (30€ per photo)</li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Pricing;
