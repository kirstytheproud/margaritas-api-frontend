import { useEffect } from "react";
import truck from "../src/assets/img/food-truck.jpg";
import "./App.scss";
import Card from "./components/Card/Card";
import { CardList } from "./components/CardList/CardList";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  // const getMargaritas = async () => {
  //   const response = await fetch(
  //     "https://margaritas-347915.nw.r.appspot.com/margaritas"
  //   );
  //   const margaritasArr = await response.json();

  //   console.log(margaritasArr);
  // };
  const getRandomMargarita = async () => {
    const response = await fetch(
      "https://gold-pod-347915.nw.r.appspot.com/margarita/random"
    );
    const margaritasArr = await response.json();

    console.log(margaritasArr);
  };

  const getMargaritas = async () => {
    const response = await fetch(
      "https://gold-pod-347915.nw.r.appspot.com/margaritas"
    );
    const margaritasArr = await response.json();

    console.log(margaritasArr);
  };

  // useEffect(() => {
  //   getMargaritas();
  // }, []);

  useEffect(() => {
    getRandomMargarita();
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <img src={truck} className="food-truck" alt="truck" />
        <Card />
        {/* <CardList/> */}
        <p>Welcome to the Wonderful World of Frozen Margaritas!</p>
      </header>
    </div>
  );
};

export default App;
