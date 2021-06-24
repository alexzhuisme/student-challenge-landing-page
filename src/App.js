import './App.css';
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Challenge from "./components/Challenge";
import Projects from "./components/projects";
// import Reasons from "./components/Reasons";
import Benefits from "./components/Benefits";
import Divider from "./components/Divider";

function App() {
  return (
    <>
      <Navbar/>
      <div className="bg-gray-100">
        <Banner/>
        <Challenge/>
        <Divider/>
        {/*<Reasons/>*/}
        <Benefits/>
        <Projects/>
      </div>

    </>
  );
}

export default App;
