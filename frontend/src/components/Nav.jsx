import { Link } from "react-router-dom";

import LogoutButton from "./LogoutButton";

const Nav = () => {
  return (
    <div className="w-full h-12 flex bg-amber-800 justify-center items-center sticky gap-3 top-0 z-50">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/playground">playground</Link>
      <LogoutButton />
    </div>
  );
};

export default Nav;
