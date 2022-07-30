import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import LazyPage1 from "../01-lazyload/pages/LazyPage1";
import LazyPage2 from "../01-lazyload/pages/LazyPage2";
import LazyPage3 from "../01-lazyload/pages/LazyPage3";
import logo from "../logo.svg";

const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink to="/lazy1">Lazy1</NavLink>{" "}
            </li>
            <li>
              <NavLink to="/lazy2">Lazy2</NavLink>{" "}
            </li>
            <li>
              <NavLink to="/lazy3">Lazy3</NavLink>{" "}
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/lazy1" element={<LazyPage1 />} />
          <Route path="/lazy2" element={<LazyPage2 />} />
          <Route path="/lazy3" element={<LazyPage3 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Navigation;
