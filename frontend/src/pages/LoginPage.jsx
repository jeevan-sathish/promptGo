import Login from "../auth/Login";

const LoginPage = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-black">
      <div className="w-[400px] h-[500px] text-black flex flex-col justify-center items-center gap-2 rounded-2xl bg-zinc-900 ">
        <div>
          <p className=" animate-pulse text-white text-[24px]">
            wellcome`! LogIn with our site{" "}
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
