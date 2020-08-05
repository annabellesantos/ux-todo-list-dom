let todos = [
  {
    completed: false,
    description: "Take Jim to the hair salon",
  },
  {
    completed: true,
    description: "Drop off wedding invitation at mailbox",
  },
  {
    completed: false,
    description: "Pick up the cake",
  },
  {
    completed: false,
    description: "Call the caterers",
  },
];

function renderTodoApp() {
  let app = document.querySelector("#app");
  let h1 = document.createElement("h1");
  // your code here
  //create new dom element
  const toDoElement = document.createElement("ul");
  toDoElement.classList.add("to-do-list");

  //append element to page
  document.body.append(toDoElement);

  //loop thru array and use data in array

  for (let i = 0; i < todos.length; i++) {
    let item = todos[i];
    let check = "";

    //add checked box if true
    if (`${item.completed}` == true) {
      check = "checked";
      console.log("I did a check");
    } else {
      // there is no check; leave empty;
    }
    //create html markup
    let toDoMarkup = `
        <input type="checkbox" value="${item.completed}" ${check}>
        <label>
        ${item.description}
        </label>
        <br/>
        `;

    //add markup to output of element
    toDoElement.innerHTML += toDoMarkup;
  }

  h1.innerText = "Todo List";
  // toDoHolder.innerHTML += toDoMarkup;

  app.appendChild(h1);
  // and maybe some here
}

renderTodoApp();
