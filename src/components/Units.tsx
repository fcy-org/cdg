import { MessageCircle, MapPin, Phone } from 'lucide-react';
import { trackContact } from '../utils/pixel';

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

const units = [
  {
    id: 1,
    name: 'Mocambinho',
    zone: 'Zona Norte',
    phone: '5586988395400',
    display: '(86) 9 8839-5400',
    zoneColor: 'bg-blue-100 text-blue-700',
  },
  {
    id: 2,
    name: 'Santa Maria',
    zone: 'Zona Norte',
    phone: '5586988225400',
    display: '(86) 9 8822-5400',
    zoneColor: 'bg-blue-100 text-blue-700',
  },
  {
    id: 3,
    name: 'Fátima',
    zone: 'Zona Leste',
    phone: '5586988055400',
    display: '(86) 9 8805-5400',
    zoneColor: 'bg-yellow-100 text-yellow-700',
  },
  {
    id: 4,
    name: 'Cristo Rei',
    zone: 'Zona Sul',
    phone: '5586988995400',
    display: '(86) 9 8899-5400',
    zoneColor: 'bg-red-100 text-red-700',
  },
  {
    id: 5,
    name: 'Timon',
    zone: 'Timon — MA',
    phone: '5599991055400',
    display: '(99) 9 9105-5400',
    zoneColor: 'bg-green-100 text-green-700',
  },
];

const INSTAGRAM_URL = 'https://www.instagram.com/casadosgenericos/';

const WHATSAPP_MSG = encodeURIComponent(
  'Olá! Vim pelo site e gostaria de saber mais sobre os kits de medicamentos.'
);

function Units() {
  return (
    <section id="unidades" className="bg-white">

      {/* Faixa de cabeçalho com imagem de fundo */}
      <div
        className="relative px-4 sm:px-6 lg:px-8 pt-36 pb-10 text-center bg-gray-900 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/mascote-moto.png')" }}
      >
        {/* Overlay escuro para legibilidade */}
        <div className="absolute inset-0 bg-gray-900/80" />
        <div className="relative z-10 max-w-3xl mx-auto">

          {/* Badge de entrega grátis — destaque máximo */}
          <div className="inline-flex items-center gap-2 bg-yellow-400 text-gray-900 font-extrabold text-sm sm:text-base px-5 py-2 rounded-full shadow-lg mb-5">
            🛵 ENTREGA GRÁTIS em toda Teresina e Timon
          </div>

          {/* Indicador de disponibilidade */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
            </span>
            <span className="text-green-400 font-bold text-sm uppercase tracking-wider">
              Atendimento disponível agora
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-3">
            Fale agora com a unidade<br className="hidden sm:block" /> mais próxima de você
          </h2>
          <p className="text-gray-300 text-lg">
            Peça pelo WhatsApp e receba em casa —{' '}
            <span className="text-yellow-400 font-bold">sem taxa de entrega</span>
          </p>
        </div>
      </div>

      {/* Grade de unidades */}
      <div className="px-4 sm:px-6 lg:px-8 py-10 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
            {units.map((unit, idx) => (
              <a
                key={unit.id}
                href={`https://wa.me/${unit.phone}?text=${WHATSAPP_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackContact(`Unidade ${unit.name}`)}
                className="group bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 overflow-hidden flex flex-col transition-all duration-200 hover:-translate-y-1"
              >
                {/* Barra superior amarela */}
                <div className="h-2 bg-yellow-400 w-full" />

                <div className="p-6 flex flex-col gap-5 flex-1">
                  {/* Número + status */}
                  <div className="flex items-center justify-between">
                    <span className="text-4xl font-black text-gray-100 leading-none select-none">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <div className="flex items-center gap-1.5 bg-green-50 border border-green-200 rounded-full px-2.5 py-1">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                      </span>
                      <span className="text-green-700 text-xs font-bold">Disponível</span>
                    </div>
                  </div>

                  {/* Nome e zona */}
                  <div>
                    <p className="text-xl font-extrabold text-gray-900 leading-tight group-hover:text-green-700 transition-colors">
                      Unidade {unit.name}
                    </p>
                    <div className="flex items-center gap-1.5 mt-1.5">
                      <MapPin className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${unit.zoneColor}`}>
                        {unit.zone}
                      </span>
                    </div>
                  </div>

                  {/* Número de telefone */}
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <Phone className="w-4 h-4 flex-shrink-0 text-gray-400" />
                    <span className="font-semibold">{unit.display}</span>
                  </div>

                  {/* Entrega grátis por unidade */}
                  <div className="flex items-center gap-1.5 text-yellow-600 text-xs font-bold bg-yellow-50 border border-yellow-200 rounded-lg px-3 py-1.5">
                    🛵 Entrega grátis na sua região
                  </div>

                  {/* Botão WhatsApp — grande e chamativo */}
                  <div className="mt-auto bg-green-600 group-hover:bg-green-700 text-white font-extrabold py-4 rounded-xl transition-colors flex items-center justify-center gap-2.5 text-base shadow-sm group-hover:shadow-md">
                    <MessageCircle className="w-5 h-5" />
                    Abrir WhatsApp
                  </div>
                </div>
              </a>
            ))}

            </div>

          {/* Reforço entrega grátis */}
          <div className="flex items-center justify-center gap-3 bg-yellow-400 rounded-2xl py-4 px-6 mb-5 text-gray-900 font-extrabold text-base sm:text-lg shadow-sm">
            🛵 Entrega <span className="underline underline-offset-2">100% gratuita</span> para toda Teresina e Timon
          </div>

          {/* Instagram — destaque separado */}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 w-full bg-gradient-to-r from-blue-700 via-red-500 to-yellow-400 hover:from-blue-800 hover:via-red-600 hover:to-yellow-500 text-white font-extrabold text-lg py-5 rounded-2xl shadow-md hover:shadow-xl transition-all hover:scale-[1.01] active:scale-[0.99]"
          >
            <InstagramIcon className="w-6 h-6" />
            Siga-nos no Instagram
            <span className="text-sm font-semibold opacity-80">@casadosgenericos</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Units;
