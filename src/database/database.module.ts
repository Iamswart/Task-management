import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { DatabaseService } from './database.service';

@Module({
  imports: [
    SequelizeModule.forRootAsync({
      useClass: DatabaseService,
    }),
  ],
  providers: [DatabaseService],
  exports: [SequelizeModule],
})
export class DatabaseModule {}
