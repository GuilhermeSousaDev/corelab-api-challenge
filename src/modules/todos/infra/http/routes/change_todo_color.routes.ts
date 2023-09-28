import { celebrate, Segments, Joi } from 'celebrate';
import { Router } from 'express';
import ChangeTodoColorController from '../controllers/ChangeTodoColorController';

const changeTodoColorRouter = Router();
const changeTodoCollorController = new ChangeTodoColorController();

changeTodoColorRouter.put(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    },
    [Segments.BODY]: {
      color: Joi.string().required(),
    },
  }),
  changeTodoCollorController.index,
);

export default changeTodoColorRouter;
