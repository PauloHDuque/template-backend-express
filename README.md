# Backend Template

A Node.js and TypeScript backend template with Prisma, MySQL, Zod, Jest, ESLint, Prettier, Husky, lint-staged, and commitlint.

## Requirements

- Node.js 20.19 or later
- Docker with Docker Compose

## Getting Started

1. Copy `.env.example` to `.env`.
2. Run `npm install`.
3. Start MySQL with `docker compose up -d`.
4. Generate the Prisma client with `npm run prisma:generate`.
5. Create the initial migration with `npm run prisma:migrate`.
6. Run the test suites with `npm test`.

## Commands

- `npm run dev` starts the application in watch mode.
- `npm run build` compiles the production output.
- `npm run lint` checks TypeScript files.
- `npm run format:check` checks formatting.
- `npm run test:unit` runs unit tests.
- `npm run test:e2e` runs end-to-end tests.
