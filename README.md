# Task Dashboard - Assignment 4

A Task Management Dashboard built with vanilla JavaScript.

## File Organization
- `index.html` – page structure (heading, load button, status message, task list)
- `styles.css` – minimal styling, including the `completed` style
- `taskManager.js` – `Task` and `TaskManager` classes (immutable updates)
- `api.js` – `fetchTasks()` simulating a server request with a 1500ms delay
- `main.js` – DOM rendering, event handling, async/await orchestration, JSON handling

## Challenges I Faced
- Updating state immutably with spread, `filter` and `map`.
- Making `id` read-only with `Object.defineProperty`.
- Re-rendering the list after every toggle/delete.
- Handling async code with `async/await` and `try/catch`.