import { MapPin, Clock, Phone, MessageCircle } from 'lucide-react';

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

const INSTAGRAM_URL = 'https://www.instagram.com/casadosgenericos/';
const WHATSAPP_NUMBER = '5586988395400';
const WHATSAPP_MSG = encodeURIComponent('Olá! Vim pelo site e gostaria de mais informações.');
const MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=Av.%20Jornalista%20Josipio%20Lustosa%207000%2C%20Mocambinho%20I%2C%20Teresina%2C%20PI%2C%2064010-790%2C%20Brasil';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-white">

      {/* CTA final antes do rodapé */}
      <div className="bg-yellow-400 py-10 px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3">
          Pronto para economizar na saúde da sua família?
        </h3>
        <p className="text-gray-800 mb-6 text-lg">
          Escolha sua unidade mais próxima e peça agora pelo WhatsApp
        </p>
        <a
          href="#unidades"
          className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-extrabold text-lg px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95"
        >
          <MessageCircle className="w-5 h-5" />
          Escolher minha unidade
        </a>
      </div>

      {/* Corpo do footer */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-10 mb-10">

            {/* Coluna 1 — marca */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img
                  src="/logo-cdg.png"
                  alt="Casa dos Genéricos"
                  className="h-16 w-auto object-contain"
                />
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Sua farmácia de confiança em Teresina e Timon, com foco em economia e qualidade de vida para sua família.
              </p>
            </div>

            {/* Coluna 2 — unidades */}
            <div>
              <h4 className="font-extrabold text-yellow-400 mb-4 uppercase text-xs tracking-widest">
                Nossas Unidades
              </h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                {[
                  { name: 'Mocambinho', zone: 'Zona Norte' },
                  { name: 'Sta Maria', zone: 'Zona Norte' },
                  { name: 'Fátima', zone: 'Zona Leste' },
                  { name: 'Cristo Rei', zone: 'Zona Sul' },
                  { name: 'Timon', zone: 'Timon — MA' },
                ].map((u) => (
                  <li key={u.name} className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-yellow-400 flex-shrink-0" />
                    <span>
                      <span className="text-white font-semibold">{u.name}</span>
                      <span className="text-gray-500"> — {u.zone}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Coluna 3 — contato */}
            <div>
              <h4 className="font-extrabold text-yellow-400 mb-4 uppercase text-xs tracking-widest">
                Contato &amp; Redes
              </h4>
              <div className="space-y-4">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>(86) 9 8839-5400</span>
                </a>

                <div className="flex items-start gap-2 text-gray-400">
                  <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <p>Dom a Qui: 07h às 22h</p>
                    <p>Sex: 07h às 17h40</p>
                    <p>Sáb: 18h às 22h</p>
                    <p>Feriados: 07h às 22h</p>
                  </div>
                </div>

                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  <InstagramIcon className="w-4 h-4 flex-shrink-0" />
                  <span>@casadosgenericos</span>
                </a>
              </div>
            </div>
          </div>

          {/* Linha de copyright */}
          <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <div className="text-center sm:text-left space-y-2">
              <p>&copy; {currentYear} Casa dos Genéricos. Todos os direitos reservados.</p>
              <p>CNPJ: 00.919.405/0001-28</p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-start gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-yellow-400" />
                <span>
                  Av. Jornalista Josipio Lustosa, 7000, Teresina (Mocambinho I), Piauí, 64010-790, Brasil
                </span>
              </a>
            </div>
            <div className="flex gap-1">
              <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block" />
              <span className="w-3 h-3 rounded-full bg-red-600 inline-block" />
              <span className="w-3 h-3 rounded-full bg-blue-700 inline-block" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
