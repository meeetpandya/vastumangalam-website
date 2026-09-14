"use client";

import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  const phoneNumber = "919173391540";

  const message = encodeURIComponent(
    "Hello Ravi Bhatt, I would like to know more about your Vastu consultation services."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Vastu Mangalam on WhatsApp"
      className="whatsapp-float"
    >
      <MessageCircle size={26} strokeWidth={2.2} />

      <span className="whatsapp-tooltip">
        Chat with us
      </span>
    </a>
  );
}