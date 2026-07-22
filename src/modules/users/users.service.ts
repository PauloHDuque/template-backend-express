import { createUserInputSchema, type CreateUserInput } from './users.schema';
import { prisma } from '../../config/database';

export interface SafeUser {
  id: number;
  email: string;
}

export async function createSafeUser(input: CreateUserInput): Promise<SafeUser> {
  const data = createUserInputSchema.parse(input);

  const user = await prisma.user.create({
    data,
  });

  return { id: user.id, email: user.email };
}
