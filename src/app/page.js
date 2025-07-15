'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 to-blue-700 text-white"
      >
        <div className="container mx-auto px-6 text-center">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-6xl font-bold mb-8"
          >
            SITE
          </motion.h1>
          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-2xl md:text-3xl mb-8"
          >
            Sistemi Idraulici, Termici ed Elettrici
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-xl mb-12"
          >
            Soluzioni innovative per le tue esigenze tecniche
          </motion.p>
          <motion.button
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-100 transition duration-300"
          >
            Scopri i Nostri Servizi
          </motion.button>
        </div>
      </motion.section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 text-gray-800"
          >
            I Nostri Servizi
          </motion.h2>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            {/* Hydraulic Systems */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white rounded-lg shadow-lg p-8 transition duration-300"
            >
              <div className="text-blue-600 text-4xl mb-4">💧</div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Sistemi Idraulici</h3>
              <p className="text-gray-600">Progettazione e installazione di sistemi idraulici all'avanguardia per ogni esigenza industriale e residenziale.</p>
            </motion.div>

            {/* Thermal Systems */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white rounded-lg shadow-lg p-8 transition duration-300"
            >
              <div className="text-red-600 text-4xl mb-4">🌡️</div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Sistemi Termici</h3>
              <p className="text-gray-600">Soluzioni termiche efficienti e sostenibili per il massimo comfort e risparmio energetico.</p>
            </motion.div>

            {/* Electrical Systems */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white rounded-lg shadow-lg p-8 transition duration-300"
            >
              <div className="text-yellow-600 text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Sistemi Elettrici</h3>
              <p className="text-gray-600">Impianti elettrici moderni e sicuri, progettati secondo i più alti standard del settore.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Special Offers Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 text-gray-800"
          >
            Offerte Speciali
          </motion.h2>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Air Conditioner Installation Offer */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl shadow-xl overflow-hidden"
            >
              <div className="bg-blue-600 p-4 text-white text-center">
                <span className="text-lg font-semibold">Offerta Speciale</span>
              </div>
              <div className="p-6">
                <div className="text-center mb-6">
                  <span className="text-5xl font-bold text-blue-600">€29</span>
                  <span className="text-gray-600 ml-2">/mese</span>
                </div>
                <h3 className="text-2xl font-semibold text-center mb-4">Montaggio Condizionatore</h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Installazione professionale
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Garanzia 2 anni
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Assistenza post-vendita
                  </li>
                </ul>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
                  Prenota Ora
                </button>
              </div>
            </motion.div>

            {/* Heating System Maintenance */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl shadow-xl overflow-hidden"
            >
              <div className="bg-red-600 p-4 text-white text-center">
                <span className="text-lg font-semibold">Offerta Limitata</span>
              </div>
              <div className="p-6">
                <div className="text-center mb-6">
                  <span className="text-5xl font-bold text-red-600">€39</span>
                  <span className="text-gray-600 ml-2">/mese</span>
                </div>
                <h3 className="text-2xl font-semibold text-center mb-4">Manutenzione Caldaia</h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Controllo annuale
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Pulizia completa
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Certificazione
                  </li>
                </ul>
                <button className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition duration-300">
                  Scopri di Più
                </button>
              </div>
            </motion.div>

            {/* Electrical System Check */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl shadow-xl overflow-hidden"
            >
              <div className="bg-yellow-600 p-4 text-white text-center">
                <span className="text-lg font-semibold">Promozione</span>
              </div>
              <div className="p-6">
                <div className="text-center mb-6">
                  <span className="text-5xl font-bold text-yellow-600">€49</span>
                  <span className="text-gray-600 ml-2">/mese</span>
                </div>
                <h3 className="text-2xl font-semibold text-center mb-4">Check-up Elettrico</h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Verifica impianto
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Test sicurezza
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Relazione tecnica
                  </li>
                </ul>
                <button className="w-full bg-yellow-600 text-white py-3 rounded-lg font-semibold hover:bg-yellow-700 transition duration-300">
                  Contattaci
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}