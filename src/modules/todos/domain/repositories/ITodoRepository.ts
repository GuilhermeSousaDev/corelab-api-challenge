import { ICreateTodo } from '../models/ICreateTodo';
import { ITodo } from '../models/ITodo';

export interface ITodoRepository {
    find(): Promise<ITodo[]>;
    findById(id: string): Promise<ITodo>;
    create(data: ICreateTodo): Promise<ITodo>;
    save(todo: ITodo): Promise<ITodo>;
    delete(todo: ITodo): Promise<void>;
}