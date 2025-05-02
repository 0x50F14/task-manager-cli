#!/usr/bin/env node
import inquirer from 'inquirer';
import { addTask, listTasks, deleteTask, editTask, completeTask } from './taskManager';

async function mainMenu() {
  const choices = [
    'Add Task',
    'List Tasks',
    'Edit Task',
    'Remove Task',
    'Mark as Done',
    'Exit'
  ];

  const { action } = await inquirer.prompt([{
    type: 'list',
    name: 'action',
    message: 'What do you wish to do?',
    choices
  }]);

  switch (action) {
    case 'Add Task':
      const { title, description } = await inquirer.prompt([
        { type: 'input', name: 'title', message: 'Title:' },
        { type: 'input', name: 'description', message: 'Description:' }
      ]);
      if (!title.trim()) {
        console.log("Title required.");
      } else {
        addTask(title, description);
      }
      break;
    case 'List Tasks':
      const tasks = listTasks();
      tasks.forEach(t => {
        const status = t.completed ? '[✔]' : '[ ]';
        console.log(`${status} ${t.title} - ${t.description}`);
      });
      break;
    case 'Edit Task':
      const tasksToEdit = listTasks();
      const { idToEdit } = await inquirer.prompt([{
        type: 'list',
        name: 'idToEdit',
        message: 'Which task to edit?',
        choices: tasksToEdit.map(t => ({ name: t.title, value: t.id }))
      }]);
      const { newTitle, newDescription } = await inquirer.prompt([
        { type: 'input', name: 'newTitle', message: 'Novo título:' },
        { type: 'input', name: 'newDescription', message: 'Nova descrição:' }
      ]);
      editTask(idToEdit, newTitle, newDescription);
      break;
    case 'Remove Task':
      const tasksToRemove = listTasks();
      const { idToRemove } = await inquirer.prompt([{
        type: 'list',
        name: 'idToRemove',
        message: 'Which task to remove?',
        choices: tasksToRemove.map(t => ({ name: t.title, value: t.id }))
      }]);
      deleteTask(idToRemove);
      break;
    case 'Mark as Done':
      const pendingTasks = listTasks().filter(t => !t.completed);
      const { idToComplete } = await inquirer.prompt([{
        type: 'list',
        name: 'idToComplete',
        message: 'Which task to mark as completed?',
        choices: pendingTasks.map(t => ({ name: t.title, value: t.id }))
      }]);
      completeTask(idToComplete);
      break;
    case 'Exit':
      return;
  }

  await mainMenu();
}

mainMenu();
