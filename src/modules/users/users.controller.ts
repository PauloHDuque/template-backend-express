import type { Request, Response } from 'express';
import { createSafeUser } from './users.service';
import { z } from 'zod';
import { createUserInputSchema } from './users.schema';

export async function createUser(request: Request, response: Response): Promise<void> {
  try {
    const data = createUserInputSchema.parse(request.body);
    const user = await createSafeUser(data);

    response.status(201).json(user);
  } catch (error) {
    if (error instanceof z.ZodError) {
      response.status(400).json({ errors: error.issues });
    } else {
      console.error(error);
      response.status(500).json({ error: 'Internal Server Error' });
    }
  }
}
