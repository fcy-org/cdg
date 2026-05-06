import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Ana Paula S.',
    city: 'Teresina - PI',
    rating: 5,
    text: 'Comprei o Kit Essenciais de Casa e me surpreendi com a economia! Tudo que preciso para o dia a dia da família em um só pedido. Atendimento rápido e muito atencioso.',
    unit: 'Unidade Fátima',
  },
  {
    name: 'Carlos M.',
    city: 'Teresina - PI',
    rating: 5,
    text: 'O Kit Gripe e Resfriado chegou rapidinho pelo WhatsApp. Preço ótimo e medicamentos de qualidade. Já indiquei para toda a família.',
    unit: 'Unidade Mocambinho',
  },
  {
    name: 'Fernanda R.',
    city: 'Timon - MA',
    rating: 5,
    text: 'Melhor farmácia da região! O Kit Infantil foi um achado — produtos seguros e preço justo. Atendimento humanizado que faz toda a diferença.',
    unit: 'Unidade Timon',
  },
];

function Testimonials() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-yellow-50">
      <div className="max-w-7xl mx-auto">

        {/* Título */}
        <div className="text-center mb-12">
          <span className="inline-block bg-red-600 text-white text-sm font-bold px-4 py-1 rounded-full mb-3">
            Depoimentos reais
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
            O que nossos clientes dizem
          </h2>
          <p className="text-lg text-gray-600">
            Satisfação real de quem já pediu seus kits
          </p>
        </div>

        {/* Cards de depoimentos */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border-l-4 border-yellow-400 flex flex-col gap-4"
            >
              {/* Ícone de aspas */}
              <div className="text-yellow-400">
                <Quote className="w-8 h-8" />
              </div>

              {/* Estrelas */}
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Texto */}
              <p className="text-gray-700 leading-relaxed flex-1 italic">"{t.text}"</p>

              {/* Autor */}
              <div className="border-t border-gray-100 pt-4">
                <p className="font-extrabold text-gray-900">{t.name}</p>
                <p className="text-sm text-gray-500">{t.city}</p>
                <span className="inline-block mt-1 bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-0.5 rounded-full">
                  {t.unit}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
