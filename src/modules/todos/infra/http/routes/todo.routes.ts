import { celebrate, Segments, Joi } from 'celebrate';
import { Router } from 'express';
import TodoController from '../controllers/TodoController';

const todoRouter = Router();
const todoController = new TodoController();

todoRouter.get('/', todoController.index);

todoRouter.post(
    '/',
    celebrate({
        [Segments.BODY]: {
            title: Joi.string().required(),
            task: Joi.string().required(),
        },
    }),
    todoController.create,
);

todoRouter.put(
    '/:id',
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().required(),
        },
        [Segments.BODY]: {
            title: Joi.string().required(),
            task: Joi.string().required(),
        },
    }),
    todoController.update,
);

todoRouter.delete(
    '/:id',
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().required(),
        },
    }),
    todoController.delete,
);

export default todoRouter;