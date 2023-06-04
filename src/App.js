import Navbar from "./components/Navbar";
import Showcase from "./components/Showcase";
import Counts from "./components/Counts";
import Features from "./components/Features";
import About from "./components/About";
import FoodMenu from "./components/FoodMenu";
import TestimonialContainer from "./components/TestimonialContainer";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Showcase />
      <Counts />
      <Features />
      <About />
      <FoodMenu />
      <TestimonialContainer />
      <Footer />
    </div>
  );
}

export default App;
