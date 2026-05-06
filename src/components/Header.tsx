import { Phone } from 'lucide-react';

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Barra de anúncio vermelha */}
      <div className="bg-red-600 text-white text-center py-2 px-4 text-sm font-medium">
        <span className="flex items-center justify-center gap-2">
          <Phone className="w-4 h-4" />
          Teresina &amp; Timon — Atendimento pelo WhatsApp em todas as unidades
        </span>
      </div>

      {/* Header principal */}
      <div className="bg-white shadow-md border-b-4 border-yellow-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex items-center justify-center">
            <img
              src="/logo-cdg.png"
              alt="Casa dos Genéricos"
              className="h-12 w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
