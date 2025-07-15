'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[60vh] flex items-center justify-center bg-gradient-to-r from-blue-900 to-blue-700 text-white"
      >
        <div className="container mx-auto px-6 text-center">
          <motion.h1 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-6xl font-bold mb-8"
          >
            Chi Siamo
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl max-w-3xl mx-auto"
          >
            Da oltre 20 anni, SITE è leader nel settore degli impianti tecnologici, 
            offrendo soluzioni innovative e sostenibili per ogni esigenza.
          </motion.p>
        </div>
      </motion.section>

      {/* Company Values */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">I Nostri Valori</h2>
              <p className="text-gray-600 mb-4">
                La nostra missione è fornire soluzioni tecnologiche all'avanguardia, 
                garantendo efficienza energetica e rispetto per l'ambiente.
              </p>
              <ul className="space-y-4">
                <motion.li 
                  whileHover={{ x: 10 }}
                  className="flex items-center text-gray-700"
                >
                  <span className="text-blue-600 mr-2">✓</span>
                  Innovazione e Sostenibilità
                </motion.li>
                <motion.li 
                  whileHover={{ x: 10 }}
                  className="flex items-center text-gray-700"
                >
                  <span className="text-blue-600 mr-2">✓</span>
                  Qualità e Affidabilità
                </motion.li>
                <motion.li 
                  whileHover={{ x: 10 }}
                  className="flex items-center text-gray-700"
                >
                  <span className="text-blue-600 mr-2">✓</span>
                  Professionalità e Competenza
                </motion.li>
              </ul>
            </div>
            <div className="relative h-[400px] bg-gray-200 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent"></div>
              {/* Placeholder per un'immagine aziendale */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                Immagine Aziendale
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 text-gray-800"
          >
            Il Nostro Team
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[1, 2, 3].map((member, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-lg shadow-lg p-8 text-center"
              >
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6"></div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Nome Cognome</h3>
                <p className="text-gray-600 mb-4">Ruolo Professionale</p>
                <p className="text-gray-500 text-sm">Breve descrizione del ruolo e delle competenze.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
