/**
 * PARALLAX.JS // MICRO-MOVIMENTO SUTIL NO RETRATO
 * Caio Godoy Batistella — Portfólio
 * Adiciona leve profundidade tátil no card do designer
 */

(function () {
  'use strict';

  const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (!isFinePointer) return;

  const portraitCard = document.querySelector('.hero-portrait-card');
  if (!portraitCard) return;

  let targetX = 0;
  let targetY = 0;
  let currentX = 0;
  let currentY = 0;

  window.addEventListener('mousemove', (e) => {
    const rect = portraitCard.getBoundingClientRect();
    const cardCenterX = rect.left + rect.width / 2;
    const cardCenterY = rect.top + rect.height / 2;

    const diffX = (e.clientX - cardCenterX) / (window.innerWidth / 2);
    const diffY = (e.clientY - cardCenterY) / (window.innerHeight / 2);

    targetX = Math.max(-1, Math.min(1, diffX));
    targetY = Math.max(-1, Math.min(1, diffY));
  }, { passive: true });

  window.addEventListener('mouseleave', () => {
    targetX = 0;
    targetY = 0;
  });

  function renderTilt() {
    currentX += (targetX - currentX) * 0.08;
    currentY += (targetY - currentY) * 0.08;

    const rotX = -currentY * 6;
    const rotY = currentX * 6;

    portraitCard.style.transform = `perspective(900px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg)`;
    requestAnimationFrame(renderTilt);
  }

  requestAnimationFrame(renderTilt);
})();
