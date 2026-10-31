/**
 * MAIN.JS // INTERATIVIDADE ELEGANTE & HUMANIZADA
 * Caio Godoy Batistella — Product & Interface Designer
 * Navegação suave, cópia instantânea de contato, relógio ao vivo e formulário reativo.
 */

(function () {
  'use strict';

  // Objeto de áudio neutro (no-op) para evitar erros caso chamado
  window.portfolioAudio = {
    playHover: () => {},
    playClick: () => {},
    playTransition: () => {}
  };

  /* ==========================================================================
     1. HEADER, MENU & NAVEGAÇÃO SUAVE
     ========================================================================== */
  function initHeaderAndNav() {
    const header = document.querySelector('.site-header');
    const mobileToggle = document.querySelector('.mobile-nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Header com efeito no scroll
    window.addEventListener('scroll', () => {
      if (window.scrollY > 25) {
        header?.classList.add('scrolled');
      } else {
        header?.classList.remove('scrolled');
      }
    }, { passive: true });

    // Menu Mobile
    if (mobileToggle && navMenu) {
      mobileToggle.addEventListener('click', () => {
        const isOpen = navMenu.classList.toggle('open');
        mobileToggle.textContent = isOpen ? 'FECHAR' : 'MENU';
        mobileToggle.setAttribute('aria-expanded', isOpen);
      });
    }

    // Navegação suave ao clicar nos links internos
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#' || targetId === '') return;

        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();

          if (navMenu && navMenu.classList.contains('open')) {
            navMenu.classList.remove('open');
            if (mobileToggle) {
              mobileToggle.textContent = 'MENU';
              mobileToggle.setAttribute('aria-expanded', 'false');
            }
          }

          const headerHeight = header ? header.offsetHeight : 80;
          const elementPosition = targetEl.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 16;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });

          history.pushState(null, null, targetId);
        }
      });
    });

    // Observador para destacar link ativo no menu
    const sections = document.querySelectorAll('section[id]');
    if (sections.length) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const currentId = entry.target.id;
            navLinks.forEach((link) => {
              if (link.getAttribute('href') === `#${currentId}`) {
                link.classList.add('active');
              } else {
                link.classList.remove('active');
              }
            });
          }
        });
      }, { rootMargin: '-25% 0px -45% 0px', threshold: 0.1 });

      sections.forEach((sec) => observer.observe(sec));
    }
  }

  /* ==========================================================================
     2. BOTÃO COPIAR E-MAIL COM FEEDBACK INSTANTÂNEO
     ========================================================================== */
  function initCopyEmail() {
    const copyBtn = document.querySelector('.btn-copy-email');
    const emailLink = document.querySelector('.email-address');

    if (!copyBtn) return;

    copyBtn.addEventListener('click', async () => {
      const email = emailLink ? emailLink.textContent.trim() : 'caio.batistella.design@gmail.com';
      try {
        await navigator.clipboard.writeText(email);
        const originalText = copyBtn.textContent;
        copyBtn.textContent = 'Copiado! ✓';
        copyBtn.style.color = 'var(--accent-primary)';
        copyBtn.style.borderColor = 'var(--accent-primary)';

        setTimeout(() => {
          copyBtn.textContent = originalText;
          copyBtn.style.color = '';
          copyBtn.style.borderColor = '';
        }, 2500);
      } catch (err) {
        // Fallback simples
        prompt('Copie o e-mail abaixo:', email);
      }
    });
  }

  /* ==========================================================================
     3. FORMULÁRIO DE CONTATO & CONTADOR DE CARACTERES
     ========================================================================== */
  function initContactForm() {
    const form = document.querySelector('.contact-form');
    if (!form) return;

    const msgInput = form.querySelector('#mensagem');
    const charCounter = form.querySelector('.char-counter');
    const submitBtn = form.querySelector('button[type="submit"]');

    if (msgInput && charCounter) {
      msgInput.addEventListener('input', () => {
        const len = msgInput.value.length;
        charCounter.textContent = `${len} / 500`;
        charCounter.style.color = len > 450 ? 'var(--accent-primary)' : 'var(--text-muted)';
      });
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const nome = form.querySelector('#nome')?.value.trim();
      const email = form.querySelector('#email')?.value.trim();
      const mensagem = form.querySelector('#mensagem')?.value.trim();

      if (!nome || !email || !mensagem) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
      }

      if (submitBtn) {
        const originalBtnHTML = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<span>Enviando...</span>`;

        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = `<span>Mensagem Enviada! ✓</span>`;
          form.reset();
          if (charCounter) charCounter.textContent = '0 / 500';

          setTimeout(() => {
            submitBtn.innerHTML = originalBtnHTML;
          }, 4000);
        }, 800);
      }
    });
  }

  /* ==========================================================================
     4. RELÓGIO AO VIVO DE SÃO PAULO (UTC-3)
     ========================================================================== */
  function initLiveClock() {
    const clockElements = document.querySelectorAll('.live-clock-target');
    if (!clockElements.length) return;

    function updateTime() {
      const now = new Date();
      // Formata no fuso horário de São Paulo
      const timeStr = now.toLocaleTimeString('pt-BR', {
        timeZone: 'America/Sao_Paulo',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });

      clockElements.forEach((el) => {
        el.textContent = timeStr;
      });
    }

    updateTime();
    setInterval(updateTime, 1000);
  }

  /* ==========================================================================
     INICIALIZAÇÃO GERAL
     ========================================================================== */
  document.addEventListener('DOMContentLoaded', () => {
    initHeaderAndNav();
    initCopyEmail();
    initContactForm();
    initLiveClock();
  });
})();
