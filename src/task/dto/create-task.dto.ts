import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateTaskDto {
  @ApiProperty({
    example: 'Finish the report',
    description: 'Title of the task',
  })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({
    example: 'Complete the annual report by EOD',
    description: 'Detailed description of the task',
    required: false,
  })
  @IsOptional()
  @IsString()
  description?: string;
}
