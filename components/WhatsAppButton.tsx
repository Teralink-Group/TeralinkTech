
"use client";

import { MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER = "971566914197"; // Replace with Teralink's WhatsApp number
const WHATSAPP_MESSAGE =
  "Hello Teralink Technical Solutions, I would like to enquire about your IT services.";

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Teralink Technical Solutions on WhatsApp"
      title="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-[9999] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#1ebe5d] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-green-200"
    >
        <FaWhatsapp size={32} />
    </a>
  );
}
