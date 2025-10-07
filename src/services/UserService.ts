// src/services/UserService.ts
import { injectable, inject } from 'tsyringe';
import type { Prisma, Users } from '@/generated/prisma/index';
import { BaseService } from './BaseService';
import { UserRepository } from '@/repositories/UserRepository';

@injectable()
export class UserService extends BaseService<
  Users,
  Prisma.UsersCreateInput,
  Prisma.UsersUpdateInput
> {
  constructor(
    @inject('UserRepository')
    private userRepository: UserRepository,
  ) {
    super();
  }

  async create(data: Prisma.UsersCreateInput): Promise<Users> {
    return this.userRepository.create(data);
  }

  async findAll(): Promise<Users[]> {
    return this.userRepository.findMany();
  }

  async findById(id: string): Promise<Users | null> {
    return this.userRepository.findById(id);
  }

  async update(id: string, data: Prisma.UsersUpdateInput): Promise<Users | null> {
    return this.userRepository.update(id, data);
  }

  async delete(id: string): Promise<void> {
    return this.userRepository.delete(id);
  }
}
