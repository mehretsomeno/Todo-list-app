const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Function to add a new item to the list
function addTask(){
  // Check if the input box is empty
  if(inputBox.value ===''){
    alert("Please enter a task");
  
  }
  else{
    // Add a new item to the list 
    let li = document.createElement("li");// Create a new element  for the list element  
    li.innerText = inputBox.value;// Add the new item  to the list element  
    listContainer.appendChild(li); // Append the list element to the list container
    
    // Add a delete button to each list item
    
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";// Add the delete button to  each list item
    li.appendChild(span); // Append the delete button to the list element.
    // Event listener for the delete button

  }
  // Clear the input box after adding a task
  inputBox.value = '';
  saveData(); // Save the current list in local storage
}

// Event listener for the add button
listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    // Save the current list in local storage
    saveData();
}
else if (e.target.tagName === "SPAN"){
  e.target.parentElement.remove(); 
  // Save the current list in local storage
  saveData();

   }
}, false);

function saveData(){
  localStorage.setItem("data", listContainer.innerHTML);
}

// Load the list from local storage
function showTask(){
  listContainer.innerHTML = localStorage.getItem("data");
   
}

showTask();