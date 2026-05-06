import { useEffect, useState } from 'react';
import { MessageCircle, ChevronUp } from 'lucide-react';

export default function StickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Aparece quando scrollou mais de 400px (passou do hero)
      setVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    // Visível apenas em telas menores que lg (onde os cards não estão todos visíveis)
    <div className="fixed bottom-0 left-0 right-0 z-[150] lg:hidden">
      <a
        href="#unidades"
        className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 active:bg-green-800 text-white font-extrabold text-lg py-4 transition-colors shadow-2xl"
      >
        <MessageCircle className="w-5 h-5" />
        Escolher minha unidade
        <ChevronUp className="w-5 h-5" />
      </a>
    </div>
  );
}
