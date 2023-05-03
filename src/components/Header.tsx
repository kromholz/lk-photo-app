// src/components/Header.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-100 py-4 shadow-md">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center">
            <Image src="/logo.png" alt="Logo" width={60} height={30} />
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
            <a className="bg-gray-800 hover:bg-gray-700 text-white text-lg px-4 py-2 rounded transition">Login</a>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
