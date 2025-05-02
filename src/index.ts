#!/usr/bin/env node
import inquirer from 'inquirer';
import { addTask, listTasks, deleteTask, editTask, completeTask } from './taskManager';

async function mainMenu() {
  const choices = [
    'Adicionar Tarefa',
    'Listar Tarefas',
    'Editar Tarefa',
    'Remover Tarefa',
    'Marcar como Concluída',
    'Sair'
  ];

  const { action } = await inquirer.prompt([{
    type: 'list',
    name: 'action',
    message: 'O que deseja fazer?',
    choices
  }]);

  switch (action) {
    case 'Adicionar Tarefa':
      const { title, description } = await inquirer.prompt([
        { type: 'input', name: 'title', message: 'Título:' },
        { type: 'input', name: 'description', message: 'Descrição:' }
      ]);
      if (!title.trim()) {
        console.log("Título é obrigatório.");
      } else {
        addTask(title, description);
      }
      break;
    case 'Listar Tarefas':
      const tasks = listTasks();
      tasks.forEach(t => {
        const status = t.completed ? '[✔]' : '[ ]';
        console.log(`${status} ${t.title} - ${t.description}`);
      });
      break;
    case 'Editar Tarefa':
      const tasksToEdit = listTasks();
      const { idToEdit } = await inquirer.prompt([{
        type: 'list',
        name: 'idToEdit',
        message: 'Qual tarefa editar?',
        choices: tasksToEdit.map(t => ({ name: t.title, value: t.id }))
      }]);
      const { newTitle, newDescription } = await inquirer.prompt([
        { type: 'input', name: 'newTitle', message: 'Novo título:' },
        { type: 'input', name: 'newDescription', message: 'Nova descrição:' }
      ]);
      editTask(idToEdit, newTitle, newDescription);
      break;
    case 'Remover Tarefa':
      const tasksToRemove = listTasks();
      const { idToRemove } = await inquirer.prompt([{
        type: 'list',
        name: 'idToRemove',
        message: 'Qual tarefa remover?',
        choices: tasksToRemove.map(t => ({ name: t.title, value: t.id }))
      }]);
      deleteTask(idToRemove);
      break;
    case 'Marcar como Concluída':
      const pendingTasks = listTasks().filter(t => !t.completed);
      const { idToComplete } = await inquirer.prompt([{
        type: 'list',
        name: 'idToComplete',
        message: 'Qual tarefa concluir?',
        choices: pendingTasks.map(t => ({ name: t.title, value: t.id }))
      }]);
      completeTask(idToComplete);
      break;
    case 'Sair':
      return;
  }

  await mainMenu();
}

mainMenu();
