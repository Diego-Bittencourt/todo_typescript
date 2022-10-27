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
});

function addListItem(task: Task) {
  const item = document.createElement("li");
  const label = document.createElement("label");
  const checkbox = document.createElement("input");

  checkbox.type = "checkbox";

  label.append(checkbox, task.title);

  item.append(label);

  list?.append(item);

  
}
