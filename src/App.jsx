import "./App.css";
import Card from "./Components/Card/card";
import data from "../src/assets/data.json";

function App() {
  return (
    <>
      <h1>Users information ⬇</h1>

      <div className="wrapper container">
        {data.length &&
          data.map((value, index) => {
            return <Card key={index} data={value} className="card"></Card>;
          })}
      </div>
    </>
  );
}

export default App;
