var firebaseConfig = {
    // your Firebase project configuration
 };
 
 firebase.initializeApp(firebaseConfig);
 var db = firebase.firestore();
 function addTask() {
    var nameInput = document.getElementById("name-input");
    var descriptionInput = document.getElementById("description-input");
    var assignedToInput = document.getElementById("assigned-to-input");
    var statusInput = document.getElementById("status-input");
 
    var task = {
       name: nameInput.value,
       description: descriptionInput.value,
       assignedTo: assignedToInput.value,
       status: statusInput.value
    };
 
    db.collection("tasks").add(task)
       .then(function(docRef) {
          console.log("Document written with ID: ", docRef.id);
       })
       .catch(function(error) {
          console.error("Error adding document: ", error);
       });
 
    nameInput.value = "";
    descriptionInput.value = "";
    assignedToInput.value = "";
    statusInput.value = "";
 }
 function displayTasks() {
    var taskList = document.getElementById("task-list");
 
    db.collection("tasks").get()
       .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
             var task = doc.data();
 
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
          });
       })
       .catch(function(error) {
          console.error("Error getting documents: ", error);
       });
 }
   