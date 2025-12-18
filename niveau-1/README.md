# Todo App Interview Test

Welcome! Your task is to fix a simple Todo Application. The app has several bugs and missing features that you need to identify and resolve.

## Objectives

1.  **Fix the Delete Button**: The delete button (trash icon) appears when you hover over a todo item, but clicking it currently does nothing.
2.  **Implement Toggle Done**: Clicking the checkbox should mark a task as completed (line-through), but it's currently not working.
3.  **Prevent Empty Todos**: The app allows creating empty tasks. Add a verification to prevent adding a todo if the input is empty or only contains whitespace.
4.  **Fix the Remaining Items Count**: The counter at the bottom should only show the number of *active* (uncompleted) tasks, but it currently shows the total number of tasks.
5.  **Implement Filtering**: The "All", "Active", and "Completed" filters are currently not working. The list should update based on the selected filter.

## Requirements

-   The application uses React and Tailwind CSS.
-   Do not use any external libraries for the state management (stick to React Hooks).
-   No database is required; keeping the data in the local session (component state) is sufficient.

## Getting Started

First, run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
