# Titan Card — versão estática para Vercel

Esta versão gera o site como páginas prontas (HTML). Não precisa de servidor,
então não dá tela branca nem página de erro na Vercel.

## Subir no GitHub (importante)
1. No repositório do GitHub, APAGUE todos os arquivos antigos.
2. Envie o conteúdo desta pasta. Os arquivos ficam na raiz do repositório,
   sem nenhuma pasta por cima: package.json, vercel.json, vite.config.ts, src/, public/ ...

## Configuração na Vercel
- Settings > Build and Deployment > Framework Preset: **Other**
- Deixe Build Command, Output Directory e Install Command sem alteração manual
  (o arquivo vercel.json já define tudo: saída em `dist/client`).
- Root Directory: vazio (raiz).
- Depois: Deployments > ... > Redeploy (desmarque "Use existing Build Cache").

## Editar no VS Code
- Textos: src/routes/index.tsx
- Cartão: src/components/landing/TitanCard.tsx
- Cores: src/styles.css
- Nunca edite src/routeTree.gen.ts (é gerado sozinho).

## Testar no computador (Node.js 22)
    npm install
    npm run dev        # abre o site para editar
    npm run build      # gera a versão final em dist/client
    npm run preview    # mostra a versão final
