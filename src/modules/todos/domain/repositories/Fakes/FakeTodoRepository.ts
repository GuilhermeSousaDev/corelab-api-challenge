import { randomUUID } from 'crypto';
import { ITodo } from '../../models/ITodo';
import { ITodoRepository } from '../ITodoRepository';
import { ICreateTodo } from '../../models/ICreateTodo';
import { Todo } from '../../../infra/typeorm/entities/Todo';

export class FakeTodoRepository implements ITodoRepository {
    protected todos: ITodo[] = [
        {
            id: 'uuid',
            title: 'Routine',
            task: 'programming',
            favorite: false,
            createdAt: new Date(),
            updatedAt: new Date(),
        }
    ];

    public async save(todo: ITodo): Promise<ITodo> {
        const findIndex = this.todos.findIndex(
            findTodo => findTodo.id === todo.id
        );

        this.todos[findIndex] = todo;

        return todo;
    }

    public async find(): Promise<ITodo[]> {
        return this.todos;
    }

    public async findById(id: string): Promise<ITodo> {
        return this.todos.find(todo => todo.id === id);
    }

    public async create({ title, task }: ICreateTodo): Promise<ITodo> {
        const todo = new Todo();

        todo.id = randomUUID();
        todo.title = title;
        todo.task = task;

        this.todos.push(todo);

        return todo;
    }

    public async delete(todo: ITodo): Promise<void> {
        this.todos = this.todos.filter(({ id }) => id !== todo.id);
    }
}