import { container } from 'tsyringe';
import { UserRepository } from './repositories/UserRepository';
import { UserService } from './services/UserService';

// Register dependencies
container.registerSingleton<UserRepository>('UserRepository', UserRepository);
container.registerSingleton<UserService>('UserService', UserService);
