// src/pages/contacts.tsx
import React from 'react';
import Header from '../components/Header';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Contacts: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto py-8">
        <h1 className="text-center text-4xl mb-8">Contacts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl mb-4">Contact Details</h2>
            <p>
              Name: Your Name<br />
              Phone: +1 (555) 123-4567<br />
              Email: your.email@example.com<br />
            </p>

            <h2 className="text-2xl mt-8 mb-4">Billing Details</h2>
            <p>
              Business Name: Your Business Name<br />
              Address: 1234 Example Street, Suite 567<br />
              City, State, ZIP Code<br />
              Country
            </p>
          </div>
          <div>
            <h2 className="text-2xl mb-4">Location</h2>
            <div className="relative h-[400px] w-full">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434507107!2d144.9630577153215!3d-37.81362797975119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce7e33!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1629759795951!5m2!1sen!2sus"
                title="Your Location"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>

            <h2 className="text-2xl mt-8 mb-4">Follow Me</h2>
            <div className="flex items-center space-x-4">
              <a href="https://www.facebook.com/your_username" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook size={32} />
              </a>
              <a href="https://www.instagram.com/your_username" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram size={32} />
              </a>
              <a href="https://www.twitter.com/your_username" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter size={32} />
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contacts;
