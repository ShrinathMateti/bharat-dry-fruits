/**
 * Central WhatsApp / call configuration and helpers for Bharat Dry Fruits.
 * No cart, checkout, or payment logic — every CTA resolves to a
 * click-to-chat WhatsApp link or a click-to-call phone link.
 */

// Business WhatsApp number in international format, no "+" or spaces.
export const BUSINESS_WHATSAPP_NUMBER = "918177971491";

// Business phone number for tel: links.
export const BUSINESS_PHONE_NUMBER = "+91 8177 971 491";
export const BUSINESS_PHONE_LINK = "+918177971491";

/**
 * Builds a wa.me click-to-chat link with a pre-filled, URL-encoded message.
 */
export function buildWhatsAppLink(message: string, number: string = BUSINESS_WHATSAPP_NUMBER) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${number}?text=${encoded}`;
}

/**
 * Pre-fills a WhatsApp inquiry for a specific product, including
 * grade/origin/pack-size context so the sales team has everything upfront.
 */
export function buildProductInquiryLink(params: {
  productName: string;
  grade?: string;
  origin?: string;
  packSize?: string;
}) {
  const { productName, grade, origin, packSize } = params;
  const lines = [
    `Namaste Bharat Dry Fruits 🙏`,
    `I'd like to enquire about: *${productName}*`,
  ];
  if (grade) lines.push(`Grade: ${grade}`);
  if (origin) lines.push(`Origin: ${origin}`);
  if (packSize) lines.push(`Preferred pack size: ${packSize}`);
  lines.push(`Please share current pricing and availability. Thank you!`);
  return buildWhatsAppLink(lines.join("\n"));
}

/**
 * Generic quick-inquiry link used in header/hero/footer CTAs.
 */
export function buildQuickInquiryLink() {
  return buildWhatsAppLink(
    "Namaste Bharat Dry Fruits 🙏\nI'm interested in your premium dry fruits, nuts & gift hampers. Could you please share more details?"
  );
}

/**
 * Bulk / wholesale / corporate gifting inquiry link, optionally
 * pre-filled from the inquiry modal form fields.
 */
export function buildBulkInquiryLink(params?: {
  name?: string;
  phone?: string;
  quantityKg?: string;
  purpose?: string;
  message?: string;
}) {
  if (!params) {
    return buildWhatsAppLink(
      "Namaste Bharat Dry Fruits 🙏\nI'd like to place a bulk / wholesale enquiry. Please share your bulk rate card."
    );
  }
  const { name, phone, quantityKg, purpose, message } = params;
  const lines = [
    `Namaste Bharat Dry Fruits 🙏 New Bulk Enquiry`,
    name ? `Name: ${name}` : "",
    phone ? `Phone/WhatsApp: ${phone}` : "",
    quantityKg ? `Quantity needed: ${quantityKg} kg` : "",
    purpose ? `Purpose: ${purpose}` : "",
    message ? `Message: ${message}` : "",
  ].filter(Boolean);
  return buildWhatsAppLink(lines.join("\n"));
}

export function buildTelLink(number: string = BUSINESS_PHONE_LINK) {
  return `tel:${number}`;
}
