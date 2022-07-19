import "./App.css"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './components/Home';
import Parameters from './components/Parameters';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Routes>
          <Route element={<Home />} path="/home"/>
          <Route element={<Parameters />} path="/:input" />
          <Route element={<Parameters />} path="/:input/:textColor/:bgColor" />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
