export interface Project {
  id: number;
  title: string;
  description?: string;
  leader: number;
  members: number[];
  createdAt: string;
}