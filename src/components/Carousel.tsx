import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const WHATSAPP_NUMBER = '5586988995400'; // Unidade Cristo Rei (número geral)

const kits = [
  {
    id: 1,
    title: 'Kit Medicamentos Essenciais de Casa',
    description: 'Tenha sempre os básicos à mão para imprevistos',
    items: ['Analgésico', 'Antitérmico', 'Antialérgico', 'Band-aid'],
    color: 'from-blue-700 to-blue-900',
    emoji: '🏠',
  },
  {
    id: 2,
    title: 'Kit Gripe e Resfriado',
    description: 'Completo para tratar toda a família rapidamente',
    items: ['Descongestionante', 'Antitussígeno', 'Vitamina C', 'Soro Nasal'],
    color: 'from-red-600 to-red-800',
    emoji: '🤧',
  },
  {
    id: 3,
    title: 'Kit Perfumaria & Autoestima',
    description: 'Cuide de você com economia e qualidade',
    items: ['Desodorante', 'Hidratante', 'Sabonete Premium', 'Protetor Solar'],
    color: 'from-yellow-500 to-yellow-700',
    emoji: '✨',
  },
  {
    id: 4,
    title: 'Kit Infantil Completo',
    description: 'Cuidados especiais e seguros para os pequenos',
    items: ['Pomada Assadura', 'Termômetro', 'Soro Infantil', 'Antitérmico Infantil'],
    color: 'from-red-500 to-red-700',
    emoji: '👶',
  },
  {
    id: 5,
    title: 'Kit Vitaminas & Suplementos',
    description: 'Energia e saúde o ano inteiro em um só kit',
    items: ['Vitamina D3', 'Vitamina C 1g', 'Ômega 3', 'Complexo B'],
    color: 'from-blue-600 to-blue-800',
    emoji: '💊',
  },
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % kits.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const pauseAndResume = () => {
    setIsAutoPlaying(false);
    const timeout = setTimeout(() => setIsAutoPlaying(true), 8000);
    return () => clearTimeout(timeout);
  };

  const goToPrevious = () => {
    pauseAndResume();
    setCurrentIndex((prev) => (prev - 1 + kits.length) % kits.length);
  };

  const goToNext = () => {
    pauseAndResume();
    setCurrentIndex((prev) => (prev + 1) % kits.length);
  };

  const goToSlide = (index: number) => {
    pauseAndResume();
    setCurrentIndex(index);
  };

  const kit = kits[currentIndex];
  const msg = encodeURIComponent(`Olá! Tenho interesse no ${kit.title}. Pode me passar mais informações?`);

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="overflow-hidden rounded-2xl shadow-xl">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {kits.map((kit) => {
            const kitMsg = encodeURIComponent(`Olá! Tenho interesse no ${kit.title}. Pode me passar mais informações?`);
            return (
              <div key={kit.id} className="min-w-full">
                <div
                  className={`bg-gradient-to-br ${kit.color} aspect-video flex items-center justify-center p-6 sm:p-10`}
                >
                  <div className="text-center text-white space-y-3 max-w-lg w-full">
                    <div className="text-4xl sm:text-5xl">{kit.emoji}</div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold leading-tight">
                      {kit.title}
                    </h3>
                    <p className="text-sm sm:text-base opacity-90">{kit.description}</p>
                    <div className="flex flex-wrap justify-center gap-2 pt-1">
                      {kit.items.map((item) => (
                        <span
                          key={item}
                          className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                    <div className="pt-1">
                      <a
                        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${kitMsg}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-extrabold text-sm px-8 py-3 rounded-full transition-colors shadow-lg"
                      >
                        Pedir esse kit
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Botões de navegação */}
      <button
        onClick={goToPrevious}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2.5 rounded-full shadow-lg transition-all hover:scale-110"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="w-6 h-6 text-gray-800" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2.5 rounded-full shadow-lg transition-all hover:scale-110"
        aria-label="Próximo slide"
      >
        <ChevronRight className="w-6 h-6 text-gray-800" />
      </button>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-5">
        {kits.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-yellow-500 w-8'
                : 'bg-gray-300 hover:bg-gray-400 w-2'
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
