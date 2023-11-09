document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    const nameInput = document.getElementById('name');
    const taskNameInput = document.getElementById('tname');
    const taskDescriptionInput = document.getElementById('tdesc');
    const taskList = document.getElementById('task-list');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const userName = nameInput.value;
        const taskName = taskNameInput.value;
        const taskDescription = taskDescriptionInput.value;

        if (userName && taskName && taskDescription) {
            
            const taskElement = document.createElement('div');
            taskElement.className = 'task';
            taskElement.innerHTML = `
                <h3>Task Name: ${taskName}</h3>
                <p>User: ${userName}</p>
                <p>Description: ${taskDescription}</p>
            `;
            taskList.appendChild(taskElement);
            nameInput.value = '';
            taskNameInput.value = '';
            taskDescriptionInput.value = '';
        }
    });
});
