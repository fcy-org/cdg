import { useState, useEffect } from 'react';
import { X, MessageCircle, Tag } from 'lucide-react';
import type { UTMData } from '../utils/utms';
import { trackLead } from '../utils/pixel';

// ✅ Cole aqui a URL do seu Google Apps Script depois de publicar como Web App
const SHEET_URL = 'https://script.google.com/macros/s/AKfycbxvJ3sq3O0CkOOb1TQgXuoDf5i7tF8IqAqKmqzAELWM-T2b5N4HwR3J50LRFhU-bJ8V/exec';

const POPUP_SHOWN_KEY = 'cdg_popup_shown';

interface Props {
  utms: UTMData;
}

function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 11);
  if (digits.length <= 2) return `(${digits}`;
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 11)
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  return value;
}

export default function LeadPopup({ utms }: Props) {
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(POPUP_SHOWN_KEY)) return;

    // Aparece após 2 segundos para o usuário ver a página primeiro
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const dismiss = () => {
    localStorage.setItem(POPUP_SHOWN_KEY, '1');
    setVisible(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      name: name.trim(),
      phone: phone.replace(/\D/g, ''),
      source: utms.utm_source || 'direct',
      medium: utms.utm_medium || '',
      campaign: utms.utm_campaign || '',
      term: utms.utm_term || '',
      content: utms.utm_content || '',
      page: window.location.href,
    };

    try {
      // Google Apps Script não suporta CORS em doPost,
      // então usamos no-cors — o dado chega mas a resposta é opaca.
      await fetch(SHEET_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
    } catch {
      // Mesmo com erro de rede, marcamos como enviado para não bloquear o usuário
    } finally {
      setLoading(false);
      trackLead({ name: name.trim(), phone: phone.replace(/\D/g, '') });
      setSubmitted(true);
      localStorage.setItem(POPUP_SHOWN_KEY, '1');
    }
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={dismiss}
        aria-hidden
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-fade-in">

        {/* Cabeçalho amarelo */}
        <div className="bg-yellow-400 px-6 pt-6 pb-5 relative">
          <button
            onClick={dismiss}
            className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-black/10 transition-colors"
            aria-label="Fechar"
          >
            <X className="w-5 h-5 text-gray-800" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <div className="bg-red-600 p-1.5 rounded-lg">
              <Tag className="w-4 h-4 text-white" />
            </div>
            <span className="text-red-700 font-bold text-sm uppercase tracking-wide">
              Oferta exclusiva
            </span>
          </div>

          <h2 className="text-2xl font-extrabold text-gray-900 leading-tight">
            Receba ofertas e promoções em primeira mão!
          </h2>
          <p className="text-gray-800 text-sm mt-2">
            Cadastre-se gratuitamente e seja avisado dos melhores kits da Casa dos Genéricos.
          </p>
        </div>

        {/* Corpo */}
        {submitted ? (
          <div className="px-6 py-10 text-center">
            <div className="text-6xl mb-4">🎉</div>
            <h3 className="text-xl font-extrabold text-gray-900 mb-2">
              Cadastro realizado com sucesso!
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Em breve você receberá nossas melhores ofertas pelo WhatsApp. Aproveite e escolha uma unidade agora!
            </p>
            <button
              onClick={dismiss}
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-extrabold px-10 py-3 rounded-full transition-colors shadow-sm"
            >
              Ver unidades →
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="px-6 py-6 space-y-4">
            {/* Nome */}
            <div>
              <label className="text-sm font-bold text-gray-700 block mb-1.5">
                Seu nome *
              </label>
              <input
                type="text"
                required
                placeholder="Como podemos te chamar?"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border-2 border-gray-200 focus:border-yellow-400 rounded-xl px-4 py-3 text-gray-900 outline-none transition-colors placeholder:text-gray-400"
              />
            </div>

            {/* WhatsApp */}
            <div>
              <label className="text-sm font-bold text-gray-700 block mb-1.5">
                WhatsApp *
              </label>
              <input
                type="tel"
                required
                placeholder="(86) 9 0000-0000"
                value={phone}
                onChange={(e) => setPhone(formatPhone(e.target.value))}
                className="w-full border-2 border-gray-200 focus:border-yellow-400 rounded-xl px-4 py-3 text-gray-900 outline-none transition-colors placeholder:text-gray-400"
              />
            </div>

            {/* UTM debug — visível apenas em desenvolvimento */}
            {import.meta.env.DEV && utms.utm_source && (
              <div className="bg-gray-50 rounded-lg p-3 text-xs text-gray-500 font-mono space-y-0.5">
                <p className="font-bold text-gray-600 mb-1">UTMs capturados:</p>
                {Object.entries(utms).map(([k, v]) =>
                  v ? <p key={k}>{k}: <span className="text-blue-600">{v}</span></p> : null
                )}
              </div>
            )}

            {/* Botão de envio */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-red-600 hover:bg-red-700 disabled:bg-gray-400 text-white font-extrabold text-lg py-4 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-sm"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                  </svg>
                  Enviando...
                </span>
              ) : (
                <>
                  <MessageCircle className="w-5 h-5" />
                  Quero receber ofertas!
                </>
              )}
            </button>

            <p className="text-xs text-gray-400 text-center leading-relaxed">
              Seus dados são protegidos e não serão compartilhados com terceiros.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
