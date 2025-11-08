// src/components/WhatsAppButton.jsx
import React from 'react';
import { MessageCircle } from 'lucide-react'; // Lucide icon

export default function WhatsAppButton() {
  const phoneNumber = '+971581084957';
  const message = encodeURIComponent('Hello, I would like to inquire about your services.');

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 flex items-center justify-center w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-all duration-300"
      title="Chat with us on WhatsApp"
    >
      <MessageCircle className="w-8 h-8" strokeWidth={2.5} />
    </a>
  );
}
