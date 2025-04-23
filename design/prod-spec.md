# Product Specification Document
As a user, I want to create, manage, and complete tasks in a simple and intuitive to-do list application, so that I can stay organized and focused throughout my day.
Acceptance Criteria

## Add Tasks
I can enter a task title and optional description
I can submit the task via a clear CTA (e.g., "Add Task" button or hitting Enter)

## View Tasks
Tasks are displayed in a scrollable list.
Each task shows its title and description (if available)
I can visually distinguish between completed and uncompleted tasks

## Edit & Delete Tasks
I can edit an existing task’s title or description.
I can delete tasks with confirmation or an undo mechanism.

## Mark as Complete
I can check a task to mark it complete.
Completed tasks visually differ (e.g., strikethrough or faded).

## Set Priorities
I can assign priority (e.g., Low, Medium, High) when creating or editing a task.
Priorities are visually represented in the task list.

## UI & Experience
The app is responsive and mobile-friendly
There is a clear empty state when no tasks exist
*Bonus: dark mode toggle or light personalization options*

## Tech Requirements
- NextJS 15
- Server Actions (for DB interactions)
  - Drizzle ORM
- TailwindCSS
- Vercel Postgres
- Deployed to Vercel
- README with setup instructions