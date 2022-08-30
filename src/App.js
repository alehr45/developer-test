import "./App.css";
import React, { useState } from "react";

function App() {
  const [checked, setChecked] = useState([]);

  const handleCheck = event => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
    console.log(updatedList);
  };

  const vicePresidents = [
    "Mike Pence",
    "Kamala Harris",
    "Aaron Burr",
    "George Clinton",
    "Andrew Johnson"
  ];

  return (
    <>
      <div className="App">
        <div style={{ paddingTop: 20, fontSize: 30 }}>Developer Test</div>
        <hr />
      </div>
      {vicePresidents.map((item, index) => {
        return (
          <div
            key={index}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <input
              type="checkbox"
              name={item}
              id={index}
              value={item}
              onClick={handleCheck}
            />
            <h4> {item}</h4>
          </div>
        );
      })}
    </>
  );
}

export default App;
