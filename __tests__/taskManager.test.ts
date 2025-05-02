import { addTask, listTasks, deleteTask } from '../src/taskManager';

describe('Task Manager', () => {
  it('should add and list tasks', () => {
    addTask('Teste', 'Descrição de teste');
    const tasks = listTasks();
    expect(tasks.length).toBeGreaterThan(0);
  });

  it('should delete task', () => {
    const tasks = listTasks();
    const id = tasks[0]?.id;
    if (id) {
      deleteTask(id);
      const newTasks = listTasks();
      expect(newTasks.find(t => t.id === id)).toBeUndefined();
    }
  });
});
