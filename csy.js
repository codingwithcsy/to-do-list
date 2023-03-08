function addTask() {
    var taskInput = document.getElementById('task');
    var taskValue = taskInput.value.trim();
  
    if (taskValue !== '') {
      fetch('/api/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({task: taskValue})
      })
      .then(response => response.json())
      .then(data => {
        var taskList = document.getElementById('taskList');
        var taskItemHTML = '';
  
        data.tasks.forEach(task => {
          taskItemHTML += '<li>' + task + '</li>';
        });
  
        taskList.innerHTML = taskItemHTML;
        taskInput.value = '';
      })
  