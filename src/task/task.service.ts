import { Injectable, NotFoundException } from '@nestjs/common';
import { Task } from 'src/models/task.model';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TasksGateway } from './task.gateway';

@Injectable()
export class TasksService {
  constructor(private tasksGateway: TasksGateway) {}

  async createTask(
    createTaskDto: CreateTaskDto,
    userId: number,
  ): Promise<Task> {
    const { title, description } = createTaskDto;
    const task = await Task.create({
      title,
      description,
      userId,
      isCompleted: false,
    });
    this.tasksGateway.sendTaskEvent('taskCreated', task);
    return task;
  }

  async findAllTasks(userId: number): Promise<Task[]> {
    return Task.findAll({
      where: { userId },
    });
  }

  async findOneTask(id: number, userId: number): Promise<Task> {
    const task = await Task.findOne({
      where: { id, userId },
    });
    if (!task) {
      throw new NotFoundException(`Task with ID "${id}" not found`);
    }
    return task;
  }

  async updateTask(
    id: number,
    updateTaskDto: UpdateTaskDto,
    userId: number,
  ): Promise<Task> {
    const task = await this.findOneTask(id, userId);
    const updatedTask = await task.update(updateTaskDto);
    this.tasksGateway.sendTaskEvent('taskUpdated', { id, updateTaskDto });
    return updatedTask;
  }

  async removeTask(id: number, userId: number): Promise<void> {
    const task = await this.findOneTask(id, userId);
    await task.destroy();
    this.tasksGateway.sendTaskEvent('taskDeleted', { id });
  }
}
