import { injectable } from 'tsyringe';
import type { Users, Prisma } from '@/generated/prisma/index';
import { PrismaClient } from '@/generated/prisma/index';
import { BaseRepository } from './BaseRepository';

const prisma = new PrismaClient();

@injectable()
export class UserRepository extends BaseRepository<
  Users,
  Prisma.UsersCreateInput,
  Prisma.UsersUpdateInput
> {
  async create(data: Prisma.UsersCreateInput): Promise<Users> {
    return prisma.users.create({ data });
  }

  async findMany(): Promise<Users[]> {
    return prisma.users.findMany();
  }

  async findById(id: string): Promise<Users | null> {
    return prisma.users.findUnique({ where: { id } });
  }

  async update(id: string, data: Prisma.UsersUpdateInput): Promise<Users | null> {
    return prisma.users.update({ where: { id }, data });
  }

  async delete(id: string): Promise<void> {
    await prisma.users.delete({ where: { id } });
  }
}
