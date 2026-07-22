import type { Request, Response } from 'express';
import { createSafeUser } from './users.service';
import { ZodError } from 'zod';

export async function createUser(request: Request, response: Response): Promise<void> {
  try {
    const body = request.body as { email: string; password: string };
    const user = await createSafeUser(body);
    response.status(201).json(user);
  } catch (error) {
    if (error instanceof ZodError) {
      response.status(400).json({ errors: error.issues });
    } else {
      console.error(error);
      response.status(500).json({ error: 'Internal Server Error' });
    }
  }
}
