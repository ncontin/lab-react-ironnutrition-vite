import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
//import foods.json
import foods from "./foods.json";

function App() {
  //save foods in a state variable
  const [foodList, setFoodList] = useState(foods);
  const [search, setSearch] = useState("");
  //ADD
  const addNewFood = (newFood) => {
    // Create a new array
    const updatedFoodList = [...foodList, newFood];

    setFoodList(updatedFoodList);
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const filteredFoodList = foodList.filter((food) => food.name.toLowerCase().includes(search.toLowerCase()));
  //iteration 1
  /*   return (
    //map over the state variable and render a simple list that displays food names.
    <div className="App">
      {foodList.map((food) => (
        <div key={`${food.name}-${food.image}`}>
          <p> {food.name} </p>
          <img src={food.image} width={100} />
        </div>
      ))}
    </div>
  ); */
  return (
    <div className="App">
      <AddFoodForm AddFoodForm={addNewFood} />
      <input type="text" placeholder="Search" value={search} onChange={handleSearch} />
      {filteredFoodList.map((food) => (
        <FoodBox key={food.name} food={food} />
      ))}
    </div>
  );
}
export default App;
