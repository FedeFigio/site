'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = [
    { id: 'all', name: 'Tutti i Progetti' },
    { id: 'idraulici', name: 'Sistemi Idraulici' },
    { id: 'termici', name: 'Sistemi Termici' },
    { id: 'elettrici', name: 'Sistemi Elettrici' }
  ];

  const galleryItems = [
    {
      id: 1,
      category: 'idraulici',
      title: 'Impianto Idraulico Industriale',
      image: '/images/gallery/idraulico-1.jpg',
      description: 'Sistema idraulico industriale ad alta efficienza'
    },
    {
      id: 2,
      category: 'termici',
      title: 'Sistema di Riscaldamento',
      image: '/images/gallery/termico-1.jpg',
      description: 'Impianto di riscaldamento ecosostenibile'
    },
    {
      id: 3,
      category: 'elettrici',
      title: 'Impianto Elettrico Smart',
      image: '/images/gallery/elettrico-1.jpg',
      description: 'Sistema elettrico intelligente per edifici'
    },
    // Add more gallery items as needed
  ];

  const filteredItems = selectedCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[40vh] flex items-center justify-center bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden"
      >
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500 to-transparent"
        />
        <div className="container mx-auto px-6 text-center">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            Galleria Progetti
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl"
          >
            Esplora i nostri lavori e realizzazioni
          </motion.p>
        </div>
      </motion.section>

      {/* Category Filter */}
      <section className="py-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full transition duration-300 ${selectedCategory === category.id ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-10">
        <div className="container mx-auto px-6">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelectedImage(item)}
                  className="cursor-pointer bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="relative h-64 bg-gray-200">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent"></div>
                    <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                      {/* Replace with actual image */}
                      {item.image}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl w-full bg-white rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-video bg-gray-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Replace with actual image */}
                  {selectedImage.image}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{selectedImage.title}</h3>
                <p className="text-gray-600">{selectedImage.description}</p>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
