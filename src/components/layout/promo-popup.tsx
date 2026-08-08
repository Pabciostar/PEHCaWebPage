'use client';

import { useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" fill="currentColor" viewBox="0 0 448 512" {...props}>
    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.8 0-67.6-9.5-97.8-26.7l-7.1-4.2-73.3 19.3 19.3-71.6-4.7-7.5c-19.1-30.1-29.6-65.4-29.6-101.9 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
  </svg>
);

/**
 * TEMA DEL POPUP: edita estos valores para cambiar la imagen o el botón
 * sin tocar el resto del componente.
 *
 * Imagen: colócala en public/images/popup/ y actualiza imageSrc con su nombre.
 */
const POPUP_CONFIG = {
  enabled: true,
  imageSrc: '/images/popup/popup-2026-08-07.webp',
  imageAlt: 'Promoción PEHCa!',
  ctaText: 'Comunícate con nosotros',
  ctaHref: 'https://wa.me/56982397461',
  // Se vuelve a mostrar una vez por sesión de navegador (se resetea al cerrar el navegador).
  showOncePerSession: true,
  delayMs: 800,
};

const SESSION_KEY = 'pehca_promo_popup_shown';

export function PromoPopup() {
  const [open, setOpen] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);

  useEffect(() => {
    if (!POPUP_CONFIG.enabled) return;

    if (POPUP_CONFIG.showOncePerSession) {
      const alreadyShown = sessionStorage.getItem(SESSION_KEY);
      if (alreadyShown) return;
    }

    const timer = setTimeout(() => setOpen(true), POPUP_CONFIG.delayMs);

    return () => clearTimeout(timer);
  }, []);

  // Si la imagen todavía no fue subida por el cliente, no mostramos un popup roto,
  // y no lo marcamos como "visto" para volver a intentarlo en la próxima carga.
  if (imageFailed) return null;

  const handleImageLoad = () => {
    if (POPUP_CONFIG.showOncePerSession) {
      sessionStorage.setItem(SESSION_KEY, '1');
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="w-[95vw] max-w-2xl max-h-[90vh] gap-0 overflow-y-auto p-0 sm:rounded-2xl">
        <DialogTitle className="sr-only">{POPUP_CONFIG.imageAlt}</DialogTitle>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={POPUP_CONFIG.imageSrc}
          alt={POPUP_CONFIG.imageAlt}
          className="block w-full h-auto"
          onLoad={handleImageLoad}
          onError={() => setImageFailed(true)}
        />
        <div className="p-4 md:p-6">
          <Button
            asChild
            size="lg"
            className="w-full bg-primary font-black hover:scale-105 transition-transform"
            onClick={() => setOpen(false)}
          >
            <a href={POPUP_CONFIG.ctaHref} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3">
              <WhatsAppIcon className="w-5 h-5 shrink-0" />
              <span>{POPUP_CONFIG.ctaText}</span>
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
