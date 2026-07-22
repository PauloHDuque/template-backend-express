import { createSafeUser } from './users.service';
import { prisma } from '../../config/database';

jest.mock('../../config/database', () => ({
  prisma: {
    user: {
      create: jest.fn().mockResolvedValue({
        id: 1,
        email: 'user@example.com',
        password: 'secure-password',
      }),
    },
  },
}));

describe('createSafeUser', () => {
  it('returns a user without exposing the password', async () => {
    const result = await createSafeUser({
      email: 'user@example.com',
      password: 'secure-password',
    });

    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(jest.mocked(prisma.user.create)).toHaveBeenCalledWith({
      data: {
        email: 'user@example.com',
        password: 'secure-password',
      },
    });
    expect(result).toEqual({ id: 1, email: 'user@example.com' });
  });
});
