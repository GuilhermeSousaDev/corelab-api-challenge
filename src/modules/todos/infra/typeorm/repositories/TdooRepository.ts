import { Repository } from 'typeorm';
import { AppDataSource } from '../../../../../shared/typeorm/data-source';
import { ITodoRepository } from '../../../domain/repositories/ITodoRepository';
import { Todo } from '../entities/Todo';
import { ITodo } from '../../../domain/models/ITodo';
import { ICreateTodo } from '../../../domain/models/ICreateTodo';

export default class TodoRepository implements ITodoRepository {
    private ormRepository: Repository<Todo>;

    constructor() {
        this.ormRepository = AppDataSource.getRepository(Todo);
    }

    public async save(todo: ITodo): Promise<ITodo> {
        return await this.ormRepository.save(todo);
    }

    public async create(data: ICreateTodo): Promise<ITodo> {
        return this.ormRepository.create(data);
    }

    public async delete(todo: ITodo): Promise<void> {
        this.ormRepository.remove(todo);
    }

    public async find(): Promise<ITodo[]> {
        return this.ormRepository.find();
    }

    public async findById(id: string): Promise<ITodo> {
        return this.ormRepository.findOne({ where: { id } });
    }
    
}
