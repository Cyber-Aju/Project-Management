// Create an object to hold tasks and users
var tasks = [
    {
      id: 1,
      name: "Task 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      assignedTo: "User A",
      status: "In Progress"
    },
    {
      id: 2,
      name: "Task 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      assignedTo: "User B",
      status: "Not Started"
    },
    {
      id: 3,
      name: "Task 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      assignedTo: "User C",
      status: "Completed"
    }
  ];
  
  var users = [
    {
      id: 1,
      name: "User A",
      email: "usera@example.com",
      phone: "123-456-7890"
    },
    {
      id: 2,
      name: "User B",
      email: "userb@example.com",
      phone: "123-456-7890"
    },
    {
      id: 3,
      name: "User C",
      email: "userc@example.com",
      phone: "123-456-7890"
    }
  ];
  
  // Display tasks on the page
  function displayTasks() {
    var taskList = document.getElementById("task-list");
  
    for (var i = 0; i < tasks.length; i++) {
      var task = tasks[i];
  
      var listItem = document.createElement("li");
      listItem.innerHTML =
        "<h3>" +
        task.name +
        "</h3><p>" +
        task.description +
        "</p><p><strong>Assigned To:</strong> " +
        task.assignedTo +
        "</p><p><strong>Status:</strong> " +
        task.status +
        "</p>";
  
      taskList.appendChild(listItem);
    }
  }
  
  // Display users on the page
  function displayUsers() {
    var userList = document.getElementById("user-list");
  
    for (var i = 0; i < users.length; i++) {
      var user = users[i];
  
      var listItem = document.createElement("li");
      listItem.innerHTML =
        "<h3>" +
        user.name +
        "</h3><p><strong>Email:</strong> " +
        user.email +
        "</p><p><strong>Phone:</strong> " +
        user.phone +
        "</p>";
  
      userList.appendChild(listItem);
    }
  }
  
  // Add a new task to the list
  function addTask() {
    var nameInput = document.getElementById("name-input");
    var descriptionInput = document.getElementById("description-input");
    var assignedToInput = document.getElementById("assigned-to-input");
    var statusInput = document.getElementById("status-input");
  
    var task = {
      id: tasks.length + 1,
      name: nameInput.value,
      description: descriptionInput.value,
      assignedTo: assignedToInput.value,
      status: statusInput.value
    };
  
    tasks.push(task);
    displayTasks();
  
    nameInput.value = "";
    descriptionInput.value = "";
    assignedToInput.value = "";
    statusInput.value = "";
  }
  
  // Call the displayTasks and displayUsers functions when the page loads
  window.onload = function() {
    displayTasks();
    displayUsers();
  };
  
  // Add an event listener to the "Add Task" button
  var addTaskButton = document.getElementById("add-task-button");
  addTaskButton.addEventListener("click", addTask);
  