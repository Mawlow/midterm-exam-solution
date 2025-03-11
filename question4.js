let tasks = [];
let currentId = 1;

// Add a new task
function addTask(name, description) {
    const task = { id: currentId++, name, description };
    tasks.push(task);
    return task;
}

// View all tasks
function viewTasks() {
    return tasks;
}

// Update a task
function updateTask(id, name, description) {
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.name = name;
        task.description = description;
    }
    return task;
}

// Delete a task
function deleteTask(id) {
    tasks = tasks.filter(t => t.id !== id);
}

// Example usage
addTask('Task 1', 'Complete the midterm exam');
addTask('Task 2', 'Submit the GitHub repository link');
console.log(viewTasks());
updateTask(1, 'Task 1 Updated', 'Finish the midterm exam');
console.log(viewTasks());
deleteTask(2);
console.log(viewTasks());