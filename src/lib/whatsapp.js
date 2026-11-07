import { SiteConfig } from '@/config/site';

/**
 * Generates a context-aware WhatsApp URL for SNMZ Gold & Diamonds.
 *
 * Confirmed format: https://wa.me/971527549259?text=...
 *
 * @param {'homepage'|'shop'|'shopProduct'|'goldRates'|'silverRates'|'whyDubai'|'gallery'|'contact'|'general'} source
 * @param {{ name?: string, weight?: string, customMessage?: string }} [details]
 * @returns {string} Fully encoded WhatsApp URL
 */
export function getWhatsAppUrl(source = 'general', details = {}) {
  const number = SiteConfig.whatsapp || '971527549259';

  let message = SiteConfig.whatsappMessages?.general || 'Hello SNMZ Gold & Diamonds.';

  if (details.customMessage) {
    message = details.customMessage;
  } else if (source === 'shopProduct') {
    const fn = SiteConfig.whatsappMessages?.shopProduct;
    if (typeof fn === 'function') {
      message = fn(details.name || 'bullion product', details.weight);
    } else {
      message = `Hello SNMZ Gold & Diamonds, I would like to enquire about ${details.name || 'this product'}.`;
    }
  } else if (SiteConfig.whatsappMessages && SiteConfig.whatsappMessages[source]) {
    message = SiteConfig.whatsappMessages[source];
  }

  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

/**
 * Formatted office telephone link (tel:+97143441832).
 */
export function getOfficePhoneUrl() {
  return `tel:${SiteConfig.phone || '+97143441832'}`;
}
