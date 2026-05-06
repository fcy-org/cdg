import { useMemo } from 'react';
import Header from './components/Header';
import Units from './components/Units';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import LeadPopup from './components/LeadPopup';
import StickyBar from './components/StickyBar';
import { captureAndGetUTMs } from './utils/utms';

function App() {
  // Captura UTMs uma vez no carregamento da página
  const utms = useMemo(() => captureAndGetUTMs(), []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Units />
      <Benefits />
      <Testimonials />
      <Footer />

      {/* Popup de captura de leads — aparece apenas uma vez por visitante */}
      <LeadPopup utms={utms} />

      {/* Barra flutuante mobile — aparece ao rolar a página */}
      <StickyBar />
    </div>
  );
}

export default App;
