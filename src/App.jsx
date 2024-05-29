import "./App.css";
import {Header} from "./components/static"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AlumnaView, Home } from "./views";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/alumna/:nombre" element={<AlumnaView />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
