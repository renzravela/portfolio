import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Home from "./components/Home";

function App() {
  const [style, changeStyle] = useState({
    color: "inherit",
    backgroundColor: "inherit",
  });

  const [mode, setMode] = useState(`moon`);

  const changeTheme = () => {
    if (mode === `moon`) {
      setMode(`sun`);
      changeStyle({
        color: "#1d1d1d",
        backgroundColor: "#fff",
      });
    }
    if (mode === `sun`) {
      setMode(`moon`);
      changeStyle({
        color: "inherit",
        backgroundColor: "inherit",
      });
    }
  };
  return (
    <div style={style} className="wrapper__">
      <Home/>
      <div className="setMode">
        <span className="setMode_btn btn" onClick={changeTheme}>
          <FontAwesomeIcon icon={["fas", mode]} size="xl" />
        </span>
      </div>
    </div>
  );
}

export default App;

console.log(`This is console bro, what are you doing in here?`);
