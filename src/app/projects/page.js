'use client';

import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    {
      title: 'Impianto Idraulico Industriale',
      category: 'Sistemi Idraulici',
      description: 'Progettazione e installazione di un sistema idraulico completo per un importante stabilimento industriale.',
      image: 'placeholder-1'
    },
    {
      title: 'Sistema di Riscaldamento Ecosostenibile',
      category: 'Sistemi Termici',
      description: 'Implementazione di un sistema di riscaldamento a basso consumo energetico per un complesso residenziale.',
      image: 'placeholder-2'
    },
    {
      title: 'Impianto Elettrico Smart Building',
      category: 'Sistemi Elettrici',
      description: 'Realizzazione di un sistema elettrico intelligente per un edificio commerciale di ultima generazione.',
      image: 'placeholder-3'
    },
    {
      title: 'Ottimizzazione Energetica',
      category: 'Sistemi Termici',
      description: 'Intervento di efficientamento energetico su impianti esistenti con riduzione dei consumi del 40%.',
      image: 'placeholder-4'
    },
    {
      title: 'Automazione Industriale',
      category: 'Sistemi Elettrici',
      description: 'Sistema di automazione avanzato per linea di produzione industriale.',
      image: 'placeholder-5'
    },
    {
      title: 'Impianto Idrico Sanitario',
      category: 'Sistemi Idraulici',
      description: 'Progettazione e realizzazione impianto idrico sanitario per struttura ospedaliera.',
      image: 'placeholder-6'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[40vh] flex items-center justify-center bg-gradient-to-r from-blue-900 to-blue-700 text-white"
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

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative h-64 bg-gray-200">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                    {project.image}
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-sm text-blue-600 font-semibold">{project.category}</span>
                  <h3 className="text-xl font-bold text-gray-800 mt-2 mb-3">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300"
                  >
                    Scopri di più
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 bg-gray-50"
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Hai un progetto in mente?</h2>
          <p className="text-xl text-gray-600 mb-8">Siamo pronti ad aiutarti a realizzare la tua visione</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300"
          >
            Contattaci
          </motion.button>
        </div>
      </motion.section>
    </main>
  );
}