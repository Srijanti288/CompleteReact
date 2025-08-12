import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  let [foodItems, setFoodItems] = useState([]);

  const onKeyDown = (event) => {
    if (event.key === "Enter"){
      let newFoodItem = event.target.value;
      event.target.value = '';
      let newItems = [...foodItems,newFoodItem];
      setFoodItems(newItems);
      console.log("Food value entered is "+newFoodItem);
    } 
  };

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>
        <FoodInput handleKeyDown={onKeyDown}></FoodInput>
        <ErrorMessage item={foodItems}></ErrorMessage>
        <FoodItems item={foodItems}></FoodItems>
      </Container>
      {/* <Container>
        <p>
          Above is the list of healthy foods that are good for your health and
          well being
        </p>
      </Container> */}
    </>
  );
}

export default App;

// function App() {

//   // let foodItems = ["Biryani","Fried Rice","Chicken","Biscuit","Chocolate","Ghee"];
//   let foodItems = [];

//   if(foodItems.length===0)
//   {
//     return <h3>I am still hungry</h3>;
//   }
// // ---------------------------------------------------------- react fragments-------1. <React.Fragment> </React.Fragment> with declare "import React from react" at the top;   2. <> </>
//   return (
//   <>
//     <h1>Healthy Food</h1>
//     <ul className="list-group">
//       {foodItems.map((item) => (
//          <li key={item} className="list-group-item">{item}</li>
//       ))}
// </ul>
//   </>
//  );

// }

// export default App;
