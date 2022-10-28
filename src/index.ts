import { v4 as uuidV4 } from 'uuid';

//grab the list, input and button
const list = document.querySelector<HTMLUListElement>('#list');
const input = document.querySelector<HTMLInputElement>('#new-task-title');

//there is another way to define the element through the syntax below
// const form = document.querySelector<HTMLFormElement>("#new-task-form");
const form =
  (document.getElementById('new-task-form') as HTMLFormElement) || null;

//the <> element after the function name and before specifies the element
//defining the element help limit the methods available to the elements.

// create a function that load the task array from the local storage



//create an array of Tasks to hold the tasks
const tasks: Task[] = loadTasks();
tasks.forEach(addListItem);
//the syntax above says the tasks array is an array of Task
//If you try to push a different data type, it would show an error


//I created a custom type to use in the function below
type Task = {
  id: string;
  title: string;
  completed: boolean;
  createdAt: Date;
};


form?.addEventListener('submit', (e) => {
  e.preventDefault();

  //using optional chaining syntax. Put the ? mark before the dot says:
  // - if there isn't such object, return undefined. If there is an object, return the value
  if (input?.value == '' || input?.value == null) {
    return;
  }

  
  const newTask: Task = {
    id: uuidV4(),
    title: input.value,
    completed: false,
    createdAt: new Date(),
  };

  
  tasks.push(newTask);
  addListItem(newTask);
  input.value = "";
});

function addListItem(task: Task) : void {
  //creates an li, label and input element
  const item = document.createElement("li");
  const label = document.createElement("label");
  const checkbox = document.createElement("input");

  //style the li element 
  item.className = "well list-group-item checbox";

  //sets the input element to be checkbox type
  checkbox.type = "checkbox";
  checkbox.checked = task.completed;

  //add the event listener to change status
  checkbox.addEventListener("change", () => {
    //assigns the task.completed property to the state in the html element
    task.completed = checkbox.checked;

    //add the tasks arrays to localStorage
    saveTasks();
  })

  //appends the checkbox and the title after the label
  label.append(checkbox, task.title);

  //appends the label in the li element
  item.append(label);

  //appends the li element in the list
  list?.append(item);

  //add the tasks arrays to localStorage
  saveTasks();

} // end addListItem function


function saveTasks(): void {

  //send the array of tasks from the memory to the local storage
  localStorage.setItem("TASKS", JSON.stringify(tasks))
}


//function that will load the tasks from the local storage and return an array of Task
function loadTasks(): Task[] {
  //grab the tasks from local storage
  const taskJSON = localStorage.getItem("TASKS");

  //if the localstorage is empty, return an empty array
  if (taskJSON == null) {
    return [];
  }

  //return the parsed array
  return JSON.parse(taskJSON);
}

console.log("is it working?")