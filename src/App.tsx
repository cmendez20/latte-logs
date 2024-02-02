import { Route, Routes, NavLink } from "react-router-dom";
import { Home } from "./pages/Home";
import { Favorites } from "./pages/Favorites";

function App() {
  return (
    <>
      <nav className="px-4 py-8">
        <ul className="flex items-center justify-between md:mx-auto md:max-w-6xl">
          <li>
            <NavLink to="/" className="text-xl font-bold">
              Latte Logs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/favorites"
              className="text-xl"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "",
              })}
            >
              Favorites
            </NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </>
  );
}

export default App;
