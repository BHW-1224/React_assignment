import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Sub from "./Pages/Sub";
import Sum from "./Pages/Sum";

function App() {
  return (
    <BrowserRouter>
      <Routes>
       <Route path="/" element={ <Home/> } />
       <Route path="/Sub/:num1/:num2" element={<Sub/>} />
       <Route path="/Sum/:num1/:num2" element={<Sum/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
