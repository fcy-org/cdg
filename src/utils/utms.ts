const UTM_STORAGE_KEY = 'cdg_utms';

export interface UTMData {
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_term: string;
  utm_content: string;
}

const EMPTY_UTMS: UTMData = {
  utm_source: '',
  utm_medium: '',
  utm_campaign: '',
  utm_term: '',
  utm_content: '',
};

/**
 * Lê os UTMs da URL atual e os persiste no localStorage.
 * Se não houver UTMs na URL, retorna os UTMs salvos anteriormente.
 * Deve ser chamado uma vez no carregamento da página.
 */
export function captureAndGetUTMs(): UTMData {
  const search = new URLSearchParams(window.location.search);

  const keys = Object.keys(EMPTY_UTMS) as (keyof UTMData)[];
  const fromUrl: Partial<UTMData> = {};

  keys.forEach((key) => {
    const val = search.get(key);
    if (val) fromUrl[key] = val;
  });

  if (Object.keys(fromUrl).length > 0) {
    // Novos UTMs na URL → salva e retorna
    const merged = { ...EMPTY_UTMS, ...fromUrl };
    localStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(merged));
    return merged;
  }

  // Sem UTMs na URL → lê do storage (atribuição anterior)
  try {
    const saved = JSON.parse(localStorage.getItem(UTM_STORAGE_KEY) || '{}');
    return { ...EMPTY_UTMS, ...saved };
  } catch {
    return { ...EMPTY_UTMS };
  }
}
