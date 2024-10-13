import React, { useState, useRef, useEffect } from 'react';
import { createPopper } from '@popperjs/core';

interface TooltipProps {
  id: string;
  img: string;
  name: string;
  cooldown?: number;
  tooltip: string;
}

const TooltipItem: React.FC<TooltipProps> = ({ id, img, name, cooldown, tooltip }) => {
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (imgRef.current && tooltipRef.current) {
      createPopper(imgRef.current, tooltipRef.current, {
        placement: 'top',  // Posiciona por defecto arriba de la imagen
        modifiers: [
          {
            name: 'flip',
            options: {
              fallbackPlacements: ['bottom'], // Intenta otras posiciones si no cabe arriba
            },
          },
          {
            name: 'preventOverflow',
            options: {
              boundary: 'viewport', // Asegura que el tooltip no se salga de la pantalla
              padding: 20, // Deja un espacio de 20px entre los bordes laterales y el viewport
            },
          },
          {
            name: 'offset', // Añadimos el modificador offset para la separación
            options: {
              offset: [0, 10], // Desplazamos el tooltip 10px desde la imagen (segundo valor es el espacio vertical)
            },
          },
        ],
      });
    }
  }, [isVisible]);

  return (
    <div
      className="relative"
      ref={imgRef}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <img className="w-30 mx-auto" src={img} alt={name} />

      {isVisible && (
        <div
          id={id}
          ref={tooltipRef}
          role="tooltip"
          className="z-50 w-64 px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg shadow-sm text-left"
        >
          <p><b>{name}</b></p>
          {cooldown && <p>Cooldown: {cooldown}s</p>}
          <p>{tooltip}</p>
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
      )}
    </div>
  );
};

export default TooltipItem;
