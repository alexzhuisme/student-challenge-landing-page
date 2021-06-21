import './App.css';
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Challenge from "./components/Challenge";
import Projects from "./components/projects";
import Reasons from "./components/Reasons";

function App() {
  return (
    <>
      <Navbar/>
      <Banner/>
      <Challenge/>
      <Reasons/>
      <Projects/>
    </>
  );
}

export default App;
