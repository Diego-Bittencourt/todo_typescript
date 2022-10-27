// import { v4 as uuidV4 } from 'uuid';

// console.log(uuidV4());

//grab the list, input and button
const list = document.querySelector<HTMLUListElement>("#list");
const input = document.querySelector<HTMLInputElement>("#new-task-title");

//there is another way to define the element through the syntax below
// const form = document.querySelector<HTMLFormElement>("#new-task-form");
const form = document.getElementById("new-task-form") as HTMLFormElement || null

//the <> element after the function name and before specifies the element
//defining the element help limit the methods available to the elements.

