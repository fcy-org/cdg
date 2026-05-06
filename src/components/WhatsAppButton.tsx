import { MessageCircle } from 'lucide-react';

function WhatsAppButton() {
  const whatsappUrl = 'https://wa.me/5586988995400';

  return (
    <div className="flex flex-col items-center gap-4 py-8">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white font-semibold text-lg px-8 py-5 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95"
      >
        <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
        <span>Falar com a Casa dos Genéricos no WhatsApp</span>
      </a>
      <p className="text-gray-500 text-sm">
        Tire dúvidas e peça seus kits agora mesmo
      </p>
    </div>
  );
}

export default WhatsAppButton;
