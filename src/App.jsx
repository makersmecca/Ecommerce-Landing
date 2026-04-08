import { Routes, Route } from "react-router-dom";
import Homepage from "./views/Homepage/Homepage";
import ProductListing from "./views/ProductListing/ProductListing";
import Favourites from "./components/favourites/Favourites";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/favourites" element={<Favourites />} />
    </Routes>
  );
}

export default App;
