import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import LazyPage1 from "../01-lazyload/pages/LazyPage1";
import logo from "../logo.svg";
import { routes } from "./routes";

const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            {routes.map(({ path, name }) => (
              <li key={path}>
                <NavLink to={path}>{name}</NavLink>{" "}
              </li>
            ))}
          </ul>
        </nav>

        <Routes>
          {routes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
          <Route path="/" element={<LazyPage1 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Navigation;
