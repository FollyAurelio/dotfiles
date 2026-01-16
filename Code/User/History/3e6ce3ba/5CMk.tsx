export interface Project {
  id: number;
  title: string;
  description?: string;
  leader: number;
  members: number[];
  tasks: number[];
  createdAt: string;
  author: number
}