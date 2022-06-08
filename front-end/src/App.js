import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCartShopping, faSearch } from "@fortawesome/free-solid-svg-icons";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Help from "./Pages/Help";
import Layout from "./Pages/Layout";
import NoPage from "./Pages/NoPage";
import Shop from "./Pages/Shop";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
library.add(fab, faCartShopping, faSearch);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="about" element={<About />} />
          <Route path="help" element={<Help />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
