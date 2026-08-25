const LogoutButton = () => {
  function handleLogout() {
    const token = localStorage.getItem("pg_access_token");
    if (token) {
      localStorage.removeItem("pg_access_token");
    }
  }
  return (
    <button
      className="p-2 text-red-600 bg-black text-[12px] rounded-[5px] text-black "
      onClick={handleLogout}
    >
      LogOut
    </button>
  );
};

export default LogoutButton;
