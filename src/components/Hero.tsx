import { Package, Users, MessageCircle, ChevronDown } from 'lucide-react';
import Carousel from './Carousel';

function Hero() {
  return (
    <>
      {/* Hero principal — fundo amarelo */}
      <section className="pt-36 pb-0 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-yellow-400 via-yellow-400 to-yellow-500 overflow-hidden">
        <div className="max-w-5xl mx-auto">

          {/* Badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-block bg-red-600 text-white text-sm font-bold px-4 py-1 rounded-full shadow-sm">
              🏥 7 Unidades em Teresina e Timon
            </div>
          </div>

          {/* Conteúdo: texto à esquerda, mascote de pé à direita */}
          <div className="grid lg:grid-cols-2 gap-8 items-center mb-0">

            {/* Lado esquerdo — copy */}
            <div className="text-center lg:text-left">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
                Saúde da sua família com economia real
              </h2>

              <p className="text-lg sm:text-xl text-gray-800 leading-relaxed mb-8">
                Kits prontos de medicamentos genéricos, cuidados diários e perfumaria — a preços que cabem no bolso, com atendimento pelo WhatsApp.
              </p>

              {/* Bullets */}
              <div className="flex flex-col gap-3 mb-8">
                <div className="flex items-center gap-3 bg-white/70 rounded-xl px-4 py-2 shadow-sm">
                  <Package className="w-5 h-5 text-red-600 flex-shrink-0" />
                  <p className="text-gray-900 font-semibold text-sm">Kits com preços especiais</p>
                </div>
                <div className="flex items-center gap-3 bg-white/70 rounded-xl px-4 py-2 shadow-sm">
                  <Users className="w-5 h-5 text-red-600 flex-shrink-0" />
                  <p className="text-gray-900 font-semibold text-sm">Ofertas para toda família</p>
                </div>
                <div className="flex items-center gap-3 bg-white/70 rounded-xl px-4 py-2 shadow-sm">
                  <MessageCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                  <p className="text-gray-900 font-semibold text-sm">Atendimento rápido e humanizado</p>
                </div>
              </div>

              {/* CTA */}
              <div className="flex justify-center lg:justify-start">
                <a
                  href="#unidades"
                  className="relative inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-extrabold text-xl px-10 py-5 rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105 active:scale-95 ring-4 ring-red-200 ring-offset-2"
                >
                  <span className="absolute -top-1 -right-1 flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500" />
                  </span>
                  <MessageCircle className="w-6 h-6" />
                  Ver unidades e pedir agora
                  <ChevronDown className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Lado direito — mascote de pé + moto saindo pela base */}
            <div className="relative flex flex-col items-center justify-end">
              {/* Mascote de pé */}
              <img
                src="/mascote.png"
                alt="Mascote Casa dos Genéricos"
                className="h-56 sm:h-72 w-auto object-contain drop-shadow-2xl relative z-10"
              />
              {/* Mascote na moto — encostado na base do hero */}
              <img
                src="/mascote-moto.png"
                alt="Delivery Grátis"
                className="w-full max-w-sm sm:max-w-md object-contain drop-shadow-xl -mb-2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Faixa de Delivery Grátis — azul */}
      <section className="bg-blue-700 px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-center gap-3 text-center">
          <p className="text-yellow-400 font-black text-2xl sm:text-3xl">
            🛵 DELIVERY GRÁTIS
          </p>
          <p className="text-white font-bold text-base sm:text-lg">
            para toda Teresina e Timon
          </p>
        </div>
      </section>

      {/* Seção do Carrossel */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block bg-yellow-400 text-gray-900 text-sm font-bold px-4 py-1 rounded-full mb-3">
              Nossas ofertas
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Conheça nossos kits
            </h2>
            <p className="text-gray-600 mt-2">
              Clique em "Pedir esse kit" para falar direto no WhatsApp
            </p>
          </div>
          <Carousel />
        </div>
      </section>
    </>
  );
}

export default Hero;
