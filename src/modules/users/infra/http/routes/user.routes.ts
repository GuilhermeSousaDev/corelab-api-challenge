import { celebrate, Segments, Joi } from 'celebrate';
import { Router } from 'express';
import UserController from '../controllers/UserController';

const userRouter = Router();
const userController = new UserController();

userRouter.post(
    '/',
    celebrate({
        [Segments.BODY]: {
            name: Joi.string().required(),
        },
    }),
    userController.create,
);

export default userRouter;