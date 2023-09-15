import "./App.css";
import { Navbar } from "./Components/Navbar";
import { Home } from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Signup } from "./Pages/Signup";
import { Products } from "./Components/Products";
import { Login } from "./Pages/Login";
import { useState } from "react";
import { SearchList } from "./Components/SearchList";
import { CartList } from "./Components/CartList";
import { NotFount } from "./Components/NotFount";
import { ConfrimOrder } from "./Components/ConfrimOrder";
import { NotProducts } from "./Components/NotProducts";
import { Payment } from "./Components/payment";
function App() {
  const [result, setResult] = useState([]);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar setResult={setResult} />
        <SearchList results={result} />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Products" element={<Products />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Signup" element={<Signup />}></Route>

          <Route path="/CartList" element={<CartList />}></Route>
          <Route path="/Payment" element={<Payment />}></Route>

          <Route path="/Notproducts" element={<NotProducts />}></Route>

          <Route path="/ConfirmOrder" element={<ConfrimOrder />}></Route>
          <Route path="*" element={<NotFount />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
