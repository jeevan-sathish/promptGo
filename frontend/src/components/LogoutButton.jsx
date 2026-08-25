const LogoutButton = () => {
  function handleLogout() {
    const token = localStorage.getItem("pg_access_token");
    if (token) {
      localStorage.removeItem("pg_access_token");
    }
  }
  return (
    <button
      className="p-2 rounded-[10px] bg-red-500 text-black "
      onClick={handleLogout}
    >
      LogOut
    </button>
  );
};

export default LogoutButton;
