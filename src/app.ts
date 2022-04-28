import { v4 as uuid } from "uuid";

const list = document.querySelector<HTMLUListElement>("#list");
const form = document.querySelector<HTMLFormElement>("#add-form");
const input = document.querySelector<HTMLInputElement>("#input");

interface Todo {
  id: string;
  title: string;
  completed: boolean;
  createdAt: Date;
}
form?.addEventListener("submit", (e) => {
  e.preventDefault();

  if (input.value === "" || input.value === null) return;

  const todo: Todo = {
    id: uuid(),
    title: input.value,
    completed: false,
    createdAt: new Date(),
  };

  addTodo(todo);
});

const addTodo = (todo: Todo) => {
  const item = document.createElement("li");
  const label = document.createElement("label");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  label.append(checkbox, todo.title);
  item.append(label);
  list.append(item);

  form.reset();
};
