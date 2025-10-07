import { PrismaClient } from '../../generated/prisma/index';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const hashed = await bcrypt.hash('password123', 10);
  await prisma.users.upsert({
    where: { email: 'test@example.com' },
    update: {},
    create: {
      email: 'test@example.com',
      first_name: 'John',
      last_name: 'Doe',
      password: hashed,
    },
  });
}

main()
  .then(() => console.log('Seeding done'))
  .catch(e => console.error(e))
  .finally(async () => await prisma.$disconnect());
