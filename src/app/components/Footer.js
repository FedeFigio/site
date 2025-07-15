export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">SITE</h3>
            <p className="text-gray-400">Sistemi Idraulici, Termici ed Elettrici - La tua soluzione completa per sistemi tecnici innovativi.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Link Rapidi</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white transition duration-300">Home</Link></li>
              <li><Link href="/servizi" className="text-gray-400 hover:text-white transition duration-300">Servizi</Link></li>
              <li><Link href="/chi-siamo" className="text-gray-400 hover:text-white transition duration-300">Chi Siamo</Link></li>
              <li><Link href="/progetti" className="text-gray-400 hover:text-white transition duration-300">Progetti</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">I Nostri Servizi</h4>
            <ul className="space-y-2">
              <li><a href="/servizi#idraulici" className="text-gray-400 hover:text-white transition duration-300">Sistemi Idraulici</a></li>
              <li><a href="/servizi#termici" className="text-gray-400 hover:text-white transition duration-300">Sistemi Termici</a></li>
              <li><a href="/servizi#elettrici" className="text-gray-400 hover:text-white transition duration-300">Sistemi Elettrici</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contattaci</h4>
            <ul className="space-y-2 text-gray-400">
              <li>📍 Via Example, 123</li>
              <li>📞 +39 123 456 7890</li>
              <li>✉️ info@siteservizi.it</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} SITE. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
}
import Link from 'next/link';