'use client';

import { motion } from 'framer-motion';

export default function Progetti() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[30vh] flex items-center justify-center bg-gradient-to-r from-blue-900 to-blue-700 text-white"
      >
        <div className="container mx-auto px-6 text-center">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            I Nostri Progetti
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl"
          >
            Scopri le nostre realizzazioni più significative
          </motion.p>
        </div>
      </motion.section>

      <section className="py-20">
        <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
            <div className="aspect-w-16 aspect-h-9 bg-gray-200">
              <div className="w-full h-48 bg-gradient-to-r from-blue-500 to-blue-700"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Impianto Industriale Moderno</h3>
              <p className="text-gray-600">Progettazione e installazione di un sistema integrato per un complesso industriale di ultima generazione.</p>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
            <div className="aspect-w-16 aspect-h-9 bg-gray-200">
              <div className="w-full h-48 bg-gradient-to-r from-green-500 to-green-700"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Efficientamento Energetico</h3>
              <p className="text-gray-600">Riqualificazione energetica di un complesso residenziale con implementazione di sistemi sostenibili.</p>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
            <div className="aspect-w-16 aspect-h-9 bg-gray-200">
              <div className="w-full h-48 bg-gradient-to-r from-purple-500 to-purple-700"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Smart Building</h3>
              <p className="text-gray-600">Implementazione di sistemi domotici avanzati per un edificio commerciale di nuova costruzione.</p>
            </div>
          </div>
        </div>
      </div>
      </section>
    </main>
  );
}