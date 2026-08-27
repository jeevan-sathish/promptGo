import Login from "../auth/Login";

const LoginPage = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-black">
      <div className="w-[400px] h-auto p-10 text-black flex flex-col  items-center gap-1 rounded-2xl bg-zinc-900 ">
        <p>
          <span className="text-[90px] font-extralight text-white">P</span>
          <span className="text-[90px] text-amber-700 font-extrabold">G</span>
        </p>
        <div className="text-center">
          <p className=" animate-pulse text-white text-[24px]">
            <span className="text-yellow-400">wellcome`!</span> LogIn with
          </p>
          <h1 className="text-[40px] font-extralight text-white">
            Prompt
            <span className="font-extrabold text-amber-900">Go</span>
          </h1>
        </div>
        <Login />
      </div>
    </div>
  );
};

export default LoginPage;
