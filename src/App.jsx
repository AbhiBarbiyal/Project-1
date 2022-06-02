import Intro from "./Components/Intro/Intro";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import { Navbar } from "./Components/Navbar/Navbar";



const App = () => {
  return <div>
    <Navbar />
    <Intro />
    <About />
    <Projects />
    <Contact />

  </div>;
};

export default App;