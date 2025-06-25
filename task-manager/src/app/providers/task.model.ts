export interface CreateTask {
  status: 'pending' | 'completed';
  title: string;
  description: string; 
}
export interface Task {
  id: string;
  createdAt: string;
  status: 'pending' | 'completed';
  title: string;
  description: string; 
}
