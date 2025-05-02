import { Task } from './types';
import { loadTasks, saveTasks } from './storage';
import { v4 as uuidv4 } from 'uuid';

/**
 * The `addTask` function abstracts the concept of creating a new unit of work.
 * The use of UUIDs avoids future conflicts, even with multiple concurrent executions.
 */
export function addTask(title: string, description: string): void {
  const tasks = loadTasks();
  const newTask: Task = {
    id: uuidv4(),
    title,
    description,
    completed: false,
  };
  tasks.push(newTask);
  saveTasks(tasks);
}

export function listTasks(): Task[] {
  return loadTasks();
}

export function deleteTask(id: string): void {
  const tasks = loadTasks().filter(task => task.id !== id);
  saveTasks(tasks);
}

export function editTask(id: string, title: string, description: string): void {
  const tasks = loadTasks().map(task => 
    task.id === id ? { ...task, title, description } : task
  );
  saveTasks(tasks);
}

export function completeTask(id: string): void {
  const tasks = loadTasks().map(task => 
    task.id === id ? { ...task, completed: true } : task
  );
  saveTasks(tasks);
}
