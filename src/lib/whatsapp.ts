export const WHATSAPP_NUMBER = "966503807517";

export const openWhatsApp = (message: string) => {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  const popup = window.open(url, "_blank");
  if (popup) {
    popup.opener = null;
    return true;
  }
  return false;
};
