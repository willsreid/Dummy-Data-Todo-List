let arrayOfTodos = [
  {
    userId: 14,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 20,
    id: 2,
    title: "delectus aut autem",
    completed: false,
  },
];

// console.log('', arrayOfTodos[0].completed)
// for (let index = 0; index < arrayOfTodos.length; index++) {
//   console.log('index:', index)
//   const element = arrayOfTodos[index];
//   console.log('element:', element)
//   const title = element.title
  
// }

const fetchTodos = () => {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => {
      console.log('response:', response)
      return response.json()
    })
    .then((data) => {
      console.log('data:', data)
      arrayOfTodos = data
    });
};

const logTodos = () => {
  console.log(arrayOfTodos);
};

// const populateTodos2 = () => {
//   for (let index = 0; index < arrayOfTodos.length; index++) {
//     console.log('index:', index)
//     const element = arrayOfTodos[index];
//     if (element.completed === true) {
//       console.log('element:', element)
//     }
//   }
// } 

  const populateTodos = () => {
    
//    // get OL element, declare a variable
 const orderedList = document.getElementById('todo-list')
//  console.log('orderedList:', orderedList)
 for (let index = 0; index < arrayOfTodos.length; index++){
   const newLi = document.createElement("li")
  const title = arrayOfTodos[index].title
  let newContent = document.createTextNode(title)
  newLi.appendChild(newContent);
  orderedList.appendChild(newLi);
 }
 
//  if (element.title === true) {

//  }
//  // create an LI element (createElement):
    // <li></li>
//  // create text for the LI element:
//     //  "delectus aut autem"

//  // append text to LI element:
//     // <li>delectus aut autem</li>

//  // append LI element to orderedList element:
//     // <ol> <li>delectus aut autem</li> </ol>
  }

  const filterTodos = () => {
    const orderedList = document.getElementById('todo-list')
    orderedList.innerHTML=""
    // const inputValue = document.getElementById("user").value
    // console.log(inputValue)
    const filtered = arrayOfTodos.filter((todo) => todo.userId == document.getElementById("user").value)
    //   // console.log('todo:', todo)
    //   // filtered.push(todo.userId === inputValue) 
      
      for (let index = 0; index < filtered.length; index++){
        const newLi = document.createElement("li")
       const title = arrayOfTodos[index].title
       let newContent = document.createTextNode(title)
       newLi.appendChild(newContent);
       orderedList.appendChild(newLi);
      }
    
    // console.log('filtered:', filtered)
  }

  // const completedTodos = () => {
  //   return console.clear() && (arrayOfTodos[IndexArray],completed === true)
  // }
  