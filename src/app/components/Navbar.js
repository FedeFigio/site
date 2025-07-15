'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-900">SITE</Link>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none"
          >
            <svg
              className="h-6 w-6 text-blue-900"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-900 transition duration-300">Home</Link>
            <Link href="/servizi" className="text-gray-700 hover:text-blue-900 transition duration-300">Servizi</Link>
            <Link href="/chi-siamo" className="text-gray-700 hover:text-blue-900 transition duration-300">Chi Siamo</Link>
            <Link href="/progetti" className="text-gray-700 hover:text-blue-900 transition duration-300">Progetti</Link>
            <Link href="/gallery" className="text-gray-700 hover:text-blue-900 transition duration-300">Gallery</Link>
            <Link href="/contatti" className="text-gray-700 hover:text-blue-900 transition duration-300">Contatti</Link>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} pt-4`}>
          <div className="flex flex-col space-y-4">
            <Link href="/" className="text-gray-700 hover:text-blue-900 transition duration-300">Home</Link>
            <Link href="/servizi" className="text-gray-700 hover:text-blue-900 transition duration-300">Servizi</Link>
            <Link href="/chi-siamo" className="text-gray-700 hover:text-blue-900 transition duration-300">Chi Siamo</Link>
            <Link href="/progetti" className="text-gray-700 hover:text-blue-900 transition duration-300">Progetti</Link>
            <Link href="/gallery" className="text-gray-700 hover:text-blue-900 transition duration-300">Gallery</Link>
            <Link href="/contatti" className="text-gray-700 hover:text-blue-900 transition duration-300">Contatti</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}