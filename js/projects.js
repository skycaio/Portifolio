/**
 * PROJECTS.JS // GERENCIAMENTO INTERATIVO DE PROJETOS & MODAL DE CASES
 * Caio Godoy Batistella — Designer
 * Filtragem em tempo real, animações dinâmicas e modal com detalhes de design.
 */

(function () {
  'use strict';

  // Banco de Dados Local dos Cases de Design
  const PROJECTS_DATA = {
    'proj-01': {
      serial: 'Design System · 2026',
      title: 'Lumina — Design System Corporativo',
      category: 'systems',
      client: 'Enterprise SaaS & Fintech',
      year: '2026',
      status: 'Em Produção',
      tagline: 'Sistema de design multimarca escalável com tokens semânticos e conformidade WCAG AAA.',
      description: 'Arquitetura e desenvolvimento de um ecossistema de componentes unificado para múltiplos produtos digitais. Construído no Figma com Auto-Layout avançado, tokens de design semânticos sincronizados e documentação viva para equipes multidisciplinares.',
      architecture: [
        'Mais de 140 componentes atômicos construídos com variantes e auto-layout modular',
        'Estrutura hierárquica de tokens: Global, Semântico e Nível de Componente',
        'Auditoria rigorosa de contraste atendendo à norma WCAG 2.1 nível AAA',
        'Redução comprovada no tempo de handoff entre equipes de design e engenharia'
      ],
      stack: ['Figma Tokens', 'Design System', 'WCAG AAA', 'Style Dictionary', 'Design Ops'],
      metrics: {
        componentes: '140+ ativos',
        acessibilidade: 'WCAG AAA',
        agilidade: '+45% velocidade'
      },
      handNote: 'Construído para garantir consistência e velocidade sem restringir a criatividade.',
      image: 'assets/images/project-lumina.png',
      liveUrl: '#',
      repoUrl: '#'
    },
    'proj-02': {
      serial: 'Direção de Arte · 2026',
      title: 'Aura — Identidade & Interface Sonora',
      category: 'creative',
      client: 'Experimental Audio Lab',
      year: '2026',
      status: 'Award Winner',
      tagline: 'Identidade visual contemporânea e interface para exploração sonora tridimensional.',
      description: 'Direção de arte e conceituação de interface para uma plataforma de composição acústica espacial. Converte princípios visuais cinéticos em uma experiência onde o som é moldado através de contrastes cromáticos e formas em tempo real.',
      architecture: [
        'Direção de arte contemplativa com paleta cromática reativa às frequências sonoras',
        'Microinterações fluidas com física inercial e respostas tácteis ao toque',
        'Tipografia cinética personalizada desenvolvida para visualização de harmônicos',
        'Reconhecido com menção de destaque em design de interação e direção visual'
      ],
      stack: ['Direção de Arte', 'UI Sensorial', 'Identidade Visual', 'Motion Design'],
      metrics: {
        reconhecimento: 'Design Award',
        satisfacao: '98% aprovação',
        sessaoMedia: '14 min médio'
      },
      handNote: 'Explorando os pontos de contato entre design gráfico, ritmo e percepção sensorial.',
      image: 'assets/images/project-aura.png',
      liveUrl: '#',
      repoUrl: '#'
    },
    'proj-03': {
      serial: 'App Mobile · 2025',
      title: 'Nexus — App Mobile Bancário',
      category: 'mobile',
      client: 'Neobank Global',
      year: '2025',
      status: 'Concluído',
      tagline: 'Redesign completo da experiência bancária mobile com foco em clareza financeira.',
      description: 'Pesquisa com usuários, reformulação de fluxos essenciais e redesign de interface para aplicativo bancário com ampla base ativa. Eliminação de atritos em transferências diárias e visualização inteligente de investimentos.',
      architecture: [
        'Pesquisa com usuários e mapeamento de jornadas reais de transferência',
        'Fluxo de pagamentos instantâneos simplificado e reduzido para menos etapas',
        'Cards modulares personalizáveis na tela inicial com controle de visualização',
        'Aumento significativo na retenção de usuários e clareza de extrato'
      ],
      stack: ['UX Research', 'Mobile UI (iOS / Android)', 'Prototipagem', 'Figma'],
      metrics: {
        retencao: '+34% uso ativo',
        fluxo: '2 etapas',
        avaliacao: '4.8 estrelas'
      },
      handNote: 'Simplificar interfaces financeiras é dar autonomia e segurança a quem usa.',
      image: 'assets/images/project-nexus.png',
      liveUrl: '#',
      repoUrl: '#'
    },
    'proj-04': {
      serial: 'Design Editorial · 2025',
      title: 'Kinetic — Identidade Visual & Tipografia',
      category: 'experimental',
      client: 'Bienal Internacional de Design',
      year: '2025',
      status: 'Curadoria Selecionada',
      tagline: 'Identidade visual, cartazes serigráficos e catálogo editorial para exposição contemporânea.',
      description: 'Projeto de direção visual para bienal de arte e design. Combinação de tipografia brutalista autoral com sistemas de grid flexíveis, desdobrando-se harmoniosamente em grandes formatos impressos e peças interativas digitais.',
      architecture: [
        'Desenho de espécime tipográfico autoral com pesos ópticos equilibrados',
        'Sistema de grade modular assimétrica adaptável a múltiplos suportes físicos e digitais',
        'Série de cartazes serigráficos táteis com acabamento gráfico especial',
        'Experiência editorial online inspirada no manuseio tátil de publicações impressas'
      ],
      stack: ['Design Editorial', 'Tipografia', 'Branding', 'Direção Gráfica'],
      metrics: {
        pecas: '48 peças únicas',
        visitantes: '65 mil pessoas',
        reconhecimento: 'Capa Editorial'
      },
      handNote: 'A tipografia expressiva tem o poder de criar presença e identidade imediata.',
      image: 'assets/images/project-kinetic.png',
      liveUrl: '#',
      repoUrl: '#'
    },
    'proj-05': {
      serial: 'Interface HMI · 2025',
      title: 'Hyperdrive — Interface Digital Automotiva',
      category: 'systems',
      client: 'Smart Mobility Systems',
      year: '2025',
      status: 'Em Produção',
      tagline: 'Interface Homem-Máquina (HMI) para displays e cockpits digitais de veículos elétricos.',
      description: 'Design de sistema de interface para painéis centrais e displays digitais. Desenvolvido com foco em ergonomia visual cognitiva, legibilidade sob sol intenso e resposta rápida sem desviar a atenção do condutor.',
      architecture: [
        'Hierarquia tipográfica de leitura instantânea para visualização rápida em movimento',
        'Modo escuro contextual com ajuste dinâmico conforme a luz ambiente',
        'Biblioteca de iconografia proprietária com espessura uniforme e alta legibilidade',
        'Validação de usabilidade com testes de percepção e tempo de reação'
      ],
      stack: ['HMI Design', 'Cockpit Digital', 'Ergonomia', 'Design Systems'],
      metrics: {
        leitura: '< 0.3s olhar',
        contraste: 'Anti-reflexo',
        componentes: '80+ estados HMI'
      },
      handNote: 'Em design automotivo, clareza e velocidade de percepção são fundamentais.',
      liveUrl: '#',
      repoUrl: '#'
    },
    'proj-06': {
      serial: 'Branding & Packaging · 2024',
      title: 'Strata — Branding & Embalagens Sustentáveis',
      category: 'creative',
      client: 'Eco-Luxury Studio',
      year: '2024',
      status: 'Concluído',
      tagline: 'Identidade de marca, packaging tátil em papéis reciclados e presença digital consciente.',
      description: 'Construção da identidade visual completa para ateliê consciente de bem-estar. Inclui desenvolvimento estrutural de embalagens em papel reciclado com tintas ecológicas, logotipo contemporâneo e experiência digital envolvente.',
      architecture: [
        'Estratégia de marca baseada em transparência, sustentabilidade e sofisticação',
        'Design estrutural de frascos e caixas táteis com materiais circulares',
        'Direção de arte fotográfica valorizando texturas orgânicas e matérias-primas',
        'Experiência de e-commerce fluida focada na história e propósito da marca'
      ],
      stack: ['Branding', 'Design de Embalagem', 'E-Commerce UX', 'Direção de Arte'],
      metrics: {
        engajamento: '+60% retenção',
        materiais: '100% circular',
        avaliacao: '4.9/5 estrelas'
      },
      handNote: 'Unindo a sofisticação visual ao compromisso autêntico com a sustentabilidade.',
      image: 'assets/images/project-strata.png',
      liveUrl: '#',
      repoUrl: '#'
    }
  };

  /**
   * Inicializa o filtro de categorias
   */
  function initProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    const counterDisplay = document.querySelector('.filter-counter');

    if (!filterButtons.length || !projectCards.length) return;

    filterButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        filterButtons.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter') || 'all';
        let visibleCount = 0;

        projectCards.forEach((card) => {
          const cardCategory = card.getAttribute('data-category');

          if (filterValue === 'all' || cardCategory === filterValue) {
            card.style.display = 'flex';
            card.style.animation = 'fadeIn 0.35s ease forwards';
            visibleCount++;
          } else {
            card.style.display = 'none';
          }
        });

        if (counterDisplay) {
          counterDisplay.textContent = visibleCount === projectCards.length
            ? 'Todos os projetos selecionados'
            : `${visibleCount} de ${projectCards.length} projetos`;
        }

        if (window.portfolioAudio) {
          window.portfolioAudio.playClick();
        }
      });
    });
  }

  /**
   * Inicializa o Modal de Especificações do Projeto
   */
  function initProjectModal() {
    const modalBackdrop = document.querySelector('.modal-backdrop');
    const modalPanel = document.querySelector('.modal-content-panel');
    const openButtons = document.querySelectorAll('.open-spec-btn');
    const closeBtns = document.querySelectorAll('.modal-close-btn');

    if (!modalBackdrop || !modalPanel) return;

    function openModal(projectId) {
      const data = PROJECTS_DATA[projectId];
      if (!data) return;

      const titleEl = modalPanel.querySelector('.modal-proj-title');
      const serialEl = modalPanel.querySelector('.modal-proj-serial');
      const descEl = modalPanel.querySelector('.modal-proj-desc');
      const archListEl = modalPanel.querySelector('.modal-proj-arch');
      const stackListEl = modalPanel.querySelector('.modal-proj-stack');
      const metricsListEl = modalPanel.querySelector('.modal-proj-metrics');
      const handNoteEl = modalPanel.querySelector('.modal-proj-handnote');

      if (titleEl) titleEl.textContent = data.title;
      if (serialEl) serialEl.textContent = `${data.serial} · ${data.client} (${data.year})`;
      if (descEl) descEl.textContent = data.description;

      if (archListEl) {
        archListEl.innerHTML = data.architecture
          .map((item) => `<li><span>${item}</span></li>`)
          .join('');
      }

      if (stackListEl) {
        stackListEl.innerHTML = data.stack
          .map((tech) => `<span class="project-tag tag-accent">${tech}</span>`)
          .join('');
      }

      if (metricsListEl) {
        metricsListEl.innerHTML = Object.entries(data.metrics)
          .map(([key, val]) => `
            <div class="metric-pill">
              <div class="metric-pill-label">${key}</div>
              <div class="metric-pill-val">${val}</div>
            </div>
          `)
          .join('');
      }

      if (handNoteEl) {
        handNoteEl.textContent = data.handNote;
      }

      modalBackdrop.classList.add('open');
      document.body.style.overflow = 'hidden';

      if (window.portfolioAudio) {
        window.portfolioAudio.playClick();
      }
    }

    function closeModal() {
      modalBackdrop.classList.remove('open');
      document.body.style.overflow = '';
    }

    // Usar delegação de eventos para garantir funcionamento
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('.open-spec-btn');
      if (btn) {
        e.preventDefault();
        const id = btn.getAttribute('data-project-id');
        openModal(id);
      }
    });

    closeBtns.forEach((btn) => {
      btn.addEventListener('click', closeModal);
    });

    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        closeModal();
      }
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalBackdrop.classList.contains('open')) {
        closeModal();
      }
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    initProjectFilters();
    initProjectModal();
  });
})();
