# Web Starter - Next.js + Tailwind + TypeScript

Questo repo è una configurazione base per pagine web dinamiche e responsive.

Contenuto:
- Next.js (TypeScript)
- Tailwind CSS
- ESLint + Prettier
- Docker Compose (Postgres + Adminer) per sviluppo locale
- API route di esempio
- GitHub Actions CI per build e test

Comandi principali:
- npm install
- npm run dev
- npm run build
- docker-compose up -d  # avvia Postgres + Adminer

Note:
- Personalizza il deployment (Vercel/Render) seguendo il file .github/workflows/ci.yml
