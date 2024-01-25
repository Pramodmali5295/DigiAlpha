import "./App.css";
import Containt from "./Components/Containt/Containt";

import Footer from "./Components/Footer/Footer";
import Imagecontaint from "./Components/ImageContaint/Imagecontaint";
import Navbar from "./Components/Navbar/Navbar";
import Section from "./Components/Section/Section";
import Slidercom from "./Components/Slider/Slidercom";

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
