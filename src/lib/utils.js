/**
 * Shared utility functions for SNMZ Gold & Diamonds.
 */

/**
 * Builds a WhatsApp deep-link URL.
 * @param {string} number - Phone number with country code, no '+' (e.g. '919876543210')
 * @param {string} [message] - Pre-filled message
 * @returns {string} WhatsApp URL
 */
export function whatsappUrl(number, message = '') {
  const base = 'https://wa.me/';
  const encodedMsg = message ? `?text=${encodeURIComponent(message)}` : '';
  return `${base}${number}${encodedMsg}`;
}

/**
 * Concatenates class names, filtering falsy values.
 * @param {...string} classes
 * @returns {string}
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

/**
 * Formats a date string to a human-readable format.
 * @param {string|Date} date
 * @returns {string}
 */
export function formatDate(date) {
  return new Intl.DateTimeFormat('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date));
}
