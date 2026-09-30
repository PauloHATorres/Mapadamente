# O Mapa da Mente — nova versão

O Mapa da Mente, reorganizado na direção visual **Arquivo Cultural e Intelectual**.

## Stack
- React 18
- Vite
- Lucide React
- GitHub Pages via GitHub Actions

## Rodar localmente
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## Arquitetura
- `src/content.js`: conteúdo e rotas do site.
- `src/App.jsx`: homepage, busca, navegação e templates internos.
- `src/styles.css`: sistema visual e responsividade.
- `PRODUCT.md`: verdade do produto e limites editoriais.
- `DESIGN.md`: direção visual aprovada.
- `.impeccable/design.json`: tokens principais do sistema.

## Regra editorial
Conteúdo clínico é apresentado de forma educativa e não substitui avaliação profissional. Critérios, contatos e informações terapêuticas devem ser mantidos atualizados.

## Publicação
Cada push na `main` dispara o workflow de GitHub Pages.
