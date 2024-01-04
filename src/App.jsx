import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import './App.css'
import Companies from "./components/Companies/Companies";
import Residencies from "./components/Residencies/Residencies";
import Value from "./components/Value/Value";
import Contact from "./components/Contact/Contact";
import Started from "./components/Started/Started";

function App() {
  return (
    <div className="App relative overflow-x-clip">
      <div className=" relative">
        <div className="white-gradient absolute w-80 h-80 bg-[rgba(255,255,255,0.45)] rounded-[100px] blur-[100px]"/>
        <Header/>
        <Hero/>
      </div>
      <Companies/>
      <Residencies/>
      <Value/>
      <Contact/>
      <Started/>
    </div>
  );
}

export default App;
