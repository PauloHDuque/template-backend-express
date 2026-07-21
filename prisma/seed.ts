import 'dotenv/config';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import { PrismaClient } from '../src/generated/prisma/client';

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error('DATABASE_URL must be defined to seed the database.');
}

const adapter = new PrismaMariaDb(databaseUrl);
const prisma = new PrismaClient({ adapter });

async function seed(): Promise<void> {
  await prisma.user.upsert({
    where: { email: 'master@admin.com' },
    update: { password: 'admin1234' },
    create: {
      email: 'master@admin.com',
      password: 'admin1234',
    },
  });

  console.log('Initial user created successfully.');
}

async function main(): Promise<void> {
  try {
    await seed();
  } catch (error: unknown) {
    console.error('Database seed failed.', error);
    process.exitCode = 1;
  } finally {
    await prisma.$disconnect();
  }
}

void main();
