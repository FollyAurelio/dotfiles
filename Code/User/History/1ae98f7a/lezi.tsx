export interface Task {
  id: number;
  title: string;
  description?: string;
  assignee: string;
  status: "Todo" | "In Process" | "In Review" | "Done";
}