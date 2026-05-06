import { Shield, Users, Wallet, MapPin } from 'lucide-react';

const benefits = [
  {
    icon: Users,
    title: 'Atendimento humanizado via WhatsApp',
    description: 'Resposta rápida e cuidado personalizado em todas as unidades',
    color: 'bg-blue-700',
  },
  {
    icon: Shield,
    title: 'Kits montados por profissionais de farmácia',
    description: 'Segurança e qualidade garantidas com supervisão farmacêutica',
    color: 'bg-red-600',
  },
  {
    icon: Wallet,
    title: 'Foco em economia e segurança',
    description: 'Os melhores preços em genéricos sem abrir mão da qualidade',
    color: 'bg-yellow-400',
  },
  {
    icon: MapPin,
    title: '7 unidades em Teresina e Timon',
    description: 'Perto de você, com atendimento local e de confiança',
    color: 'bg-blue-700',
  },
];

function Benefits() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Título */}
        <div className="text-center mb-12">
          <span className="inline-block bg-yellow-400 text-gray-900 text-sm font-bold px-4 py-1 rounded-full mb-3">
            Por que nos escolher?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Por que escolher a Casa dos Genéricos?
          </h2>
          <p className="text-lg text-gray-600">
            Compromisso com sua saúde e economia
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            const isYellow = benefit.color === 'bg-yellow-400';
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl border border-gray-100 hover:-translate-y-1 transition-all group"
              >
                <div
                  className={`${benefit.color} w-14 h-14 rounded-xl flex items-center justify-center mb-5 shadow-sm group-hover:scale-110 transition-transform`}
                >
                  <Icon className={`w-7 h-7 ${isYellow ? 'text-gray-900' : 'text-white'}`} />
                </div>
                <h3 className="text-base font-extrabold text-gray-900 mb-2 leading-snug">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Faixa de destaque */}
        <div className="mt-12 bg-gradient-to-r from-yellow-400 via-yellow-400 to-yellow-500 rounded-2xl p-6 text-center shadow-md">
          <p className="text-gray-900 font-extrabold text-lg">
            ✅ Profissionais qualificados &nbsp;·&nbsp; ✅ Clientes satisfeitos &nbsp;·&nbsp; ✅ Economia garantida
          </p>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
