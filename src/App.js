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
  };

  const vicePresidents = [
    "MP-Mike Pence",
    "KH-Kamala Harris",
    "AB-Aaron Burr",
    "GC-George Clinton",
    "AJ-Andrew Johnson"
  ];

  var checkedItems = checked.length
    ? checked.reduce((total, item, index) => {
        return total + "-" + index + ", " + item;
      })
    : "Room is empty";

  const styles = {
    center: {
      display: "flex",
      justifyContent: "center"
    }
  };

  const reversed = [...checked].reverse().join(", ");

  return (
    <>
      <div className="App">
        <div style={{ padding: 20, fontSize: 25 }}>- Developer Test -</div>
        <hr />
      </div>
      <h1 style={styles.center}>Vice Presidents</h1>
      {vicePresidents.map((item, index) => {
        return (
          <div key={index} style={styles.center}>
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

      <div>
        <h1 style={styles.center}>Attendance in Order</h1>

        <div style={styles.center}>{checkedItems}</div>
        <h1 style={styles.center}>Attendance in Reverse</h1>
        <div style={styles.center}>{reversed}</div>
      </div>
    </>
  );
}

export default App;
