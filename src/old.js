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
    /*   let toDoList = document.createElement("ul");
    document.body.append(toDoList) */
  
    /*  for (i = 0; i < todos.length; i++) {
      let toDoElement = todos[i];
      let toDoMarkup = `
          <li class="list-item">
              <input type="checkbox" />
              <label>${todos.description}</label>
          </li>;
          `;
          if (todos[completed] == true) {
              document.
          }
    } */
  
    let toDoList = document.createElement("ul");
    toDoList.classList.add("to-do-list");
  
    document.body.append(toDoList);
  
    for (let i = 0; i < todos.length; i++) {
      let item = todos[i];
  
      let itemMarkup = `
        <li class='list-item'>
        <input type="checkbox" checked/><label>${todos.description}</label>
        </li>
        `;
    }
    toDoList.innerHTML += itemMarkup;
  
    h1.innerText = "Todo List";
  
    app.appendChild(h1);
    // and maybe some here
    /*   toDoList.innerHTML += toDoMarkup; */
  }
  
  renderTodoApp();
  