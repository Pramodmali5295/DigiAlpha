import "./App.css";
import Containt from "./Containt";

import Footer from "./Footer";
import Imagecontaint from "./Imagecontaint";
import Navbar from "./Navbar";
import Section from "./Section";
import Slidercom from "./Slidercom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slidercom />
      <Containt />
      <Section />
      <Imagecontaint />
      <Footer />
    </div>
  );
}

export default App;
