// Tipagem mínima para o fbq global injetado pelo Meta Pixel
declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

function fbq(...args: unknown[]) {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq(...args);
  }
}

/** Dispara quando o usuário preenche e envia o formulário do popup */
export function trackLead(params?: { name?: string; phone?: string }) {
  fbq('track', 'Lead', {
    content_name: 'Popup Cadastro',
    ...(params?.name && { fn: params.name }),
    ...(params?.phone && { ph: params.phone }),
  });
}

/** Dispara quando o usuário clica no botão de WhatsApp de uma unidade */
export function trackContact(unitName: string) {
  fbq('track', 'Contact', {
    content_name: unitName,
    content_category: 'WhatsApp',
  });
}
