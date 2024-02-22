# Tasks manager

A tasks manager back-end application using Node.js

## Features

- [x] Add, edit and delete tasks;
- [x] Mark as completed or not;
- [ ] Create multiple tasks by CSV.

## How it works

### Properties

- `id` - Unique identifier for each task;
- `title` - Task title;
- `description` - Detailed description of the task;
- `completed_at` - Date when the task was completed. The initial value must be null;
- `created_at` - Date when the task was created;
- `updated_at` - Must always be changed to the date when the task was updated.

### Routes

- `POST - /tasks`: It must be possible to create a task in the database, sending the `title` and `description` fields through the request body. When creating a task, the fields: id, created_at, updated_at and completed_at must be filled in automatically, as instructed in the properties above;
- `GET - /tasks`: It must be possible to list all tasks saved in the database. It should also be possible to perform a search, filtering tasks by `title` and `description`;
- `PUT - /tasks/:id`: It must be possible to update a task by `id`.  
  In the body of the request, you must only receive the `title` and/or `description` to be updated.  
  If only the `title` is sent, it means that the `description` cannot be updated.  
  Before carrying out the update, validation must be carried out whether the id belongs to a task saved in the database;
- `DELETE - /tasks/:id`: It should be possible to remove a task by `id`.  
  Before carrying out the removal, validation must be carried out whether the id belongs to a task saved in the database;
- `PATCH - /tasks/:id/complete`: It must be possible to mark the task as complete or not. This means that if the task is completed, it should return to its “normal” state.  
  Before making the change, a validation must be carried out whether the id belongs to a task saved in the database.

## Running

```bash
npm run dev
```

## License

GNU GPLv3 by [Wolney Oliveira](https://github.com/wolney-fo)
