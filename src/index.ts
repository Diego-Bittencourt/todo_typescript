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

//create an array of Tasks to hold the tasks
const tasks: Task[] = [];
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

  addListItem(newTask);
  input.value = "";
  tasks.push(newTask);
});

function addListItem(task: Task) : void {
  //creates an li, label and input element
  const item = document.createElement("li");
  const label = document.createElement("label");
  const checkbox = document.createElement("input");

  //sets the input element to be checkbox type
  checkbox.type = "checkbox";
  checkbox.checked = task.completed;

  //add the event listener to change status
  checkbox.addEventListener("change", () => {
    //assigns the task.completed property to the state in the html element
    task.completed = checkbox.checked
  })

  //appends the checkbox and the title after the label
  label.append(checkbox, task.title);

  //appends the label in the li element
  item.append(label);

  //appends the li element in the list
  list?.append(item);


}
