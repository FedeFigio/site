export default function ChiSiamo() {
  return (
    <main className="min-h-screen pt-20 bg-gray-50">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Chi Siamo</h1>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">La Nostra Storia</h2>
            <p className="text-gray-600 mb-6">
              SITE è nata dalla passione e dall&#39;esperienza nel campo dei sistemi idraulici, termici ed elettrici.
              Da anni ci dedichiamo a fornire soluzioni innovative e sostenibili per le esigenze dei nostri clienti.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">La Nostra Missione</h2>
            <p className="text-gray-600 mb-6">
              Il nostro obiettivo è fornire servizi di alta qualità, garantendo efficienza energetica e sostenibilità ambientale.
              Lavoriamo costantemente per migliorare e innovare le nostre soluzioni.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">I Nostri Valori</h2>
            <ul className="text-gray-600 space-y-4">
              <li className="flex items-center">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Qualità e professionalità in ogni progetto</span>
              </li>
              <li className="flex items-center">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Attenzione alle esigenze del cliente</span>
              </li>
              <li className="flex items-center">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Innovazione e sostenibilità</span>
              </li>
              <li className="flex items-center">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Rispetto per l&#39;ambiente</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}