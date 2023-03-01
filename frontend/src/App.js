import TopButton from "./components/TopButton";
import Inputs from "./components/Inputs";
import TimeLocation from "./components/TimeLocation";
import Detail from "./components/Detail";

function App() {
  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
      <TopButton />
      <Inputs />
      <TimeLocation />
      <Detail />
    </div>
  );
}

export default App;
