import PlaygroundBtn from "../components/PlaygroundBtn";

const Home = () => {
  return (
    <div className="w-full h-screen flex-col gap-4 bg-black flex justify-center items-center text-white">
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-[70px] font-extralight">
          Prompt<span className="font-extrabold text-amber-900">Go</span>
        </h1>
        <p className="text-gray-500 text-center pl-10 pr-10">
          PromptForge helps you write better prompts and get better AI
          responses. Analyze, improve, learn, and master prompt engineering.
        </p>
      </div>
      <PlaygroundBtn />
    </div>
  );
};

export default Home;
