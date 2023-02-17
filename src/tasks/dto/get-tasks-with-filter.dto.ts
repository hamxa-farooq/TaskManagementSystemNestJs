import { IsOptional, IsIn } from 'class-validator';
import { TaskStatus } from '../task.model';

export class TasksFilterDto {
  @IsOptional()
  @IsIn([TaskStatus.OPEN, TaskStatus.DONE, TaskStatus.IN_PROGRESS])
  status: string;

  @IsOptional()
  search: string;
}
