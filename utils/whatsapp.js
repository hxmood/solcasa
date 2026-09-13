
export const WHATSAPP_PHONE_NUMBER = "+918157009613";

/**
 * Generates a direct WhatsApp link with a pre-filled message.
 * @param {string} [customMessage] - Optional custom chat message
 * @returns {string} - Full WhatsApp URL
 */
export function getWhatsAppLink(customMessage) {
  const defaultMessage =
    "Hello SOLCASA Homestay! I would like to inquire about booking a stay and check room availability.";
  const text = customMessage || defaultMessage;
  return `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(text)}`;
}
