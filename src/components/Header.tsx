// src/components/Header.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 py-4 shadow-md">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center">
            <Image src="/path/to/your/logo.png" alt="Logo" width={100} height={40} />
            <span className="text-2xl font-semibold ml-2 text-gray-100">Your Site Name</span>
          </a>
        </Link>
        <nav className="flex items-center space-x-4">
          <Link href="/about">
            <a className="text-lg text-gray-800">About Me</a>
          </Link>
          <Link href="/my-work">
            <a className="text-lg text-gray-800">My Work</a>
          </Link>
          <Link href="/pricing">
            <a className="text-lg text-gray-800">Pricing</a>
          </Link>
          <Link href="/contacts">
            <a className="text-lg text-gray-800">Contacts</a>
          </Link>
          <Link href="/login">
            <a className="bg-gray-100 hover:bg-gray-200 text-white text-lg px-4 py-2 rounded transition">Login</a>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
