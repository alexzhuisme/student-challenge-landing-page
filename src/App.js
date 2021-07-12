import './App.css';
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Challenge from "./components/Challenge";
import Projects from "./components/projects";
import Benefits from "./components/Benefits";
import Divider from "./components/Divider";
import Create from "./components/Create";

function App() {
  return (
    <>
      <Navbar/>
      <div className="bg-gray-100">
        <Banner/>
        <Challenge/>
        <Divider/>
        <Benefits/>
        <Divider/>
        <Projects/>
        <Divider/>
        <Create/>
      </div>

    </>
  );
}

export default App;
