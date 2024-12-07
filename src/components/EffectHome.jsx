import React, { useEffect, useRef } from 'react';

const InteractiveBubble = () => {
  const bubbleRef = useRef(null); // Referencia al elemento de la burbuja
  const curPos = useRef({ x: 0, y: 0 }); // Posición actual
  const targetPos = useRef({ x: 0, y: 0 }); // Posición objetivo

  useEffect(() => {
    const updatePosition = () => {
      const { x: curX, y: curY } = curPos.current;
      const { x: tgX, y: tgY } = targetPos.current;

      curPos.current.x += (tgX - curX) / 20;
      curPos.current.y += (tgY - curY) / 20;

      if (bubbleRef.current) {
        bubbleRef.current.style.transform = `translate(${Math.round(curPos.current.x)}px, ${Math.round(curPos.current.y)}px)`;
      }

      requestAnimationFrame(updatePosition);
    };

    const handleMouseMove = (event) => {
      targetPos.current = { x: event.clientX, y: event.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);
    updatePosition();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <div ref={bubbleRef} className="interactive" />;
};

export default InteractiveBubble;
