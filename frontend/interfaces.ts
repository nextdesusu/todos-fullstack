export interface ITodo {
  name: string;
  description: string;
  state: 'created' | 'in progress' | 'finished';
}