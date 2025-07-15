export default function Contatti() {
  return (
    <main className="min-h-screen pt-20 bg-gray-50">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Contatti</h1>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Informazioni di Contatto</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="text-blue-600 text-xl mr-4">📍</div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Indirizzo</h3>
                  <p className="text-gray-600">Via Example, 123<br />20100 Milano (MI)</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-blue-600 text-xl mr-4">📞</div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Telefono</h3>
                  <p className="text-gray-600">+39 02 1234567</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-blue-600 text-xl mr-4">✉️</div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                  <p className="text-gray-600">info@siteservizi.it</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Invia un Messaggio</h2>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">Nome e Cognome</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">Messaggio</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Invia Messaggio
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}