import logo from "./logo.svg";
import "./App.css";

const vicePresidents = [
  "Mike Pence",
  "Kamala Harris",
  "Aaron Burr",
  "George Clinton",
  "Andrew Johnson"
];

function App() {
  return (
    <>
      <div className="App">
        <div style={{ paddingTop: 20, fontSize: 30 }}>Developer Test</div>
        <hr />
      </div>
      {vicePresidents.map((item, index) => {
        return (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <input type="checkbox" name="" id="" />
            <h4> {item}</h4>
          </div>
        );
      })}
      ;
    </>
  );
}

export default App;
