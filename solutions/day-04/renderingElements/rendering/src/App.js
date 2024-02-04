// import logo from "./logo.svg";
import "./App.css";
function List(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <h2> {props.details}</h2>
    </div>
  );
}
function AnimalList(props) {
  return (
    <div>
      <ul>
        {props.item.map((veg) => {
          return <Listitems itemlist={veg} />;
        })}
        ;
      </ul>
    </div>
  );
}
function Listitems(props) {
  return <li>{props.itemlist}</li>;
}
function App() {
  const cars = ["red", "blue", "yellow", "green"];
  const colorList = cars.map((car) => {
    return <li key={car}>{car}</li>;
  });
  //using this as prop
  const item = ["redish", "blueish", "yellowish", "greenish"];

  return (
    <>
      <div>
        <h1>Animals: </h1>
        <ul>
          <li>Lion</li>
          <li>Cow</li>
          <li>Snake</li>
          <li>Lizard</li>
        </ul>
      </div>
      <div>
        <h1>renderinglist of elemnets in jsx </h1>
        <ul>{colorList}</ul>
      </div>
      <div>
        <h1>render componets using props in jsx</h1>
        <List name="shane" details="xyz" />

        <AnimalList item={item} />
      </div>
    </>
  );
}
// function App() {
//   const animals = ["Lion", "Cow", "Snake", "Lizard"];

//     return (
//       <div>
//         <h1>Animals: </h1>
//         <ul>
//           {animals.map((animal) => {
//             return <li key={animal}>{animal}</li>;
//           })}
//         </ul>
//       </div>
//     );
//   };

export default App;
