import "../App.css";
import { BrowserRouter as Browser, Routes, Route } from "react-router-dom";
import Home from "../containers/Home";
import Comprar from "../containers/Comprar";
import Curso from "../containers/Curso";

function App() {
  return (
    <div className="App">
      <Browser>
      <Routes>
        <Route exact path="/" element = {<Home/>}></Route>
        <Route path="/comprar.html" element = {<Comprar/>}></Route>
        <Route path="/cursobarberia.html" element={<Curso/>}></Route>
      </Routes>
      </Browser>
    </div>
  );
}


export default App;
