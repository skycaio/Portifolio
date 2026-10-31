# PORTFÓLIO AUTORAL // CAIO GODOY BATISTELLA — DESIGNER (2026)

Portfólio editorial contemporâneo de **Caio Godoy Batistella**, designer multidisciplinar especializado em **Design de Interfaces (UI/UX), Identidade Visual, Design Systems e Direção de Arte digital**.

Desenvolvido exclusivamente com **HTML5, CSS3 avançado e JavaScript puro**, sem qualquer biblioteca ou framework externo.

---

## ✦ PRINCIPAIS REQUISITOS IMPLEMENTADOS

1. **Cursor com Sombra Suave (Sem Círculo Invasivo):**
   - O anel circular rígido anterior que seguia o mouse foi **completamente removido**.
   - Em seu lugar, foi implementada uma **sombra suave difusa e sutil** (`.custom-cursor-shadow`) com gradiente radial e interpolação linear (LERP), acompanhada de um micro-ponto de precisão (`.custom-cursor-dot`). Em telas touch, é desativado automaticamente.

2. **Identidade do Designer Caio Godoy Batistella:**
   - Todos os textos, metadados, títulos, badges e narrativas foram adaptados para refletir a atuação profissional como **Designer** (Product Design, UI/UX, Design Systems, Tipografia, Identidade de Marca e Direção de Arte).

3. **Foto do Autor Exclusivamente no "Sobre Mim":**
   - A fotografia profissional (`assets/images/portrait.jpg`) fica posicionada **estritamente na seção Sobre Mim**, com cartão de inclinação tridimensional (3D tilt via `parallax.js`), moldura refinada, sombras suaves e anotações autorais manuscritas (`Architects Daughter`).
   - Nas demais seções (Hero, Projetos, Habilidades e Contatos), a foto foi removida para priorizar a composição tipográfica e os cases de design.

4. **Single-Page Unificada:**
   - Todas as seções agora vivem de forma contínua em [`index.html`](file:///c:/Users/User/Downloads/MY%20SITE%20Portifolio-2A-2026/index.html).
   - O menu de navegação realiza scroll suave com compensação de altura do cabeçalho.
   - Os arquivos `projetos.html` e `contatos.html` redirecionam instantaneamente para `#projetos` e `#contato`.

5. **Transição Dinâmica de Cores ao Trocar de Assunto:**
   - Através de um `IntersectionObserver` de alta precisão, conforme o usuário navega ou rola pela página, a atmosfera e os acentos cromáticos se transformam sutilmente:
     - **Hero (Apresentação / Impacto):** Violeta Elétrico Sofisticado (`#8B5CF6`)
     - **Sobre Mim (Retrato & Filosofia de Caio):** Ouro Champanhe & Âmbar Acolhedor (`#E0A96D`)
     - **Projetos (Cases Selecionados):** Ciano Cristalino & Cobalto (`#00D2FF`)
     - **Habilidades & Metodologia:** Verde Esmeralda & Menta (`#10B981`)
     - **Contato (Transmissão Direta):** Coral Sunset Vibrante (`#F43F5E`)
   - Brilhos de fundo, bordas, badges e indicadores de menu adaptam-se harmoniosamente.

---

## ✦ ESTRUTURA DO PROJETO

```
MY SITE Portifolio-2A-2026/
├── index.html              # Portfólio Single-Page unificado (Hero, Sobre Mim, Projetos, Skills, Contato)
├── projetos.html           # Redirecionamento instantâneo para index.html#projetos
├── contatos.html           # Redirecionamento instantâneo para index.html#contato
├── README.md               # Documentação técnica atualizada
├── css/
│   ├── style.css           # Tokens cromáticos dinâmicos, tipografia (Syne + Plus Jakarta), sombras suaves e cursor
│   ├── components.css      # Header glassmorphic, palco hero, 3D tilt portrait, cards de cases, formulário e modal
│   └── responsive.css      # Responsividade para tablets/smartphones e desativação em telas touch
├── js/
│   ├── main.js             # Cursor com sombra suave, IntersectionObserver de temas por seção, relógio e cópia de e-mail
│   ├── parallax.js         # Inclinação 3D no retrato do designer e parallax nas palavras monumentais
│   ├── transitions.js      # Cortinas de transição estética
│   └── projects.js         # Filtragem de cases de design em tempo real e modal de especificações
└── assets/
    └── images/
        └── portrait.jpg    # Retrato oficial de Caio Godoy Batistella (exibido apenas no Sobre Mim)
```

---

## ✦ COMO EXECUTAR O SITE

Dê um duplo clique no arquivo [`index.html`](file:///c:/Users/User/Downloads/MY%20SITE%20Portifolio-2A-2026/index.html) para abrir diretamente em qualquer navegador moderno. Não requer Node.js, compilação ou instalação de pacotes — é 100% código nativo, ultrarrápido e fluido.
