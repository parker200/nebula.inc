import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle } from 'lucide-react';
import { WA_LINKS } from '../utils/whatsapp';

export default function FloatingWhatsApp() {
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  return (
    <a
      href={WA_LINKS.general}
      target="_blank"
      rel="noopener noreferrer"
      className={`whatsapp-floating group transition-all duration-300 ${
        isScrolling 
          ? 'w-12 h-12 p-0 justify-center rounded-full' 
          : 'w-12 h-12 p-0 justify-center rounded-full sm:w-auto sm:px-4 sm:py-3 sm:rounded-2xl'
      }`}
      aria-label="Contactar a Nébula por WhatsApp"
      title="Contactar a Nébula por WhatsApp"
    >
      <div className="relative flex items-center justify-center flex-shrink-0">
        <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
        <span className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full opacity-80" />
      </div>
      
      {!isScrolling && (
        <div className="hidden sm:flex flex-col text-left whitespace-nowrap overflow-hidden transition-opacity duration-200">
          <span className="text-[10px] font-mono opacity-90 leading-tight uppercase tracking-wider">
            Guardia Santa Cruz
          </span>
          <span className="text-xs sm:text-sm font-bold leading-tight">
            WhatsApp 24/7
          </span>
        </div>
      )}
    </a>
  );
}
