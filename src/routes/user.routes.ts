import { Router } from 'express';
import { validateDto } from '../middlewares/validateDto';
import { CreateUserDto } from '../dto/CreateUserDto';
import { container } from 'tsyringe';
import { UserService } from '../services/UserService';

const router = Router();
const userService = container.resolve(UserService);

router.post('/', validateDto(CreateUserDto), async (req, res) => {
  const user = await userService.create(req.body);
  res.json(user);
});

export default router;
