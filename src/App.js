import "./App.css";
import Form from "./components/Form";
import Display from "./components/Display";
import { useState } from "react";
function App() {
  const [boxColorArray, setBoxColorArray] = useState([]);

  return (
    <div className="App">
      <Form boxColorArray={boxColorArray} setBoxColorArray={setBoxColorArray} />
      <Display boxColorArray={boxColorArray} />
      <hr />
    </div>
  );
}

export default App;
