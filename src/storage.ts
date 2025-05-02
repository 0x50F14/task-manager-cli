import fs from 'fs';
import path from 'path';
import { Task } from './types';

const filePath = path.resolve(__dirname, '../data/tasks.json');

export function loadTasks(): Task[] {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

export function saveTasks(tasks: Task[]): void {
  fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
}
