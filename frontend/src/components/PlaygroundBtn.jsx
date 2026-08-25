import { useNavigate } from "react-router-dom";

const PlaygroundBtn = () => {
  const navigate = useNavigate();
  function handleNavigate() {
    navigate("/playground");
  }
  return (
    <button
      onClick={handleNavigate}
      className="w-50 h-12.5 rounded-2xl bg-amber-700 hover:bg-amber-600"
    >
      Let's try
    </button>
  );
};

export default PlaygroundBtn;
