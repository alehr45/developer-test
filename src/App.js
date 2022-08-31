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
      <h5 style={styles.center}>@ Disney World Conference</h5>
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

      <div
        style={{
          border: "1px solid black",
          boxShadow: "1px 2px 9px gray",
          marginTop: 25,
          marginLeft: 300,
          marginRight: 300,

          alignItems: "center"
        }}
      >
        <h1 style={styles.center}>Attendance in Order</h1>
        <p style={styles.center}>{checkedItems}</p>
        <h1 style={styles.center}>Attendance in Reverse</h1>
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: 15
          }}
        >
          {reversed}
        </p>
      </div>
    </>
  );
}

export default App;
