import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import { useState } from "react";

function App() {
  
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate)=>{
    setTodoItems((currValue) => 
      [...currValue,
        {name: itemName, dueDate: itemDueDate},
      ] );
  };

  const handleDeleteItem = (todoItemName)=>{
    const newTodoItem = todoItems.filter(item => item.name !== todoItemName);
    setTodoItems(newTodoItem);
  }
  

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem ={handleNewItem}/>
      {todoItems.length === 0 && <WelcomeMessage ></WelcomeMessage>}
      <TodoItems  todoItems={todoItems} onDeleteClick={handleDeleteItem}></TodoItems> 
      
    </center>
  );
}

export default App;
