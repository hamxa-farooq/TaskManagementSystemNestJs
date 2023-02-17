export class CreateTaskDto {
  title: string;
  description: string;
}

export class TasksFilterDto {
  status: string;
  search: string;
}
