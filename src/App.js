import './App.css';
import Navbar from "./components/Navbar";
import Challenge from "./components/Challenge";
import Projects from "./components/projects";
import Benefits from "./components/Benefits";
import Create from "./components/Create";
import Reasons from "./components/Reasons";
import Banner from "./components/Banner";

function App() {
  return (
    <>
      <div className="bg-blue-background">
        <Navbar/>
        <Challenge/>
        <Reasons/>
        <Banner/>
        <Benefits/>
        <Projects/>
        <Create/>
      </div>

    </>
  );
}

export default App;
