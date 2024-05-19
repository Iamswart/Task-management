import { Module } from '@nestjs/common';
import { TasksController } from './task.controller';
import { TasksService } from './task.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Task } from 'src/models/task.model';
import { TasksGateway } from './task.gateway';

@Module({
  imports: [SequelizeModule.forFeature([Task])],
  controllers: [TasksController],
  providers: [TasksService, TasksGateway],
})
export class TaskModule {}
