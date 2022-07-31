import { Link, Route, Routes, useLocation } from "react-router-dom";
import LazyPage1 from "../pages/LazyPage1";
import LazyPage2 from "../pages/LazyPage2";
import LazyPage3 from "../pages/LazyPage3";

const Navigation = () => {
  const { pathname } = useLocation();

  return (
    <div>
      <h2>LazyLayout Pages</h2>
      <ul>
        <li>
          <Link to={`${pathname}/lazy2`}>Lazy Page1</Link>
        </li>
        <li>
          <Link to={`${pathname}/lazy2`}>Lazy Page2</Link>
        </li>
        <li>
          <Link to={`${pathname}/lazy3`}>Lazy Page3</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/lazyload/lazy1" element={<LazyPage1 />} />
        <Route path="/lazyload/lazy2" element={<LazyPage2 />} />
        <Route path="/lazyload/lazy3" element={<LazyPage3 />} />
      </Routes>
    </div>
  );
};

export default Navigation;
