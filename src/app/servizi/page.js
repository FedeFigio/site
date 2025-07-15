'use client';

import { motion } from 'framer-motion';

export default function Servizi() {
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
            I Nostri Servizi
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl"
          >
            Soluzioni innovative per ogni esigenza
          </motion.p>
        </div>
      </motion.section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {/* Servizio Idraulico */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white rounded-lg shadow-lg p-8 transition duration-300"
            >
              <div className="text-blue-600 text-4xl mb-4">💧</div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Sistemi Idraulici</h3>
              <p className="text-gray-600 mb-4">Offriamo servizi completi di progettazione, installazione e manutenzione di sistemi idraulici per:</p>
              <ul className="text-gray-600 list-disc list-inside space-y-2">
                <li>Impianti residenziali</li>
                <li>Sistemi industriali</li>
                <li>Reti di distribuzione</li>
                <li>Sistemi di irrigazione</li>
              </ul>
            </motion.div>

            {/* Servizio Termico */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white rounded-lg shadow-lg p-8 transition duration-300"
            >
              <div className="text-red-600 text-4xl mb-4">🌡️</div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Sistemi Termici</h3>
              <p className="text-gray-600 mb-4">Soluzioni termiche innovative ed efficienti per:</p>
              <ul className="text-gray-600 list-disc list-inside space-y-2">
                <li>Riscaldamento domestico</li>
                <li>Climatizzazione industriale</li>
                <li>Pompe di calore</li>
                <li>Sistemi di ventilazione</li>
              </ul>
            </motion.div>

            {/* Servizio Elettrico */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white rounded-lg shadow-lg p-8 transition duration-300"
            >
              <div className="text-yellow-600 text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Sistemi Elettrici</h3>
              <p className="text-gray-600 mb-4">Impianti elettrici all'avanguardia per ogni esigenza:</p>
              <ul className="text-gray-600 list-disc list-inside space-y-2">
                <li>Installazioni civili</li>
                <li>Impianti industriali</li>
                <li>Automazione</li>
                <li>Sistemi di sicurezza</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}