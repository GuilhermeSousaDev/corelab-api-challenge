import { Router } from 'express';
import userRouter from '../../../../modules/users/infra/http/routes/user.routes';
import todoRouter from '../../../../modules/todos/infra/http/routes/todo.routes';
import toggleTodoToFavoriteRouter from '../../../../modules/todos/infra/http/routes/toggle_todo_to_favorite.routes';

const router = Router();

router.use('/user', userRouter);
router.use('/todo', todoRouter);
router.use('/todo/favorite', toggleTodoToFavoriteRouter);

export { router };
