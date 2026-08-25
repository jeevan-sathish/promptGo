import { Link } from "react-router-dom";

import LogoutButton from "./LogoutButton";
import LoginBtn from "./LoginBtn";

const Nav = () => {
  return (
    <div className="w-full h-12 flex text-white bg-amber-800 justify-around items-center sticky gap-3 top-0 z-50">
      <h1 className="text-[20px] font-extralight text-gray-500">
        Prompt<span className="font-extrabold text-amber-900">Go</span>
      </h1>
      <div className="flex flex-row gap-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
      <div>
        <LoginBtn />
        <LogoutButton />
      </div>
    </div>
  );
};

export default Nav;
