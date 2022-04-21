import { useEffect } from "react";
import truck from "../src/assets/img/food-truck.jpg"
import './App.scss';
import Card from "./components/Card/Card";
import { CardList } from "./components/CardList/CardList";

const App = () => {

  const getMargaritas = async () =>{
    const response = await fetch("http://localhost:8080/margaritas");
    const margaritasArr = await response.json();

    console.log(margaritasArr);
  };

  useEffect(() => {
    getMargaritas();
  }, []);
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={truck} className="food-truck" alt="truck" />
        <Card/>
        {/* <CardList/> */}
        <p>
         Welcome to the Wonderful World of Frozen Margaritas!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >

        </a>
      </header>
    </div>
  );
}

export default App;
