// src/pages/about.tsx
import React from 'react';
import Header from '../components/Header';

const About: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto py-8">
        <h1 className="text-center text-4xl mb-8">About Me</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Text */}
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              fermentum est ut nunc pharetra, et lobortis libero suscipit. Donec
              bibendum nulla eu nisi vestibulum, a aliquet mauris lobortis.
              Donec ullamcorper odio vel nulla lobortis, id tempus urna
              convallis.
            </p>
            {/* Signature */}
            <div className="mt-4">
              <img
                src="https://your-signature-image-url"
                alt="Your Signature"
                className="max-w-xs mx-auto md:mx-0"
              />
            </div>
          </div>
          {/* Photo */}
          <div>
            <img
              src="https://your-photo-url"
              alt="Your Name"
              className="max-w-full h-auto mx-auto md:mx-0"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
