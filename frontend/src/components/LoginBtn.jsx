import { useNavigate } from "react-router-dom";

const LoginBtn = () => {
  const navigate = useNavigate();
  function handleLogIn() {
    navigate("/login");
  }
  return (
    <button
      onClick={handleLogIn}
      className="p-2 text-white bg-blue-600 text-[12px] rounded-[5px] text-black "
    >
      LogIn
    </button>
  );
};

export default LoginBtn;
