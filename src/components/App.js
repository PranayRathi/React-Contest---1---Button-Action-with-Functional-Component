import React from "react";
//import "./../styles/App.css";

function App() {
  const [visible, setVisible] = React.useState(false);

  return (
    <div id="main">
      <button
        id="click"
        onClick={() => {
          setVisible(true);
        }}
      >
        click
      </button>
      {visible ? (
        <p id="para">
          Hello, I've learnt to use the full-stack evaluation tool. This makes
          me so happy
        </p>
      ) : null}
    </div>
  );
}

export default App;
