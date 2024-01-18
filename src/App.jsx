import "./App.css";
import DogNavbar from "./Navbar";
import { Routes, Route } from "react-router";
import Dog from "./Dog";
import Home from "./Home";

function App(props) {
  return (
    <>
      <DogNavbar />
      <Routes>
        <Route path="/dogs" element={<Home props={props} />} />
        <Route path="/dogs/whiskey" element={<Dog props={props.dogs[0]} />} />

        <Route path="/dogs/duke" element={<Dog props={props.dogs[1]} />} />

        <Route path="/dogs/perry" element={<Dog props={props.dogs[2]} />} />

        <Route path="/dogs/tubby" element={<Dog props={props.dogs[3]} />} />
      </Routes>
    </>
  );
}

export default App;

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: "../src/assets/whiskey.jpg",
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!",
      ],
    },
    {
      name: "Duke",
      age: 3,
      src: "../src/assets/duke.jpg",
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs.",
      ],
    },
    {
      name: "Perry",
      age: 4,
      src: "../src/assets/perry.jpg",
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain.",
      ],
    },
    {
      name: "Tubby",
      age: 4,
      src: "../src/assets/tubby.jpg",
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore.",
      ],
    },
  ],
};
