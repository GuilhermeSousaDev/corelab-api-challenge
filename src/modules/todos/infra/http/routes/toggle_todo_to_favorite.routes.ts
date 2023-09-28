import { celebrate, Segments, Joi } from 'celebrate';
import { Router } from 'express';
import ToggleTodoToFavoriteController from '../controllers/ToggleTodoToFavoriteControlle';

const toggleTodoToFavoriteRouter = Router();
const toggleTodoToFavoriteController = new ToggleTodoToFavoriteController();

toggleTodoToFavoriteRouter.put(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    },
  }),
  toggleTodoToFavoriteController.index,
);

export default toggleTodoToFavoriteRouter;
