export interface Todo {
  id: number;
  name: string;
  description: string;
  checked: boolean;
  subTodo: Todo[];
}
