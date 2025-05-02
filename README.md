# 📌 Task Manager CLI
A simple and efficient task manager using **TypeScript** and **Command Line Interface (CLI)**, with persistence in JSON files and high quality standards inspired by *Clean Code*, *Pragmatic Programmer* and *SICP*.
---
## 🧠 Features
- ✅ Add tasks with title and description
- 📋 List tasks with completion status
- ✏️ Edit title and description
- 🗑 Remove tasks
- ✔ Mark tasks as completed
- 💾 Persistence in JSON
- 🔐 User input validation
---
## 🚀 How to run the project
### 1. clone the repository
```bash
git clone https://github.com/seu-usuario/task-manager-cli.git
cd task-manager-cli
```
### 2. install the dependencies
```bash
npm install
```
### 3. Run the CLI
```bash
npm start
```
> Use the arrow keys to navigate through the menu and interact with the tasks.
---
## 🧪 Automated tests
```bash
npm test
```
Tests implemented with **Jest** to guarantee the reliability of the main operations (CRUD tasks).
---
## ⚙️ Project structure
```
task-manager-cli/
├── src/ # Main source code
│ ├── index. ts # CLI via Inquirer
│ ├── taskManager.ts # Business logic
│ ├── storage.ts # Persistence (JSON)
│ └── types. ts # Typing
├── __tests__/ # Unit tests with Jest
├── data/tasks.json # Task storage
├── . github/workflows/ # GitHub Actions CI
├── tsconfig.json # TypeScript configuration (ESM mode)
├── package.json # Scripts and dependencies
```
---
## 🛠 Quality and Good Practices
This project follows the principles of the books:
- Clean Code - readability, small functions, meaningful names
- The Pragmatic Programmer* - modularity, low coupling, validations
- *Structure and Interpretation of Computer Programs* - clear abstractions, separation between data and behavior
---

## 📄 License
[MIT](LICENSE)
