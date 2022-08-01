import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import ShoppingPage from "../02-component-patterns/pages/ShoppingPage";
import logo from "../logo.svg";

const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink to="/">Shopping</NavLink>{" "}
            </li>
            <li>
              <NavLink to="/about">About</NavLink>{" "}
            </li>
            <li>
              <NavLink to="/users">Users</NavLink>{" "}
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<ShoppingPage />} />
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/users" element={<h1>Users</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Navigation;
